import React from 'react';
import './MyPage.css';
import { FaEye } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { FiMapPin } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

const MyPage = () => {  
  return (
    <div className="mypage-container">
      <header className="mypage-header">
        <h1>게시판 마이 페이지</h1>
        
      </header>

      <div className="mypage-content">
        

        <div className="grid-container">
        <div className="profile-section">
          <img className='mew' src='img/mew.png'></img>                      
            <p className='profile-name'>유우키님! 안녕하세요</p>            
        </div>
        
          {/* 최근 조회한 게시글 */}          
          <div className="grid-item">
          
            <h3><FaEye color='blue' /> 최근 조회한 게시글</h3>
            <p>아오모리시의 네부타 축제!</p>
            <button className="more-btn">더 보기...</button>
          </div>

          {/* 내가 작성한 글 */}
          <div className="grid-item">
            <h3><TfiWrite color='purple' />내가 작성한 글</h3>
            <p>주말 일박 추천</p>
            <p>인후 하카타에 찾아야 할 상식</p>
            <button className="more-btn">더 보기...</button>
          </div>

          {/* 내가 등록한 지역 */}
          <div className="grid-item">
            <h3><FiMapPin color='green' />내가 등록한 지역</h3>
            <button className="location-btn">도호쿠 지방</button>
            <button className="add-location-btn">+</button>
          </div>

          {/* 내가 좋아요 누른 게시글 */}
          <div className="grid-item">
            <h3><FaHeart color='hotpink' />내가 좋아요 누른 게시글</h3>
            <p>집에서 나갈 수 없는 인테리어!</p>
            <button className="more-btn">더 보기...</button>
          </div>

          {/* 내가 즐겨찾기한 게시글 */}
          <div className="grid-item">
            <h3><MdOutlineStar color='yellow' />내가 즐겨찾기한 게시글</h3>
            <p>아오모리시의 네부타 축제!</p>
            <button className="more-btn">더 보기...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
