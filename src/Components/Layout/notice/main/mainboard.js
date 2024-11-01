import React, { useState } from 'react';
import './mainboard.css';
import { useNavigate } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";



const MainBoard = () => {
  const [selectedBoard, setSelectedBoard] = useState('큐슈지방');
  const regions = ['큐슈&오키나와', '주고쿠', '시코쿠', '주부', '간사이', '간토', '도호쿠', '홋카이도'];
  
  const navigate = useNavigate();
  const recommendedPosts = [
    '부동산 구입시 10가지!',
    '주식 투자 필수 팁',
    '효율적인 자산관리 방법',
    '새로운 부동산 규정',
    '성공적인 창업 전략'
  ];
  const recommendedPosts2=[
    '불꽃 축제',
    '얼음 축제',
    '도깨비 축제',
    '꽃 놀이',
    '물 놀이'
  ];

        
  const handleBoardClick = (region) => {
    navigate(`/notice/region/board/list/${region}`);
  };

  return (
    <div className='back-color'>
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
            onClick={() => handleBoardClick(region)}
            

          >
            {<LuMapPin />}
            {region}
            
          </button>
        ))}
        </div>
      </section>
      
      
      {/* 추천 게시글 */}
      <section className="recommendation-section">
        <div className="recommendation-list">
          <h2 className='bottom-list'>오늘 추천을 가장 많이 받은 게시글</h2>
          {recommendedPosts.map((post,rank) => (
            <div className="recommendation-item" key={rank}>
              <div className="rank">{rank+1}</div>              
              <div className="content">{post}</div>                            
            </div>
          ))}
        </div>

        <div className="recommendation-list">
          <h2 className='bottom-list'>오늘 추천을 많이 받은 축제 게시글</h2>
          {recommendedPosts2.map((post,rank) => (
            <div className="recommendation-item" key={rank}>
              <div className="rank">{rank+1}</div>
              <div className="content">{post}</div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
    </div>
  );
};



export default MainBoard;