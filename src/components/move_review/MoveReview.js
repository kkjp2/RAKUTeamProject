import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MoveReview.css';
import userIcon from '../move_img/usericon.png'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Layout from '../move_layout/MoveLayout';
import useFetchCompanyDetails from '../move_api/MoveProfileReview';

function Review() {
    const [reviews, setReviews] = useState([]);
    const [userKey, setUserKey] = useState(10);

    useEffect(() => {
        const fetchAllReviews = async () => {
            try {
                 // 调整为获取所有评论的API路径
                const response = await axios.get('/move/review/reviews', {
                    params: { userKey }
                });
                setReviews(response.data);
            } catch (error) {
                console.error('Failed to fetch reviews:', error);
            }
        };
        fetchAllReviews();
    }, [userKey]);

    const handleLike = async (reviewId) => {
        try {
            let response;
            if (reviews.find(review => review.reviewId === reviewId).reactionValue === 1) {
                // 如果当前是点赞状态，则取消点赞
                response = await axios.post(`/move/reactions/${reviewId}/cancel`, {
                    userKey
                });
            } else {
                // 否则执行点赞操作
                response = await axios.post(`/move/reactions/${reviewId}/like`, {
                    userKey
                });
            }
    
            if (response.status === 200) {
                const updatedCounts = response.data;
                const updatedReviews = reviews.map(review =>
                    review.reviewId === reviewId
                        ? {
                            ...review,
                            likeCount: updatedCounts.likeCount,
                            dislikeCount: updatedCounts.dislikeCount,
                            reactionValue: review.reactionValue === 1 ? 0 : 1 // 如果已点赞则重置为0，否则设为1
                        }
                        : review
                );
                setReviews(updatedReviews);
            } else {
                throw new Error('Failed to like or cancel like');
            }
        } catch (error) {
            console.error("Failed to like or cancel like:", error);
        }
    };
    
    const handleDislike = async (reviewId) => {
        try {
            let response;
            if (reviews.find(review => review.reviewId === reviewId).reactionValue === -1) {
                // 如果当前是点踩状态，则取消点踩
                response = await axios.post(`/move/reactions/${reviewId}/cancel`, {
                    userKey
                });
            } else {
                // 否则执行点踩操作
                response = await axios.post(`/move/reactions/${reviewId}/dislike`, {
                    userKey
                });
            }
    
            if (response.status === 200) {
                const updatedCounts = response.data;
                const updatedReviews = reviews.map(review =>
                    review.reviewId === reviewId
                        ? {
                            ...review,
                            likeCount: updatedCounts.likeCount,
                            dislikeCount: updatedCounts.dislikeCount,
                            reactionValue: review.reactionValue === -1 ? 0 : -1 // 如果已点踩则重置为0，否则设为-1
                        }
                        : review
                );
                setReviews(updatedReviews);
            } else {
                throw new Error('Failed to dislike or cancel dislike');
            }
        } catch (error) {
            console.error("Failed to dislike or cancel dislike:", error);
        }
    };    

    const {
        newReview,
        renderStars,
    } = useFetchCompanyDetails();

    return (
        <Layout>
            <div className='review_container'>
                <div className='review_container1'>
                    <div className='review_container2'>
                        <h1>Review</h1>
                        <div className=''>
                            {reviews.map((review) => (
                                <div className='review_contentBox' key={review.reviewId}>
                                    <div className='review_icon_name'>
                                        <img
                                            src={review.companyLogo || userIcon} // 显示公司 Logo 或默认用户图标
                                            alt="会社のロゴ"
                                            className='review_usericon'
                                        />
                                        <div>
                                            <h3>会社名: {review.companyName}レビューID: {review.reviewId}</h3>
                                            <p className='review_signature'>サービス評価 : {renderStars(review.rating)}</p>
                                        </div>
                                    </div>
                                    <div className='review_content_show'>
                                        <div className='review_subheading'>
                                            <p>引越し費用: {review.price}</p>
                                            <p>引越し地域: {review.region}</p>
                                            <p>サービス利用日: {review.serviceDate}</p>
                                        </div>
                                        <hr />
                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;{review.comment}</p>
                                        <div className='review_likeAndDisLike'>
                                            <div className='review_likeContainer'>
                                                <button className='review_like_button' onClick={() => handleLike(review.reviewId, newReview.userKey)}>
                                                    <AiOutlineLike className='review_like' color={review.reactionValue === 1 ? 'red' : 'black'} />
                                                </button>
                                                <p>{review.likeCount || 0}</p> {/* 显示点赞数量 */}
                                            </div>
                                            <div className='review_likeContainer'>
                                                <button className='review_like_button' onClick={() => handleDislike(review.reviewId, newReview.userKey)}>
                                                    <AiOutlineDislike className='review_like' color={review.reactionValue === -1 ? 'blue' : 'black'} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='review_container3'>
                        <h2>人気会社レビュー</h2>
                        <ul className='company_list'>
                            {companies.map((company, index) => (
                                <li key={index} className='company_item'>
                                    {company}
                                </li>
                            ))}
                        </ul>
                    </div> */}

        </Layout>
    );
}
export default Review;
