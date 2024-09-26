import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Footer.css';

function Footer() {
  const [recentProperty, setRecentProperty] = useState({
    image: '',
    rent: '',
    area: '',
    tag: '',
    id: '',
    buildNum: ''
  });

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
    if (recentProperty.buildNum) {
      navigate(`/building-details/${recentProperty.buildNum}`); // buildNum을 경로로 사용
    }
  };

  return (
    <footer className="footer">
      <div className="recent-property">
        <div className="recent-info">
          <p>이전 건축물 간략정보</p>
          {recentProperty.image ? (
            <img src={recentProperty.image} alt="최근 매물 사진" className="recent-image" />
          ) : (
            <p>최근 본 매물이 없습니다.</p>
          )}
        </div>
        <p>월세: {recentProperty.rent || '정보 없음'}</p>
        <p>면적: {recentProperty.area || '정보 없음'}</p>
        <p>태그: {recentProperty.tag || '정보 없음'}</p>
      </div>
      <div className="footer-buttons">
        <button 
          className="footer-btn" 
          onClick={handleViewProperty} 
          disabled={!recentProperty.buildNum} // buildNum이 없으면 버튼을 비활성화
        >
          해당 건축물 확인
        </button>
      </div>
    </footer>
  );
}

export default Footer;
