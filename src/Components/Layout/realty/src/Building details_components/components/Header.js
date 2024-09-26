import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './styles/Header.css';

function Header() {
  const { propertyId } = useParams(); // 매물 ID를 URL에서 가져옴
  const [totalViews, setTotalViews] = useState(0);
  const [hourlyViews, setHourlyViews] = useState(0);
  const navigate = useNavigate();

  const incrementViews = () => {
    // 매물 ID가 존재하는 경우 조회수를 증가시킴
    if (propertyId) {
      const savedViews = parseInt(localStorage.getItem(`views_${propertyId}`), 10) || 0;
      const savedHourlyViews = parseInt(localStorage.getItem(`hourlyViews_${propertyId}`), 10) || 0;

      const newTotalViews = savedViews + 1;
      const newHourlyViews = savedHourlyViews + 1;

      localStorage.setItem(`views_${propertyId}`, newTotalViews);
      localStorage.setItem(`hourlyViews_${propertyId}`, newHourlyViews);

      setTotalViews(newTotalViews);
      setHourlyViews(newHourlyViews);
    }
  };

  useEffect(() => {
    if (propertyId) {
      const savedTotalViews = parseInt(localStorage.getItem(`views_${propertyId}`), 10) || 0;
      const savedHourlyViews = parseInt(localStorage.getItem(`hourlyViews_${propertyId}`), 10) || 0;

      setTotalViews(savedTotalViews);
      setHourlyViews(savedHourlyViews);
      
      // 페이지가 처음 렌더링될 때 조회수를 증가시킴
      incrementViews();
    }

    const timer = setInterval(() => {
      if (propertyId) {
        setHourlyViews(0);
        localStorage.setItem(`hourlyViews_${propertyId}`, 0);
      }
    }, 3600000); // 1시간마다 리셋

    return () => clearInterval(timer);
  }, [propertyId]); // 매물 ID가 변경될 때마다 실행

  const navigateToMain = () => {
    navigate('/'); // 메인 페이지로 이동
  };

  return (
    <header className="header">
      <div className="logo" onClick={navigateToMain} style={{ cursor: 'pointer' }}>
        <img src="Logo.png" alt="logo" />
        <span>RAKU</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="검색" />
        <button>검색</button>
      </div>
      {propertyId && (
        <div className="header-stats">
          <span>총 조회수: {totalViews}</span>
          <span>1시간 조회수: {hourlyViews}</span>
        </div>
      )}
    </header>
  );
}

export default Header;
