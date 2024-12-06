//MoveProfileReview.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchReviews = (companyId) => {

    const [companyImage, setCompanyImage] = useState(null);
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reactionValue, setReactionValue] = useState(0); // 0: 未選択, 1: いいね, -1: だめ
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newReview, setNewReview] = useState({
        companyId: companyId,
        userKey: '',
        comment: '',
        rating: '',
        price: '',
        region: '',
        serviceDate: ''
    });

    const fetchCompanyDetails = async (companyId) => {
        try {
            setLoading(true); // 开始加载
            const response = await axios.get(`/move/company/companies/${companyId}`);
            setCompany(response.data); // 保存到状态中
        } catch (error) {
            console.error('회사 세부 정보를 가져오는 동안 오류가 발생했습니다:', error);
            setError('회사 정보를 불러올 수 없습니다');
        } finally {
            setLoading(false); // 确保加载完成后设置为 false
        }
    };

    useEffect(() => {
        if (companyId) {
            fetchCompanyDetails(companyId);
        }
    }, [companyId]);

    const fetchImage = async (uuid) => {
        try {
            const response = await axios.get(`/move/company/getImage`, {
                params: { uuid },
                responseType: 'arraybuffer',
            });
            const imageSrc = URL.createObjectURL(new Blob([response.data]));
            setCompanyImage(imageSrc);
        } catch (error) {
            console.error('이미지를 가져오는 동안 오류가 발생했습니다:', error);
        }
    };

    useEffect(() => {
        if (company && company.logoUuid) {
            fetchImage(company.logoUuid); // 假设后端返回的 logo UUID 字段为 logoUuid
        }
    }, [company]);

    const loadCompanyImage = async () => {
        const imageSrc = await fetchImage(company.uuid); // 传入公司 UUID
        setCompanyImage(imageSrc);
    };

    useEffect(() => {
        if (company && company.uuid) {
            loadCompanyImage();
        }
    }, [company]);

    const fetchReviewsWithLogos = async () => {
        try {
            const response = await axios.get(`/move/review/logo`);
            setReviews(response.data);
        } catch (error) {
            console.error('로고/리뷰를 가져오는 동안 오류가 발생했습니다:', error);
            setError('리뷰와 회사 정보를 불러올 수 없습니다');
        }
    };

    useEffect(() => {
        fetchReviewsWithLogos();
    }, []);

    const fetchReviews = async () => {
        try {
            if (companyId) {
                const response = await axios.get(`/move/review/${companyId}`); // 请求特定公司评论
                setReviews(response.data);
            }
        } catch (error) {
            console.error('评论加载失败:', error);
            setError('无法加载评论数据');
        }
    };

    useEffect(() => {
        fetchReviews();
    }, [companyId]); // 在 companyId 变化时重新加载评论

    // 定义 renderStars 函数来显示星星
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);  // 实心星星的数量
        const emptyStars = 5 - fullStars;      // 空心星星的数量

        return (
            <>
                {Array.from({ length: fullStars }, (_, i) => (
                    <span key={`full-${i}`} style={{ color: 'gold' }}>★</span>
                ))}
                {Array.from({ length: emptyStars }, (_, i) => (
                    <span key={`empty-${i}`} style={{ color: 'lightgray' }}>☆</span>
                ))}
            </>
        );
    };

    const fetchReactionCounts = async (reviewId) => {
        try {
            const response = await axios.get(`/move/reactionCounts/${reviewId}`);
            return response.data; // 返回 { likeCount, dislikeCount }
        } catch (error) {
            console.error(`Failed to fetch reaction counts for review ${reviewId}:`, error);
            return { likeCount: 0, dislikeCount: 0 }; // 返回默认值
        }
    };

    const fetchReviewsWithReactions = async () => {
        try {
            // 如果 `companyId` 存在，加载特定公司的评论；否则加载所有评论
            const reviewsResponse = companyId
                ? await axios.get(`/move/review/${companyId}`) // 请求特定公司评论
                : await axios.get('/move/review/logo'); // 请求所有评论
    
            const reviews = reviewsResponse.data;
    
            // 为每条评论加载点赞和点踩计数
            const updatedReviews = await Promise.all(
                reviews.map(async (review) => {
                    const reactionCounts = await fetchReactionCounts(review.reviewId);
                    return {
                        ...review,
                        likeCount: reactionCounts.likeCount,
                        dislikeCount: reactionCounts.dislikeCount,
                        reactionValue: 0, // 默认状态为 0
                    };
                })
            );
    
            setReviews(updatedReviews); // 更新评论状态
        } catch (error) {
            console.error('Failed to fetch reviews with reactions:', error);
            setError('评论加载失败');
        } finally {
            setLoading(false);
        }
    };    

    useEffect(() => {
        fetchReviewsWithReactions();
    }, [companyId]); // 确保在 companyId 变化时重新加载评论


    const handleReaction = async (reviewId, reactionType) => {
        try {
            const response = await axios.post(`/move/reactions/${reviewId}`, null, {
                params: { reactionType },
            });

            if (response.status === 200) {
                console.log('Reaction updated successfully.');

                const updatedReviews = reviews.map((review) =>
                    review.reviewId === reviewId
                        ? {
                            ...review,
                            reactionValue:
                                reactionType === 'like'
                                    ? review.reactionValue === 1
                                        ? 0 // 如果已点赞，则取消
                                        : 1 // 设置为点赞
                                    : review.reactionValue === -1
                                        ? 0 // 如果已点踩，则取消
                                        : -1, // 设置为点踩
                            likeCount:
                                reactionType === 'like'
                                    ? review.reactionValue === 1
                                        ? review.likeCount - 1
                                        : review.likeCount + 1
                                    : review.likeCount,
                            dislikeCount:
                                reactionType === 'dislike'
                                    ? review.reactionValue === -1
                                        ? review.dislikeCount - 1
                                        : review.dislikeCount + 1
                                    : review.dislikeCount,
                        }
                        : review
                );

                setReviews(updatedReviews);
            } else {
                throw new Error('Failed to update reaction.');
            }
        } catch (error) {
            console.error(`Failed to ${reactionType} review:`, error);
        }
    };

    // 点赞
    const handleLike = (reviewId) => {
        handleReaction(reviewId, 'like');
    };

    // 点踩
    const handleDislike = (reviewId) => {
        handleReaction(reviewId, 'dislike');
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();

        // 确保 companyId 和 userKey 都存在
        if (!newReview.companyId || !newReview.userKey) {
            alert("Company ID or User Key is missing.");
            return;
        }

        try {
            const response = await axios.post(`/move/review/register`, {
                companyId: newReview.companyId,
                userKey: newReview.userKey,
                comment: newReview.comment,
                price: newReview.price,
                region: newReview.region,
                rating: newReview.rating,
                serviceDate: newReview.serviceDate,
            });


            alert('Review added successfully!');
            setNewReview({ companyId: newReview.companyId, userKey: newReview.userKey, comment: '', rating: '', price: '', region: '', serviceDate: '' }); // 重置表单
            setIsModalOpen(false); // 关闭模态框
        } catch (error) {
            console.error('Failed to submit review:', error);
            alert(`Failed to submit review: ${error.response?.data || error.message}`);
        }
    };


    return {
        company,
        loading,
        reactionValue,
        setReactionValue,
        handleLike,
        handleDislike,
        reviews,
        newReview,
        setNewReview,
        isModalOpen,
        setIsModalOpen,
        handleReviewSubmit,
        fetchReviewsWithLogos,
        renderStars,
        companyImage,
        error,
    };
}

export default useFetchReviews;
