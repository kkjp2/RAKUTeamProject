//MoveReview.js
import React from 'react';
import './MoveReview.css';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Layout from '../move_layout/MoveLayout';
import useFetchReviews from '../move_api/MoveProfileReview'; // 引入自定义 Hook

function Review() {
    // 不传递 companyId，默认获取所有评论
    const { renderStars, reviews, loading, error, handleLike, handleDislike ,company} = useFetchReviews();

    console.log('Review - reviews:', reviews); // 添加这行来调试

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const getLogoUrl = (review) => {
        return `http://localhost:8080/uploads/${review.folderPath}/${review.uuid}_${review.fileName}`;
    }

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
                                            src={getLogoUrl(review)}
                                            alt="会社のロゴ"
                                            className='review_usericon'
                                        // onError={(e) => { e.target.onerror = null; e.target.src = {userIcon}; }}
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
                                                <button className='review_like_button' onClick={() => handleLike(review.reviewId)}>
                                                    <AiOutlineLike className='review_like' color={review.reactionValue === 1 ? 'red' : 'black'} />
                                                </button>
                                                <p>{review.likeCount || 0}</p> {/* 显示点赞数量 */}
                                            </div>
                                            <div className='review_likeContainer'>
                                                <button className='review_like_button' onClick={() => handleDislike(review.reviewId)}>
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
        </Layout >
    );
}
export default Review;
