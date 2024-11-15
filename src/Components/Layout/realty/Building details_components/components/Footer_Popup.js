import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/FooterPopup.css';

function Footer_Popup() {
  const [recentProperty, setRecentProperty] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // 팝업 상태 관리
  const navigate = useNavigate();

  // 로컬 스토리지에서 최근 본 매물 정보를 가져오는 함수
  useEffect(() => {
    const savedProperty = JSON.parse(localStorage.getItem('recentProperty'));
    if (savedProperty) {
      setRecentProperty(savedProperty);
    }
  }, []);

  // 해당 건축물 확인 버튼 클릭 시 MainContent 페이지로 이동
  const handleViewProperty = () => {
    if (recentProperty && recentProperty.buildNum) {
      navigate(`/main-content/${recentProperty.buildNum}`); // buildNum을 경로로 사용
    }
  };

  // 팝업 토글
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className={`footer-container ${isPopupOpen ? 'open' : 'closed'}`}>
      <footer className="footer">
        <div className="recent-property">
          <div className="recent-info">
            <p>이전 건축물 간략정보</p>
            {recentProperty ? (
              <>
                <p>이름: {recentProperty.name || '정보 없음'}</p> 
                {recentProperty.image && (
                  <img src={recentProperty.image} alt="최근 매물 사진" className="recent-image" />
                )}
                <p>월세: {recentProperty.rent || '정보 없음'}</p>
                <p>면적: {recentProperty.area || '정보 없음'}</p>
                <p>태그: {recentProperty.tag || '정보 없음'}</p>
              </>
            ) : (
              <p>최근 본 매물이 없습니다.</p>
            )}
          </div>
        </div>
        <div className="footer-buttons">
          <button
            className="footer-btn"
            onClick={handleViewProperty}
            disabled={!recentProperty || !recentProperty.buildNum} // 최근 매물이 없거나 buildNum이 없으면 비활성화
          >
            해당 건축물 확인
          </button>
        </div>
      </footer>
      <button className="toggle-btn" onClick={togglePopup}>
        {isPopupOpen ? '이전 매물 정보 닫기' : ' 이전 매물 정보 열기'}
      </button>
    </div>
  );
}

export default Footer_Popup;
