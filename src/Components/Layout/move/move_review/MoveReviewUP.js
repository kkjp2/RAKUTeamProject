// MoveReviewUP.js
import React from 'react';
import './MovereviewUP.css';

const UploadReview = ({
    isModalOpen,
    setIsModalOpen,
    company,
    newReview,
    setNewReview,
    handleReviewSubmit
}) => {
    return (
        <div className="upload_review_container">
            {isModalOpen && (
                <div className="profile_modal_overlay">
                    <div className="profile_modal_content">
                        <h2>レビューを投稿</h2>
                        <form onSubmit={handleReviewSubmit}>
                            <div className="review_form_group">
                                <label>会社名</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={company.name}
                                    readOnly
                                />
                            </div>
                            <div className="review_form_group">
                                <label>サービス評価</label>
                                <input
                                    type="number"
                                    name="serviceRating"
                                    value={newReview.rating}
                                    onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                                    min="1"
                                    max="5"
                                />
                            </div>
                            <div className="review_form_group">
                                <label>引越し費用</label>
                                <input
                                    type="text"
                                    name="cost"
                                    value={newReview.price}  // 确保绑定到正确的状态字段
                                    onChange={(e) => setNewReview({ ...newReview, price: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="review_form_group">
                                <label>引越し地域</label>
                                <input
                                    type="text"
                                    name="region"
                                    value={newReview.region}
                                    onChange={(e) => setNewReview({ ...newReview, region: e.target.value })}
                                />
                            </div>
                            <div className="review_form_group">
                                <label>サービス利用日</label>
                                <input
                                    type="date"
                                    name="serviceDate"
                                    value={newReview.serviceDate}
                                    onChange={(e) => setNewReview({ ...newReview, serviceDate: e.target.value })}
                                />
                            </div>
                            <div className="review_form_group">
                                <label>コメント</label>
                                <textarea
                                    name="comment"
                                    value={newReview.comment}
                                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                    required
                                />
                            </div>
                            <div className='reviewUP_btns_form_group'>
                                <button type="submit" className='reviewUP_submit_btn'>提交评论</button>
                                <button type="button" className='reviewUP_submit_btn' onClick={() => setIsModalOpen(false)}>取消</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadReview;
