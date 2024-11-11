import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MoveReview.css';
import userIcon from '../move_img/usericon.png';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Layout from '../move_layout/MoveLayout';

function CompanyDetail() {
    const { companyId } = useParams(); // 使用 useParams 获取 companyId
    const [company, setCompany] = useState({});
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ content: '', rating: 1 });
    const [reactionValue, setReactionValue] = useState(0); // 定义 reactionValue

    useEffect(() => {
        axios.get(`http://localhost:8080/move/review/${companyId}`).then((response) => {
            setCompany(response.data);
        });
        axios.get(`http://localhost:8080/move/review/${companyId}/reviews`).then((response) => {
            setReviews(response.data);
        });
    }, [companyId]);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const userId = 1; // 简易版用户ID
        axios.post(`http://localhost:8080/move/review/${companyId}/reviews`, {
            ...newReview,
            userId
        }).then((response) => {
            setReviews([...reviews, response.data]);
            setNewReview({ content: '', rating: 1 });
        }).catch((error) => {
            console.error("Error submitting review:", error);
            if (error.response) {
                console.error("Error data:", error.response.data);
            }
        });
    };

    const handleLike = () => {
        if (reactionValue === 1) {
            setReactionValue(0); // 取消喜欢
        } else {
            setReactionValue(1); // 设置为喜欢
        }
    };

    const handleDislike = () => {
        if (reactionValue === -1) {
            setReactionValue(0); // 取消不喜欢
        } else {
            setReactionValue(-1); // 设置为不喜欢
        }
    };

    return (
        <div>
            
            <h1></h1>
            <p>{company.description}</p>
            <h2>Reviews</h2>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <strong>Rating:</strong> {review.rating}/5<br/>
                        <strong>Comment:</strong> {review.content}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleReviewSubmit}>
                <label>
                    Rating:
                    <input
                        type="number"
                        value={newReview.rating}
                        onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                        min="1"
                        max="5"
                    />
                </label>
                <label>
                    Comment:
                    <textarea
                        value={newReview.content}
                        onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                    />
                </label>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
}

export default CompanyDetail;
