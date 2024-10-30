import React from 'react';
import './view_festival.css';
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ViewFestival = () => {
  return (
    <div className="festival-post-container">
      <header className="post-header">
        <div className="region-tag">도호쿠 지방</div>
        <h1 className="post-title">아오모리시의 네부타 축제!</h1>
        <div className="post-date">2024-05-28 17:00</div>
      </header>

      <div className="post-reactions">
        <div className="reaction-icons">
          <span className="reaction-item"><FaEye />
          조회수: 97</span>
          
        </div>
      </div>

      <div className="post-content">
        <img
          className="post-image"
          src="img/festival.png"
          alt="네부타 축제"
        />
        <p>
          가장 즐거운 축제는 전국의 사람들이 모인 네부타 대축제입니다. 아오모리시는 국내외 관광객들로 북적이며, 그 기회로 참가할 수 있는 독특한 경험을 선사합니다. 이 축제는 여러 가지 퍼포먼스와 이벤트로 가득 차 있습니다.
        </p>
      </div>

      <div className="post-actions">
        <button className="action-btn"><FaStar  color='yellow'/>추천: 50</button>
        <button className="action-btn">즐겨찾기</button>
      </div>

      <div className="comment-section">
        <div className="comment-input">
          <input type="text" placeholder="여기에 댓글을 입력하세요..." />
          <button className="submit-btn">등록</button>
        </div>

        <div className="comment-list">
          <div className="comment-item">
            <span className="comment-author">a</span>
            <span className="comment-text">재밌겠당~</span>
            <span className="comment-date">2024-05-28</span>
          </div>
          <div className="comment-item">
            <span className="comment-author">d</span>
            <span className="comment-text">우와</span>
            <span className="comment-date">2024-05-28</span>
          </div>
          <div className="comment-item">
            <span className="comment-author">PPP</span>
            <span className="comment-text">가보고 싶다!</span>
            <span className="comment-date">2024-05-28</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFestival;