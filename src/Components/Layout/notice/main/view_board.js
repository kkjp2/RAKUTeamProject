import React from 'react';
import './view_board.css';

const ViewBoard = () => {
  return (
    <div className="post-detail-container">
      <header className="post-header">
        <h1 className="post-title">동네에서 같이 산책하실분?</h1>
        <div className="post-info">
          <span className="post-author">작성자 abc123</span>
          <span className="post-date">2024-05-28 14:00</span>
        </div>
      </header>

      <div className="post-content">
        <p>
          최근에 이동네로 이사를 왔는데, 동네 친구가 없어서 같이 산책하고 밥먹을 친구 구해요. 20대 아무나 OK. 남녀 상관 X
        </p>
      </div>

      <div className="post-reactions">
        <div className="reaction-icons">
          <span className="reaction-item">72</span>
          <span className="reaction-item">10</span>
        </div>
      </div>

      <div className="post-actions">
        <button className="action-btn">좋아요</button>
        <button className="action-btn">싫어요</button>
        <button className="action-btn">신고하기</button>
      </div>

      <div className="comment-section">
        <div className="comment-input">
          <input type="text" placeholder="댓글을 입력하세요" />
          <button className="submit-btn">등록</button>
        </div>
        <div className="comment-list">
          <div className="comment-item">
            <span className="comment-author">abc123</span>
            <span className="comment-text">좋아요!</span>
            <span className="comment-date">2024-05-28</span>
          </div>
          <div className="comment-item">
            <span className="comment-author">iiiiii</span>
            <span className="comment-text">ㅋㅋㅋㅋ</span>
            <span className="comment-date">2024-05-28</span>
          </div>
          <div className="comment-item">
            <span className="comment-author">시리우스</span>
            <span className="comment-text">시리요...</span>
            <span className="comment-date">2024-05-28</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBoard;