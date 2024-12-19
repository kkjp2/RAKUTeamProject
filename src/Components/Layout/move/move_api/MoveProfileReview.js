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
            setLoading(true);
            const response = await axios.get(`http://localhost:8080/move/company/companies/${companyId}`);
            setCompany(response.data);
        } catch (error) {
            console.error('회사 세부 정보를 가져오는 동안 오류가 발생했습니다:', error);
            setError('회사 정보를 불러올 수 없습니다');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (companyId) {
            fetchCompanyDetails(companyId);
        }
    }, [companyId]);

    const fetchImage = async (uuid) => {
        try {
            const response = await axios.get(`http://localhost:8080/move/company/getImage`, {
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
            fetchImage(company.logoUuid);
        }
    }, [company]);

    const loadCompanyImage = async () => {
        const imageSrc = await fetchImage(company.uuid);
        setCompanyImage(imageSrc);
    };

    useEffect(() => {
        if (company && company.uuid) {
            loadCompanyImage();
        }
    }, [company]);

    const fetchReviewsWithLogos = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/move/review/logo`);
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
                const response = await axios.get(`http://localhost:8080/move/review/${companyId}`); // 请求特定公司评论
                setReviews(response.data);
            }
        } catch (error) {
            console.error('コメントの読み込みに失敗しました:', error);
            setError('コメントデータをロードできません');
        }
    };

    useEffect(() => {
        fetchReviews();
    }, [companyId]);

    // 별을 나타내기 위한 renderStars 함수 
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const emptyStars = 5 - fullStars;

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
            const response = await axios.get(`http://localhost:8080/move/reactionCounts/${reviewId}`);
            return response.data; // 返回 { likeCount, dislikeCount }
        } catch (error) {
            console.error(`Failed to fetch reaction counts for review ${reviewId}:`, error);
            return { likeCount: 0, dislikeCount: 0 }; // 返回默认值
        }
    };

    const fetchReviewsWithReactions = async () => {
        try {
            //`companyId`가 존재하면 특정 회사의 코멘트를 로딩하고, 그렇지 않으면 모든 코멘트를 로딩
            const reviewsResponse = companyId
                ? await axios.get(`http://localhost:8080/move/review/${companyId}`) // 특정 회사
                : await axios.get('http://localhost:8080/move/review/logo'); // 모든 코멘트

            const reviews = reviewsResponse.data;

            //  댓글마다 좋아요와 밟기 횟수를 기록
            const updatedReviews = await Promise.all(
                reviews.map(async (review) => {
                    const reactionCounts = await fetchReactionCounts(review.reviewId);
                    return {
                        ...review,
                        likeCount: reactionCounts.likeCount,
                        dislikeCount: reactionCounts.dislikeCount,
                        reactionValue: 0, // 초기 0
                    };
                })
            );

            setReviews(updatedReviews); // 리뷰 상태 업데이트
        } catch (error) {
            console.error('Failed to fetch reviews with reactions:', error);
            setError('コメントの読み込みに失敗しました');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviewsWithReactions();
    }, [companyId]);

    const handleReaction = async (reviewId, reactionType) => {
        const accessToken = window.sessionStorage.getItem('accesstoken');
        console.log(accessToken);
        try {
            const response = await axios.post(
                `http://localhost:8080/move/reactions/${reviewId}`,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,

                    },
                    params: { reactionType }
                }
            );

            if (response.status === 200) {
                console.log('反応が正常に更新されました。');

                setReviews((prevReviews) => {
                    return prevReviews.map((review) => {
                        if (review.reviewId === reviewId) {
                            let newReactionValue = review.reactionValue;

                            // 현재 reactionValue를 판단하고 클릭 reactionType에 따라 업데이트
                            if (newReactionValue === 1) { 
                                newReactionValue = reactionType === 'like' ? 0 : -1; // 点赞取消或改为点踩
                            } else if (newReactionValue === -1) { // 如果当前是点踩
                                newReactionValue = reactionType === 'dislike' ? 0 : 1; // 点踩取消或改为点赞
                            } else { // 如果当前没有反应
                                newReactionValue = reactionType === 'like' ? 1 : -1; // 默认设置为点赞或点踩
                            }

                            // 更新评论反应
                            const newLikeCount = newReactionValue === 1
                                ? review.likeCount + 1
                                : review.reactionValue === 1
                                    ? review.likeCount - 1
                                    : review.likeCount;

                            const newDislikeCount = newReactionValue === -1
                                ? review.dislikeCount + 1
                                : review.reactionValue === -1
                                    ? review.dislikeCount - 1
                                    : review.dislikeCount;

                            return {
                                ...review,
                                reactionValue: newReactionValue,
                                likeCount: newLikeCount,
                                dislikeCount: newDislikeCount,
                            };
                        }
                        return review;
                    });
                });
            } else {
                throw new Error('反応の更新に失敗しました。');
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

        try {
            const accessToken = window.sessionStorage.getItem('accesstoken');
            if (!accessToken) {
                alert("토큰이 누락되었습니다!");
                return;
            }

            console.log(accessToken);
            const response = await axios.post(`http://localhost:8080/move/review/register`, newReview, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            console.log(response.data);

            alert('리뷰가 성공적으로 추가되었습니다!');
            setNewReview({ companyId: newReview.companyId, userKey: newReview.userKey, comment: '', rating: '', price: '', region: '', serviceDate: '' }); // Reset form
            setIsModalOpen(false); // Close the modal // 关闭模态框
        } catch (error) {
            console.error('리뷰 제출 실패:', error);
            alert(`리뷰 제출 실패: ${error.response?.data || error.message}`);
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
