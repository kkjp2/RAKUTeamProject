import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// 모든 지방과 그에 속한 지역 리스트
const regions = {
  hokkaido: [
    { id: 'hokkaido', label: '홋카이도' },
  ],
  tohoku: [
    { id: 'aomori', label: '아오모리' },
    { id: 'iwate', label: '이와테' },
    { id: 'miyagi', label: '미야기' },
    { id: 'akita', label: '아키타' },
    { id: 'yamagata', label: '야마가타' },
    { id: 'fukushima', label: '후쿠시마' },
  ],
  kanto: [
    { id: 'ibaraki', label: '이바라키' },
    { id: 'tochigi', label: '도치기' },
    { id: 'gunma', label: '군마' },
    { id: 'saitama', label: '사이타마' },
    { id: 'tokyo', label: '도쿄' },
    { id: 'kanagawa', label: '가나가와' },
  ],
  chubu: [
    { id: 'niigata', label: '니가타' },
    { id: 'toyama', label: '도야마' },
    { id: 'ishikawa', label: '이시카와' },
    { id: 'nagano', label: '나가노' },
    { id: 'gifu', label: '기후' },
    { id: 'shizuoka', label: '시즈오카' },
    { id: 'aichi', label: '아이치' },
  ],
  kinki: [
    { id: 'mie', label: '미에' },
    { id: 'shiga', label: '시가' },
    { id: 'kyoto', label: '교토' },
    { id: 'osaka', label: '오사카' },
    { id: 'hyogo', label: '효고' },
    { id: 'nara', label: '나라' },
    { id: 'wakayama', label: '와카야마' },
  ],
  chugoku: [
    { id: 'tottori', label: '돗토리' },
    { id: 'shimane', label: '시마네' },
    { id: 'okayama', label: '오카야마' },
    { id: 'hiroshima', label: '히로시마' },
    { id: 'yamaguchi', label: '야마구치' },
  ],
  shikoku: [
    { id: 'kagawa', label: '가가와' },
    { id: 'ehime', label: '에히메' },
    { id: 'kochi', label: '고치' },
    { id: 'tokushima', label: '토쿠시마' },
  ],
  kyushu: [
    { id: 'fukuoka', label: '후쿠오카' },
    { id: 'saga', label: '사가' },
    { id: 'nagasaki', label: '나가사키' },
    { id: 'kumamoto', label: '구마모토' },
    { id: 'oita', label: '오이타' },
    { id: 'miyazaki', label: '미야자키' },
    { id: 'kagoshima', label: '가고시마' },
  ],
  okinawa: [
    { id: 'okinawa', label: '오키나와' },
  ],
};

const RegionDetailPage = () => {
  const { regionId } = useParams(); // URL에서 지방 ID를 받음
  const navigate = useNavigate();

  // 선택된 지방의 지역 리스트를 가져옴
  const selectedRegion = regions[regionId] || [];

  const handleRegionClick = (regionId) => {
    // 지역 선택 시 구글 맵 페이지로 이동
    navigate(`/map?region=${regionId}`);
  };

  return (
    <div className="region-detail-page">
      <h1>{regionId.toUpperCase()} 지방의 지역 선택</h1>
      <div className="region-list">
        {selectedRegion.length > 0 ? (
          selectedRegion.map((region) => (
            <div
              key={region.id}
              className="region-item"
              onClick={() => handleRegionClick(region.id)}
              style={{ cursor: 'pointer', padding: '10px', border: '1px solid black', margin: '5px' }}
            >
              {region.label}
            </div>
          ))
        ) : (
          <p>해당 지방에 지역 정보가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default RegionDetailPage;
