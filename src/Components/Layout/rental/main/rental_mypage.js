import React from 'react';
import './rental_mypage.css'; // CSS 파일을 import 합니다.
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";

const RentalMyPage = () => {
  return (
    <div className="mypage-container">
   

      <div className="profile-section">
        <img src="img/ye.jpg" alt="프로필" className="profile-img" />
        <p className="greeting">ye님! 안녕하세요</p>
        <button className="chat-btn2">나의 채팅</button>
      </div>

      <div className="content-grid">
        {/* 즐겨찾기한 home */}
        <div className="content-box">
          <h3><FaStar color='yellow' /> 내가 즐겨찾기한 home</h3>
          <ul>
            <li>미나토쿠 구의 15평 원룸</li>
            <li>아카사카 구역 10평 원룸</li>
            <li>히가시 구역 1R</li>
          </ul>
        </div>

        {/* 나의 예약 */}
        <div className="content-box">
        <h3><IoDocumentTextOutline />나의 예약</h3>
          <p>2024-05-01 도쿄도 세타가야 구역 예약하신 3일 남았습니다.</p>
        </div>

        {/* 방문했던 home */}
        <div className="content-box">
          <h3><MdPlace />
          방문했던 home</h3>
          <p>도쿄 다이토구 1R</p>
          <button className="review-btn">후기 남기기</button>
        </div>

        {/* 렌탈 기록 */}
        <div className="content-box">
          <h3><FaCalendar />렌탈 기록</h3>
          <p>최근 렌탈 기록이 없습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default RentalMyPage;
