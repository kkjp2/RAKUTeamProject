//MoveCompanyProfile.js
import React from 'react';
import Layout from '../move_layout/MoveLayout';
import '../move_company_profile/MoveCompanyProfile.css';
import userIcon from '../move_img/usericon.png';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import useFetchCompanyDetails from '../move_api/MoveProfileReview'
import UploadReview from '../move_review/MoveReviewUP';

function CompanyProfile() {
    const {
        company,
        loading,
        handleLike,
        handleDislike,
        reviews,
        newReview,
        setNewReview,
        isModalOpen,
        setIsModalOpen,
        handleReviewSubmit,
    } = useFetchCompanyDetails();
    console.log("Fetched company details:", company);


    if (loading) {
        return <div>Loading company details...</div>;
    }

    if (!company) {
        return <div>No matching company found for this ID.</div>;
    }

    return (
        <Layout>
            <div className="profile-container">
                <div className="profile-header">
                    <img src={company.img_icon || 'default_image.png'} alt={`${company.name} logo`} className="profile-logo" />
                    <div className="profile-company-info">
                        <h1>{company.name}</h1>
                        <p>{company.description}</p>
                        <button className="email-button">
                            <a href={`mailto:${company.email}`}>メール問い合わせ</a>
                        </button>
                    </div>
                </div>
                <p>家庭の引越し、企業の移転、国際的な輸送を含む全面的な引越しサービスを提供しています。</p>
                <hr />
                <div className="profile-main">
                    <h2>主要サービス</h2>
                    <ul>
                        <li>
                            <span>家庭の引越し: </span>個人および家族の引越しニーズに応じたカスタマイズ可能なサービスを提供します。梱包、運搬、配置まで全てサポート。
                        </li>
                        <li>
                            <span>企業の移転 : </span>オフィス移転に必要な全ての要素をカバーする専門的なサービス。事務所の設備や機密書類の安全な輸送を保証。
                        </li>
                        <li>
                            <span>国際的な輸送 : </span>海外への引越しサービスでは、荷物の国際規格に合わせた梱包、通関手続きの支援から配送までを一手に担います。
                        </li>
                    </ul>
                </div>
                <div className="profile-footer">
                    <p>詳細情報やお問い合わせについては、隣のリンクをクリックしてください。</p>
                </div>
            </div>
            <div className='review_container'>
                <div className='review_container1'>
                    <div className='review_container2'>
                        <h1>Review</h1>
                        <div className=''>
                            {reviews.map((review) => (
                                <div className='review_contentBox' key={review.reviewId}>
                                    <div className='review_icon_name'>
                                        <img src={userIcon} alt='ユーザーアイコン' className='review_usericon'></img>
                                        <div>
                                            <h3>会社名：{company.name}</h3>
                                            <p className='review_signature'>
                                                サービス評価 :{Array.from({ length: review.rating }, (_, i) => "★").join("")}
                                            </p>
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
                                                <p>99+</p>
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

            <div>
                {/* 进行评论按钮 */}
                <div className='review_button_container'>
                    <button className='review_submit_btn' onClick={() => setIsModalOpen(true)}>
                        レビューを投稿
                    </button>
                </div>
                {/* 模态窗口 */}
                <UploadReview
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    company={company}
                    newReview={newReview}
                    setNewReview={setNewReview}
                    handleReviewSubmit={handleReviewSubmit}
                />
            </div>
        </Layout>
    );
}

export default CompanyProfile;
