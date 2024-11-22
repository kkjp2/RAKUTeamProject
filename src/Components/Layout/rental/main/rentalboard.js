import React, { useState } from 'react';
import './rentalboard.css';
import { useNavigate } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";



const RentalBoard = () => {
const [selectedBoard, setSelectedBoard] = useState('큐슈지방');
const regions = ['큐슈&오키나와', '주고쿠', '시코쿠', '주부', '간사이', '간토', '도호쿠', '홋카이도'];
  
  const navigate = useNavigate();
        
  const handleBoardClick = (region) => {
    navigate(`/rental/list/${region}`);
  };

  return (
    <div className='back-color'>
    <div className="main-board">      
      <section className="board-selection">
        <h2>렌탈 지역 선택</h2>                   
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
      <h2 className='main_ment'>집을 구할때까지 임시 거처 공간이 필요하다면 지금 당장 활용해보세요!<br/>
          집을 비울일이 생긴다면 대여해주고 돈을 벌어 보아요!
      </h2>
      <h1 className='sub_ment'>Rental Home</h1>
      <div className='img_master'>
      <div className='img_container'>
        <img src='img/mainpage1.jpg' alt='Image 1'/>
        <p>화이트 톤이 좋다.</p>
      </div>
      <div className='img_container'>
        <img src='img/mainpage2.jpg' alt='Image 2'/>
        <p>편안하게 쉬고싶은 아늑한 집에서 머물다.</p>
      </div>
    </div>              
    </div>
      <h1 className='ronaldo'>New Comfortable Life Style</h1>
      <h1 className='ronaldo'>RAKU!</h1>
    </div>
    
  );
};



export default RentalBoard;