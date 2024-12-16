import React from 'react';
import { useNavigate } from 'react-router-dom';

// 일본의 지방 리스트
const regions = {
  hokkaido: '홋카이도',
  tohoku: '도호쿠',
  kanto: '간토',
  chubu: '주부',
  kinki: '긴키',
  chugoku: '주고쿠',
  shikoku: '시코쿠',
  kyushu: '큐슈',
  okinawa: '오키나와',
};

const RegionsPage = () => {
  const navigate = useNavigate();

  const handleRegionClick = (regionId) => {
    // 절대경로로 이동하도록 수정
    navigate(`/realty/main/regions/${regionId}`);
  };

  return (
    <div className="regions-page">
      <h1>일본의 지방 선택</h1>
      <div className="regions-list">
        {Object.entries(regions).map(([regionId, regionName]) => (
          <div
            key={regionId}
            className="region-item"
            onClick={() => handleRegionClick(regionId)}
            style={{ cursor: 'pointer', padding: '10px', border: '1px solid black', margin: '5px' }}
          >
            {regionName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionsPage;
