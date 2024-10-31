import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// 지역 데이터: 위도(lat)와 경도(lng)를 포함한 데이터
const regions = {
  hokkaido: [
    { id: 'hokkaido', label: '홋카이도', lat: 43.06417, lng: 141.34694 },
  ],
  tohoku: [
    { id: 'aomori', label: '아오모리', lat: 40.82444, lng: 140.74 },
    { id: 'iwate', label: '이와테', lat: 39.70361, lng: 141.1525 },
    { id: 'miyagi', label: '미야기', lat: 38.26889, lng: 140.87194 },
    { id: 'akita', label: '아키타', lat: 39.71861, lng: 140.1025 },
    { id: 'yamagata', label: '야마가타', lat: 38.24056, lng: 140.36333 },
    { id: 'fukushima', label: '후쿠시마', lat: 37.75, lng: 140.46778 },
  ],
  kanto: [
    { id: 'ibaraki', label: '이바라키', lat: 36.34139, lng: 140.44667 },
    { id: 'tochigi', label: '도치기', lat: 36.56583, lng: 139.88361 },
    { id: 'gunma', label: '군마', lat: 36.39111, lng: 139.06083 },
    { id: 'saitama', label: '사이타마', lat: 35.86166, lng: 139.64548 },
    { id: 'tokyo', label: '도쿄', lat: 35.682839, lng: 139.759455 },
    { id: 'kanagawa', label: '가나가와', lat: 35.44778, lng: 139.6425 },
  ],
  chubu: [
    { id: 'niigata', label: '니가타', lat: 37.90222, lng: 139.02361 },
    { id: 'toyama', label: '도야마', lat: 36.69528, lng: 137.21139 },
    { id: 'ishikawa', label: '이시카와', lat: 36.59444, lng: 136.62556 },
    { id: 'nagano', label: '나가노', lat: 36.65139, lng: 138.18111 },
    { id: 'gifu', label: '기후', lat: 35.42333, lng: 136.76056 },
    { id: 'shizuoka', label: '시즈오카', lat: 34.97694, lng: 138.38306 },
    { id: 'aichi', label: '아이치', lat: 35.18028, lng: 136.90667 },
  ],
  kinki: [
    { id: 'mie', label: '미에', lat: 34.73028, lng: 136.50861 },
    { id: 'shiga', label: '시가', lat: 35.00444, lng: 135.86833 },
    { id: 'kyoto', label: '교토', lat: 35.02107, lng: 135.75561 },
    { id: 'osaka', label: '오사카', lat: 34.68639, lng: 135.52 },
    { id: 'hyogo', label: '효고', lat: 34.69139, lng: 135.18306 },
    { id: 'nara', label: '나라', lat: 34.68528, lng: 135.83278 },
    { id: 'wakayama', label: '와카야마', lat: 34.22611, lng: 135.1675 },
  ],
  chugoku: [
    { id: 'tottori', label: '돗토리', lat: 35.50361, lng: 134.23833 },
    { id: 'shimane', label: '시마네', lat: 35.47222, lng: 133.05056 },
    { id: 'okayama', label: '오카야마', lat: 34.66167, lng: 133.935 },
    { id: 'hiroshima', label: '히로시마', lat: 34.39639, lng: 132.45944 },
    { id: 'yamaguchi', label: '야마구치', lat: 34.18583, lng: 131.47139 },
  ],
  shikoku: [
    { id: 'kagawa', label: '가가와', lat: 34.34028, lng: 134.04333 },
    { id: 'ehime', label: '에히메', lat: 33.84167, lng: 132.76611 },
    { id: 'kochi', label: '고치', lat: 33.55972, lng: 133.53111 },
    { id: 'tokushima', label: '토쿠시마', lat: 34.06583, lng: 134.55944 },
  ],
  kyushu: [
    { id: 'fukuoka', label: '후쿠오카', lat: 33.60639, lng: 130.41806 },
    { id: 'saga', label: '사가', lat: 33.26333, lng: 130.3 },
    { id: 'nagasaki', label: '나가사키', lat: 32.74472, lng: 129.87361 },
    { id: 'kumamoto', label: '구마모토', lat: 32.80306, lng: 130.70778 },
    { id: 'oita', label: '오이타', lat: 33.23806, lng: 131.6125 },
    { id: 'miyazaki', label: '미야자키', lat: 31.90778, lng: 131.42028 },
    { id: 'kagoshima', label: '가고시마', lat: 31.59694, lng: 130.55722 },
  ],
  okinawa: [
    { id: 'okinawa', label: '오키나와', lat: 26.50128, lng: 127.9454 },
  ],
};

const RegionDetailPage = () => {
  const { regionId } = useParams(); // URL에서 지역 ID를 받음
  const navigate = useNavigate();

  // 선택된 지역 데이터
  const selectedRegion = regions[regionId] || [];

  // 지역 클릭 시 지도 페이지로 이동
  const handleRegionClick = (region) => {
    navigate(`/map?region=${region.id}&lat=${region.lat}&lng=${region.lng}`);
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
              onClick={() => handleRegionClick(region)}
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

