import React,{useState} from 'react';
import './rental_mypage.css'; // CSS 파일을 import 합니다.
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const RentalMyPage = () => {
  const [isOpen, setIsOpen]=useState(false);
  const [secondisOpen, setsecondisOpen]=useState(false);
  const toggleModal=()=>{
    setIsOpen(!isOpen);
  }
  const toggleModal2=()=>{
    setsecondisOpen(!secondisOpen);
  }

  const navigate=useNavigate();
  return (
    <div className="mypage-container">
   

      <div className="profile-section">
        <img src="img/ye.jpg" alt="프로필" className="profile-img" />
        <p className="greeting">ye님! 안녕하세요</p>
        <button className="chat-btn2" onClick={toggleModal2}
          >나의 채팅</button>
          {secondisOpen&&(
             <div className="modal-overlay">
             <div className="modal-content">
               <h2>나의 채팅 목록</h2>
               <table className="chat-table">
                 <tbody>
                   <tr>
                     <td>
                       <img
                         src="/path_to_image/host_profile.png"
                         alt="Host"
                         className="profile-img"
                       />
                     </td>
                     <td>
                       <div className="chat-text">
                         <p><strong>호스트:</strong> 감사합니다! 하나시마에 놀러가는 일정...</p>
                       </div>
                     </td>
                     <td>
                       <div className="chat-time">2024-05-02 23:15</div>
                     </td>
                   </tr>
                 </tbody>
               </table>
   
               <button onClick={toggleModal2} className="close-modal-btn">
                 닫기
               </button>
             </div>
           </div>

          )}
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
          <button className="review-btn"
          onClick={toggleModal}>후기 남기기</button>

{isOpen && (
  <div className="modal-overlay">
    <div className="modal-content">
      <h2 className="modal-title">후기 남기기</h2>
      <div className="review-location">
        <span className="location-icon">📍</span> 도쿄 다이페 구 1R
      </div>
      <textarea
        className="review-input"
        placeholder="관심이 가셨던 점을 남겨주세요"
      />
      <button onClick={toggleModal} className="close-modal-btn">
        닫기
      </button>
    </div>
  </div>
)}
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
