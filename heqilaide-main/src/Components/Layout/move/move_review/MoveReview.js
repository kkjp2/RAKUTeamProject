import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MoveReview.css';
import userIcon from '../move_img/usericon.png'
import { AiOutlineLike,AiOutlineDislike } from "react-icons/ai";
import Layout from '../move_layout/MoveLayout';

const Review = () => {

    // 状态用于跟踪反应值：0（无反应），1（喜欢），-1（不喜欢）
    const [reactionValue, setReactionValue] = useState(0);

    useEffect(() => {
        // 组件挂载时获取用户对该评论的现有反应
        const fetchReaction = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/move/reactions${userId}`);///${moveReviewId}
                setReactionValue(response.data.reactionValue || 0);
            } catch (error) {
                console.error('获取反应时出错：', error);
            }
        };

        fetchReaction();
    }, [userId, moveReviewId]);

    const handleLike = async () => {
        // 如果已经喜欢，取消喜欢
        if (reactionValue === 1) {
            setReactionValue(0); // 重置为无反应
            await axios.delete(`/api/reactions/cancel`, { data: { userId, moveReviewId, type: 'like' } });
            return;
        }

        // 如果不喜欢，改为喜欢
        if (reactionValue === -1) {
            setReactionValue(0); // 首先重置反应
            await axios.delete(`/api/reactions/cancel`, { data: { userId, moveReviewId, type: 'dislike' } });
        }

        // 设置为喜欢
        await axios.post(`http://localhost:8080/move/reactions/like`, { userId, moveReviewId });
        setReactionValue(1);
    };

    const handleDislike = async () => {
        // 如果已经不喜欢，取消不喜欢
        if (reactionValue === -1) {
            setReactionValue(0); // 重置为无反应
            await axios.delete(`http://localhost:8080/move/reactions/cancel`, { data: { userId, moveReviewId, type: 'dislike' } });
            return;
        }

        // 如果喜欢，改为不喜欢
        if (reactionValue === 1) {
            setReactionValue(0); // 首先重置反应
            await axios.delete(`http://localhost:8080/move/reactions/cancel`, { data: { userId, moveReviewId, type: 'like' } });
        }

        // 设置为不喜欢
        await axios.post(`http://localhost:8080/move/reactions/dislike`, { userId, moveReviewId });
        setReactionValue(-1);
    };


    return (
        <Layout>
            <div className='review_container'>
                <div className='review_container1'>
                    <div className='review_container2'>
                        <h1>Review</h1>
                        <div className='review_contentBox'>
                            <div className='review_icon_name'>
                                <img src={userIcon} alt='유저 아이콘' className='review_usericon'></img>
                                <div className=''>
                                    <h3>会社名：東京スマート引越し株式会社</h3>
                                    <pre className='review_signature'>サービス評価 : ★★★★☆ 4.0</pre>
                                </div>
                            </div>
                            <div className='review_content_show'>
                                <div className='review_subheading'>
                                    <p>引越し費用: [10万円]</p>
                                    <p>引越し地域: [東京都]</p>
                                    <p>サービス利用日: [2024年10月10日]</p>
                                </div>
                                <hr></hr>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;
                                    先日は大変お世話になりました。○○引越し会社さんのサービスには本当に感謝しています。スタッフの皆さんは非常にプロフェッショナルで、
                                    作業開始から終了まで終始丁寧に対応してくださいました。特に、家具や荷物の取り扱いがとても慎重で、壊れやすいものも無事に運んでいただけました。
                                    事前の打ち合わせでも細かい要望に対応していただき、引越し当日も時間通りに来てスムーズに作業が進みました。スタッフの皆さんは礼儀正しく、
                                    作業の進行も効率的で安心感がありました。また、引越し後に確認したところ、荷物に傷や汚れが一切なく、完璧な状態で新居に届けてくださったことに驚きました。
                                    料金面でも非常にリーズナブルで、コストパフォーマンスの高いサービスだと感じました。もし次回引越しをすることがあれば、またぜひお願いしたいと思います。本当にありがとうございました。
                                </p>
                                <div className='review_likeAndDisLike'>
                                    <div className='review_likeContainer'>
                                        <button className='review_like_button'>
                                            <AiOutlineLike className='review_like' color={reactionValue === 1 ? 'red' : 'black'} onClick={handleLike}/>
                                            <span>{reactionValue === 1 ? 'Remove Like' : 'Like'}</span>
                                        </button>
                                        <p>99+</p>
                                    </div>
                                    <div className='review_likeContainer'>
                                        <button className='review_like_button'>
                                            <AiOutlineDislike className='review_like' onClick={handleDislike}/>
                                            <span>{reactionValue === -1 ? 'Remove Dislike' : 'Dislike'}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='review_container3'>
                        <h2>人気会社レビュー</h2>
                        <ul className='company_list'>
                            {companies.map((company, index) => (
                                <li key={index} className='company_item'>
                                    {company}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default Review;
