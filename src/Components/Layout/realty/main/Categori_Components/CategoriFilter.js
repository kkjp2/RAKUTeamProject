import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoriFilter.css';

const CategoriFilter = () => {
  const [price, setPrice] = useState([1, 1000]); // 가격 범위 상태
  const [size, setSize] = useState([10, 1000]); // 면적 범위 상태
  const [selectedRoom, setSelectedRoom] = useState(''); // 선택된 방 종류
  const [region, setRegion] = useState(''); // 선택된 지역
  const [floor, setFloor] = useState(''); // 선택된 층
  const [rentalType, setRentalType] = useState(''); // 임대 유형 상태

  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 훅

  // 필터 제출 함수
  const handleFilterSubmit = () => {
    const filters = { price, size, selectedRoom, region, floor, rentalType };
    console.log('전송될 필터:', filters); // 디버깅용 로그
    navigate('/realty/main/categorifilterresult', { state: { filters } }); // 필터 결과 페이지로 이동
  };

  // 방 종류와 지역 목록
  const roomTypes = ['1R', '1LDK', '1DK', '2R', '2LDK', '2DK', '3R', '3LDK', '3DK', '3R+', '3LDK+', '3DK+'];
  const regions = [
    '北海道', '青森', '岩手', '宮城', '秋田', '山形', '福島',
    '茨城', '栃木', '群馬', '埼玉', '千葉', '東京', '神奈川',
    '新潟', '富山', '石川', '福井', '山梨', '長野', '岐阜', '静岡', '愛知',
    '三重', '滋賀', '京都', '大阪', '兵庫', '奈良', '和歌山',
    '鳥取', '島根', '岡山', '広島', '山口',
    '徳島', '香川', '愛媛', '高知',
    '福岡', '佐賀', '長崎', '熊本', '大分', '宮崎', '鹿児島', '沖縄',
  ];

  return (
    <div className="build-filter-container">
      <h3 className="build-h3">지역</h3>
      <div className="build-region-types">
        {regions.map((area, index) => (
          <button
            key={index}
            className={`build-regionss-button ${region === area ? 'active' : ''}`}
            onClick={() => setRegion(area)}
          >
            {area}
          </button>
        ))}
      </div>

      <h3 className="build-h3">방 종류</h3>
      <div className="room-types">
        {roomTypes.map((room, index) => (
          <button
            key={index}
            className={`build-room-button ${selectedRoom === room ? 'active' : ''}`}
            onClick={() => setSelectedRoom(room)}
          >
            {room}
          </button>
        ))}
      </div>

      <h3 className="build-h3">가격 (기준: 만엔)</h3>
      <input
        type="range"
        min={1}
        max={1000}
        value={price[0]}
        onChange={(e) => setPrice([Number(e.target.value), 1000])}
      />
      <span>{price[0] === 1000 ? '1000+ 만엔' : `${price[0]}만엔`}</span>

      <h3 className="build-h3">면적 (기준: m²)</h3>
      <input
        type="range"
        min={10}
        max={1000}
        value={size[0]}
        onChange={(e) => setSize([Number(e.target.value), 1000])}
      />
      <span>{size[0] === 1000 ? '1000+ m²' : `${size[0]}m²`}</span>

      <button className="build-submit-button" onClick={handleFilterSubmit}>
        검색
      </button>
    </div>
  );
};

export default CategoriFilter;
