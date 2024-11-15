//MoveProfileReview.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";  // axios をインポート

function useFetchCompanyDetails() {

    const { companyId } = useParams(); // URL から会社 ID を取得
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reactionValue, setReactionValue] = useState(0); // 0: 未選択, 1: いいね, -1: だめ
    const [reviews, setReviews] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newReview, setNewReview] = useState({
        companyId: companyId,
        userKey: 90,       // 用户的 userKey，后续需要正确设置
        comment: '',
        rating: '',
        price: '',
        region: '',
        serviceDate: ''
    });

    useEffect(() => {
        const fetchCompanyDetails = async () => {
            try {
                // 获取公司详情
                const companyResponse = await axios.get(`/move/company/companies/${companyId}`);
                setCompany(companyResponse.data);
    
                // 获取评论基础数据
                const reviewsResponse = await axios.get(`/move/review/${companyId}`);
                const reviewsData = reviewsResponse.data;
                setReviews(reviewsData);
    
                // 获取每条评论的点赞数量
                const updatedReviews = await Promise.all(
                    reviewsData.map(async (review) => {
                        try {
                            const reactionCountResponse = await axios.get(`/move/reactionCounts/${review.reviewId}`, {
                                params: { userKey: newReview.userKey }
                            });
                            const { likeCount, reactionValue } = reactionCountResponse.data;
                            return { ...review, likeCount, reactionValue };
                        } catch (error) {
                            console.error(`Error fetching like count for review ${review.reviewId}:`, error);
                            return { ...review, likeCount: 0, reactionValue: 0 }; // 如果出错，设定默认值
                        }
                    })
                );
    
                setReviews(updatedReviews); // 更新状态
            } catch (error) {
                console.error('Error fetching company details:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchCompanyDetails();
    }, [companyId]);

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

    const handleLike = async (reviewId) => {
        try {
            const response = await axios.post(`/move/reactions/${reviewId}/like`, {
                userKey: newReview.userKey
            });

            if (response.status === 200) {
                const updatedCounts = response.data; // 假设后端返回更新后的计数
                const updatedReviews = reviews.map(review =>
                    review.reviewId === reviewId
                        ? { ...review, likeCount: updatedCounts.likeCount, dislikeCount: updatedCounts.dislikeCount, reactionValue: 1 }
                        : review
                );
                setReviews(updatedReviews); // 更新前端状态
            } else {
                throw new Error('Failed to like review');
            }
        } catch (error) {
            console.error("Failed to like review:", error);
        }
    };

    const handleDislike = async (reviewId) => {
        try {
            const response = await axios.post(`/move/reactions/${reviewId}/dislike`, {
                userKey: newReview.userKey
            });

            if (response.status === 200) {
                const updatedCounts = response.data; // 假设后端返回更新后的计数
                const updatedReviews = reviews.map(review =>
                    review.reviewId === reviewId
                        ? { ...review, likeCount: updatedCounts.likeCount, dislikeCount: updatedCounts.dislikeCount, reactionValue: -1 }
                        : review
                );
                setReviews(updatedReviews); // 更新前端状态
            } else {
                throw new Error('Failed to dislike review');
            }
        } catch (error) {
            console.error("Failed to dislike review:", error);
        }
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();

        // 确保 companyId 和 userKey 都存在
        if (!newReview.companyId || !newReview.userKey) {
            alert("Company ID or User Key is missing.");
            return;
        }

        try {
            const response = await axios.post(`/move/review`, {
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
        renderStars,
    };
}

export default useFetchCompanyDetails;
