import React, { useState } from 'react';
import './mainboard.css';
import { useNavigate } from "react-router-dom";



const MainBoard = () => {
  const [selectedBoard, setSelectedBoard] = useState('큐슈지방');
  const regions = ['큐슈&오키나와', '주고쿠', '시코쿠', '주부', '간사이', '간토', '도호쿠', '홋카이도'];
  
  const navigate = useNavigate();
        
  const handleBoardClick = (region) => {
    setSelectedBoard(region);
  };

  return (
    
    <div className="main-board">
      {/* 지역 게시판 선택 */}
      <section className="board-selection">
        <h2>지역 게시판 선택</h2>    
               
        <div className="map-container">  
        <img src="/img/japan-region-map.png" alt='map' className="map-image" /> 
           
        
        {regions.map((region,index) => (
          <button
            key={index}
            className={`region-button region-${index}`}   
                     
            //"region-button"//{selectedBoard === region ? 'active' : ''}
            onClick={() => {
              navigate("/region_board_list");
            }}
          >
            {region}
          </button>
        ))}
        </div>
      </section>
      
      {/* 추천 게시글 */}
      <section className="recommendation-section">
        <div className="recommendation-list">
          <h2>오늘 추천을 가장 많이 받은 게시글</h2>
          {[1, 2, 3, 4, 5].map((rank) => (
            <div className="recommendation-item" key={rank}>
              <div className="rank">{rank}</div>
              <div className={`content ${rank === 2 ? 'highlighted' : ''}`}></div>
            </div>
          ))}
        </div>

        <div className="recommendation-list">
          <h2>오늘 추천을 많이 받은 축제 게시글</h2>
          {[1, 2, 3, 4, 5].map((rank) => (
            <div className="recommendation-item" key={rank}>
              <div className="rank">{rank}</div>
              <div className="content"></div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};



export default MainBoard;