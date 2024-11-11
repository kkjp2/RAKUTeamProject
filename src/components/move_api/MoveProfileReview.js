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
    const [newReview, setNewReview] = useState({ comment: '', rating: '', cost: '', region: '', serviceDate: '' });

    useEffect(() => {
        const fetchCompanyDetails = async () => {
            try {
                // 获取公司详情
                const companyResponse = await axios.get(`/move/company/companies/${companyId}`);
                setCompany(companyResponse.data);

                // 获取评论
                const reviewsResponse = await axios.get(`/move/review/${companyId}/reviews`);
                setReviews(reviewsResponse.data);
            } catch (error) {
                console.error('Error fetching company details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanyDetails();
    }, [companyId]);

    // MoveProfileReview.js

    const handleLike = async (reviewId, companyId) => {
        try {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                alert("You need to log in to like a review.");
                return;
            }
    
            const response = await axios.post(`/move/reactions/like`, {
                companyId: companyId,   // 将公司ID放在请求体中
                reviewId: reviewId      // 将评论ID放在请求体中
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            if (response.status === 200) {
                updateReaction(reviewId, 1);
            } else {
                throw new Error('Failed to like review');
            }
        } catch (error) {
            console.error("Failed to like review:", error);
        }
    };
    

const handleDislike = async (reviewId) => {
    try {
        const token = localStorage.getItem("accessToken"); // 获取 token
        if (!token) {
            alert("You need to log in to dislike a review.");
            return;
        }
        const response = await axios.post(`/move/reactions/dislike`, {
            companyId: companyId,   // 将公司ID放在请求体中
            reviewId: reviewId      // 将评论ID放在请求体中
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.status === 200) {
            updateReaction(reviewId, 1);
        } else {
            throw new Error('Failed to dislike review');
        }
    } catch (error) {
        console.error("Failed to dislike review:", error);
    }
};

    const updateReaction = (reviewId, newReactionValue) => {
        const updatedReviews = reviews.map(review => {
            if (review.id === reviewId) {
                return {
                    ...review,
                    reactionValue: review.reactionValue === newReactionValue ? 0 : newReactionValue // 切换状态
                };
            }
            return review;
        });
        setReviews(updatedReviews);
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();  // 阻止表单提交的默认行为
        const token = localStorage.getItem('accessToken');

        if (!token) {
            alert('You need to log in to submit a review');
            return;
        }

        try {
            const response = await fetch(`/move/review/${companyId}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // 添加JWT Token到请求头
                },
                body: JSON.stringify({
                    comment: newReview.comment,
                    price: newReview.cost,  // 确保与 DTO 中的字段匹配
                    region: newReview.region,
                    serviceDate: newReview.serviceDate,
                }),
            });

            if (!response.ok) {
                const errorMessage = await response.text(); // 获取后端返回的错误信息
                throw new Error(errorMessage || 'Failed to submit review');
            }

            alert('Review added successfully!');
            setNewReview({ comment: '', rating: '', cost: '', region: '', serviceDate: '' });  // 重置表单
            setIsModalOpen(false);  // 关闭模态框
        } catch (error) {
            console.error('Failed to submit review:', error);
            alert(`Failed to submit review: ${error.message}`);
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
    };
}

export default useFetchCompanyDetails;
