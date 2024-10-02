import React, { useState } from 'react';
import './rental_chatlist.css';

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false); // 모달 상태

  // 모달 열기/닫기 함수
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal} className="open-modal-btn">
        채팅 목록 보기
      </button>

      {isOpen && (
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

            <button onClick={toggleModal} className="close-modal-btn">
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatModal;
