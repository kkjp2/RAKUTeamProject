import React from 'react';
import './rental_detail.css';
import { GiCharacter } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const RentalDetail = () => {
  const navigate=useNavigate();
  return (    
    <div className="rental-detail-container">
    

      {/* Title Section */}
      <section className="rental-title-section">        
        <h1 className="rental-title">도쿄의 20평 아파트</h1>
        <button className='favorite_button'><IoStar color='yellow'/>즐겨찾기</button>        
        
        <p className="rental-author">
          작성자: <a href="#">toraparga raw</a> <span className="rental-date">2024-05-28 14:00</span>          
        </p>
        <FaEye color='skyblue'/>255
      </section>

      {/* Content Section */}
      
        <div className="rental-info">
          <div className="rental-images">
            <img src="img/a2.png" alt="room" />
            <img src="img/a1.png" alt="room" />
            <img src="img/a3.png" alt="room" />
            <img src="img/a4.png" alt="room" />
            <img src="img/a5.png" alt="room" />
            
          </div>
          
          <p className="rental-description">
          
            도쿄 다이토구에 위치한 아파트입니다. 나는 잠시 이곳을 떠나 출장을 가야합니다. 3일간 당신은 이곳에 위치할 수 있습니다.
            와이파이, 조리기구를 사용할 수 있습니다. 그외에 더 궁금한 것이 있다면 당신은 나에게 연락을 주어야 합니다.
          </p>
          <div className="rental-rating">
            <span>5.0</span>
            <div className="rental-stars">★★★★★</div>
            <p>12개의 리뷰</p>
            <p className='check_box'>체크인: 2024-06-01 체크아웃: 2024-06-03</p>
          </div>


        <section className="rental-reviews">
        <div className="review-header">
          <h3><GiCharacter />아도니스 그레이엄</h3>
          <p>나는 이곳에서 좋은 추억을 만들었습니다. 그것은... <a href="#">더보기</a></p>
        </div>
        
        <div className='reserve_box'>
            <button className="reservation-btn" onClick={()=>{
                  navigate(`/rental/reservationform`)              
            }}>예약하기</button>
            <button className="chat-btn" onClick={()=>{
              navigate(`/rental/chat`)
            }}>메시지 보내기</button>
            <p className='nedan'>가격:10,000 ¥</p>
          </div>        
        <button className="more-reviews-btn" onClick={()=>{
          navigate(`/rental/review`);
        }}>후기 12개 모두 보기</button>
      </section>                 
        </div>
        <div className='use_user'>
        <p>이용한 사용자<FaHeart  color='pink'/>12</p>
        </div>
   

 
      

      
    </div>
  );
};

export default RentalDetail;
