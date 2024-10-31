import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoriFilter.css'; // 스타일을 별도의 CSS 파일로 관리

const CategoriFilter = () => {
  const [price, setPrice] = useState([1, 1000]);
  const [size, setSize] = useState([10, 1000]);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [type, setType] = useState('');
  const [region, setRegion] = useState('');
  const [floor, setFloor] = useState('');
  const [rentalType, setRentalType] = useState(''); // 월세/매매 타입

  const navigate = useNavigate();

  const handleFilterSubmit = () => {
    const filters = {
      price,
      size,
      selectedRoom,
      type,
      region,
      floor,
      rentalType // 월세/매매 필터 추가
    };

    // 기존 경로를 카테고리 필터 결과로 변경
    navigate('/categorifilterresult', { state: { filters } });
  };

  const roomTypes = ['1R', '1LDK', '1DK', '2R', '2LDK', '2DK', '3R', '3LDK', '3DK', '3R+', '3LDK+', '3DK+'];
  const buildingTypes = ['목조', '철골', '철근콘크리트', '벽돌', '석조'];

  // 일본의 47개 도도부현을 순서대로 추가
  const regions = [
    '홋카이도', '아오모리', '이와테', '미야기', '아키타', '야마가타', '후쿠시마',  // 홋카이도 및 도호쿠 지역
    '이바라키', '토치기', '군마', '사이타마', '지바', '도쿄', '카나가와',           // 간토 지역
    '니가타', '토야마', '이시카와', '후쿠이', '야마나시', '나가노', '기후', '시즈오카', '아이치',  // 주부 지역
    '미에', '시가', '교토', '오사카', '효고', '나라', '와카야마',                  // 긴키(칸사이) 지역
    '토토리', '시마네', '오카야마', '히로시마', '야마구치',                         // 주고쿠 지역
    '도쿠시마', '카가와', '에히메', '고치',                                        // 시코쿠 지역
    '후쿠오카', '사가', '나가사키', '쿠마모토', '오이타', '미야자키', '가고시마', '오키나와'  // 규슈 지역
  ];

  return (
    <div className="filter-container">
      <h3>방 종류</h3>
      <div className="room-types">
        {roomTypes.map((room) => (
          <button
            key={room}
            className={`room-button ${selectedRoom === room ? 'active' : ''}`}
            onClick={() => setSelectedRoom(room)}
          >
            {room}
          </button>
        ))}
      </div>

      <h3>가격 (기준: 만엔)</h3>
      <input
        type="range"
        min={1}
        max={1000}
        value={price[0]}
        onChange={(e) => setPrice([Number(e.target.value), 1000])}
      />
      <span>{price[0] === 1000 ? '1000+ 만엔' : `${price[0]}만엔`}</span>

      <h3>층수</h3>
      <div className="floor-types">
        <button className={`floor-button ${floor === '1F' ? 'active' : ''}`} onClick={() => setFloor('1F')}>
          1F
        </button>
        <button className={`floor-button ${floor === '2F' ? 'active' : ''}`} onClick={() => setFloor('2F')}>
          2F
        </button>
        <button className={`floor-button ${floor === '2F+' ? 'active' : ''}`} onClick={() => setFloor('2F+')}>
          2F+
        </button>
      </div>

      <h3>건축물 종류</h3>
      <div className="building-types">
        {buildingTypes.map((building) => (
          <button
            key={building}
            className={`building-button ${type === building ? 'active' : ''}`}
            onClick={() => setType(building)}
          >
            {building}
          </button>
        ))}
      </div>

      <h3>면적 (기준: m²)</h3>
      <input
        type="range"
        min={10}
        max={1000}
        value={size[0]}
        onChange={(e) => setSize([Number(e.target.value), 1000])}
      />
      {/* 면적이 1000m²일 때 1000m²+로 표시 */}
      <span>{size[0] === 1000 ? '1000+ m²' : `${size[0]}m²`}</span>

      <h3>지역</h3>
      <div className="region-types">
        {regions.map((area) => (
          <button
            key={area}
            className={`region-button ${region === area ? 'active' : ''}`}
            onClick={() => setRegion(area)}
          >
            {area}
          </button>
        ))}
      </div>

      {/* 월세/매매 버튼 추가 */}
      <h3>거래 형태</h3>
      <div className="rental-types">
        <button
          className={`rental-button ${rentalType === 'rent' ? 'active' : ''}`}
          onClick={() => setRentalType('rent')}
        >
          월세
        </button>
        <button
          className={`rental-button ${rentalType === 'sale' ? 'active' : ''}`}
          onClick={() => setRentalType('sale')}
        >
          매매
        </button>
      </div>

      <button className="submit-button" onClick={handleFilterSubmit}>검색</button>
    </div>
  );
};

export default CategoriFilter;
