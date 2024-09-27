import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleMap, LoadScriptNext, Marker, MarkerClusterer } from '@react-google-maps/api';
import './MapPage.css';

const geocodeCache = {};

// 주소를 지오코딩하고 결과를 캐시에 저장하는 함수
const geocodeAddress = async (address) => {
  if (geocodeCache[address]) {
    return geocodeCache[address]; // 이미 캐시에 있는 경우 캐시된 좌표 반환
  }

  // 지오코딩 API 호출
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyBJSMaDSq6mQaGfj9Z-yAzBORZoPeIMCbo`
  );
  const data = await response.json();

  // 유효한 결과가 있으면 좌표 반환 및 캐시에 저장
  if (data.results && data.results.length > 0) {
    const { lat, lng } = data.results[0].geometry.location;
    geocodeCache[address] = { lat, lng };
    return { lat, lng };
  } else {
    console.error("지오코딩 오류:", data);
    return null;
  }
};

// 지도 컨테이너 스타일
const containerStyle = {
  width: '100%',
  height: '700px',
};

const MapPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mapCenter, setMapCenter] = useState(null); // 지도 중심 상태
  const [selectedHouse, setSelectedHouse] = useState(null); // 선택된 매물 정보 상태
  const [houseIcon, setHouseIcon] = useState(null); // 커스텀 마커 아이콘 상태
  const [housePositions, setHousePositions] = useState([]); // 매물의 좌표 리스트 상태
  const [houseDetailsList, setHouseDetailsList] = useState([]); // 매물 세부 정보 리스트 상태
  const [zoomLevel, setZoomLevel] = useState(10); // 줌 레벨 상태
  const [mapInstance, setMapInstance] = useState(null); // 지도 인스턴스 상태

  // URL 쿼리 파라미터에서 지역 ID 추출
  const regionId = new URLSearchParams(location.search).get('region');

  // 컴포넌트가 처음 렌더링될 때 로컬 스토리지에서 매물 정보를 불러옴
  useEffect(() => {
    const storedHouses = localStorage.getItem('houseDetailsList');
    if (storedHouses) {
      setHouseDetailsList(JSON.parse(storedHouses)); // 로컬 스토리지에서 매물 리스트 설정
    }
  }, []);

  // 매물 주소들을 지오코딩하여 좌표를 가져오고, 지도에 위치 설정
  useEffect(() => {
    const fetchCoordinates = async () => {
      if (houseDetailsList.length === 0) return; // 매물이 없으면 실행하지 않음

      const coordinatesList = await Promise.all(
        houseDetailsList.map((house) => geocodeAddress(house.address))
      );
      const validCoordinates = coordinatesList.filter(coord => coord !== null);
      
      console.log("Valid Coordinates:", validCoordinates); // 디버깅을 위해 유효 좌표 로그 출력
      setHousePositions(validCoordinates); // 유효한 좌표들만 저장

      // 지역이 선택되지 않았을 경우, 첫 번째 유효한 좌표를 지도 중심으로 설정
      if (validCoordinates.length > 0 && !regionId) {
        setMapCenter(validCoordinates[0]);
      }
    };

    fetchCoordinates();
  }, [houseDetailsList, regionId]);

  // 마커 클릭 시 선택된 매물을 상태에 저장
  const handleMarkerClick = (house) => {
    setSelectedHouse(house);
  };

  // 선택된 매물 세부 페이지로 이동
  const handleNavigate = () => {
    if (selectedHouse) {
      navigate(`/main-content/${selectedHouse.buildNum}`, { state: { houseData: selectedHouse } });
    }
  };

  // 커스텀 마커 아이콘 로드
  const onLoad = useCallback(() => {
    setHouseIcon({
      url: 'data:image/svg+xml;charset=UTF-8,' +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40px" height="40px">
            <path fill="#F76D57" d="M32 2 L2 32 H14 V62 H26 V42 H38 V62 H50 V32 H62 Z"/>
            <path fill="#F76D57" d="M32 0 L0 32 H12 V62 H24 V42 H40 V62 H52 V32 H64 Z"/>
          </svg>`
        ),
      scaledSize: new window.google.maps.Size(40, 40), // 아이콘 크기 설정
    });
  }, []);

  // 지역이 선택되었을 때 해당 지역의 중심으로 지도 설정
  useEffect(() => {
    if (regionId) {
      // 지역별 좌표 설정
      const regionCoordinates = {
        hokkaido: { name: "Hokkaido", lat: 43.06417, lng: 141.34694 },
        aomori: { name: "Aomori", lat: 40.82444, lng: 140.74 },
        iwate: { name: "Iwate", lat: 39.70361, lng: 141.1525 },
        miyagi: { name: "Miyagi", lat: 38.26889, lng: 140.87194 },
        akita: { name: "Akita", lat: 39.71861, lng: 140.1025 },
        yamagata: { name: "Yamagata", lat: 38.24056, lng: 140.36333 },
        fukushima: { name: "Fukushima", lat: 37.75, lng: 140.46778 },
        ibaraki: { name: "Ibaraki", lat: 36.34139, lng: 140.44667 },
        tochigi: { name: "Tochigi", lat: 36.56583, lng: 139.88361 },
        gunma: { name: "Gunma", lat: 36.39111, lng: 139.06083 },
        saitama: { name: "Saitama", lat: 35.85694, lng: 139.64889 },
        chiba: { name: "Chiba", lat: 35.60472, lng: 140.12333 },
        tokyo: { name: "Tokyo", lat: 35.68944, lng: 139.69167 },
        kanagawa: { name: "Kanagawa", lat: 35.44778, lng: 139.6425 },
        niigata: { name: "Niigata", lat: 37.90222, lng: 139.02361 },
        toyama: { name: "Toyama", lat: 36.69528, lng: 137.21139 },
        ishikawa: { name: "Ishikawa", lat: 36.59444, lng: 136.62556 },
        fukui: { name: "Fukui", lat: 36.06528, lng: 136.22194 },
        yamanashi: { name: "Yamanashi", lat: 35.66389, lng: 138.56833 },
        nagano: { name: "Nagano", lat: 36.65139, lng: 138.18111 },
        gifu: { name: "Gifu", lat: 35.39111, lng: 136.72222 },
        shizuoka: { name: "Shizuoka", lat: 34.97694, lng: 138.38306 },
        aichi: { name: "Aichi", lat: 35.18028, lng: 136.90667 },
        mie: { name: "Mie", lat: 34.73028, lng: 136.50861 },
        shiga: { name: "Shiga", lat: 35.00444, lng: 135.86833 },
        kyoto: { name: "Kyoto", lat: 35.01167, lng: 135.76833 },
        osaka: { name: "Osaka", lat: 34.68639, lng: 135.52 },
        hyogo: { name: "Hyogo", lat: 34.69139, lng: 135.18306 },
        nara: { name: "Nara", lat: 34.68528, lng: 135.83278 },
        wakayama: { name: "Wakayama", lat: 34.22611, lng: 135.1675 },
        tottori: { name: "Tottori", lat: 35.50111, lng: 134.235 },
        shimane: { name: "Shimane", lat: 35.47222, lng: 133.05056 },
        okayama: { name: "Okayama", lat: 34.66167, lng: 133.935 },
        hiroshima: { name: "Hiroshima", lat: 34.39639, lng: 132.45944 },
        yamaguchi: { name: "Yamaguchi", lat: 34.18583, lng: 131.47139 },
        tokushima: { name: "Tokushima", lat: 34.06583, lng: 134.55944 },
        kagawa: { name: "Kagawa", lat: 34.34028, lng: 134.04333 },
        ehime: { name: "Ehime", lat: 33.84167, lng: 132.76583 },
        kochi: { name: "Kochi", lat: 33.55972, lng: 133.53111 },
        fukuoka: { name: "Fukuoka", lat: 33.60639, lng: 130.41806 },
        saga: { name: "Saga", lat: 33.24944, lng: 130.29889 },
        nagasaki: { name: "Nagasaki", lat: 32.74472, lng: 129.87361 },
        kumamoto: { name: "Kumamoto", lat: 32.78972, lng: 130.74167 },
        oita: { name: "Oita", lat: 33.23806, lng: 131.6125 },
        miyazaki: { name: "Miyazaki", lat: 31.91111, lng: 131.42389 },
        kagoshima: { name: "Kagoshima", lat: 31.56028, lng: 130.55806 },
        okinawa: { name: "Okinawa", lat: 26.2125, lng: 127.68111 }
      };

      if (regionCoordinates[regionId]) {
        setMapCenter(regionCoordinates[regionId]); // 선택된 지역의 좌표로 지도 중심 설정
      }
    }
  }, [regionId]);

  return (
    <div className="map-page">
      <div className="map-container">
        {mapCenter ? (
          <>
            <h2>매물 위치</h2>
            <LoadScriptNext
              googleMapsApiKey="AIzaSyBJSMaDSq6mQaGfj9Z-yAzBORZoPeIMCbo" // 구글 맵 API 키 입력
              libraries={['places']}
              onLoad={onLoad} // 커스텀 아이콘 로드
            >
              <GoogleMap
                mapContainerStyle={containerStyle} // 지도 스타일 설정
                center={mapCenter} // 지도 중심 설정
                zoom={zoomLevel} // 줌 레벨 설정
                onLoad={(map) => setMapInstance(map)} // 맵 인스턴스 저장
              >
                {/* 마커 클러스터링 추가 */}
                <MarkerClusterer>
                  {(clusterer) =>
                    housePositions.map((position, index) => (
                      <Marker
                        key={index}
                        position={position} // 매물의 좌표 설정
                        clusterer={clusterer} // 클러스터링 처리
                        icon={houseIcon} // 커스텀 아이콘 적용
                        onClick={() => handleMarkerClick(houseDetailsList[index])} // 마커 클릭 시 매물 선택
                      />
                    ))
                  }
                </MarkerClusterer>
              </GoogleMap>
            </LoadScriptNext>
          </>
        ) : (
          <p>매물의 위치를 불러오는 중입니다...</p> // 지도 로딩 중 텍스트 표시
        )}
      </div>

      {/* 선택된 매물 정보 표시 */}
      {selectedHouse && (
        <div className="property-details">
          <h3>매물 정보</h3>
          <p>이름: {selectedHouse.name}</p>
          <p>주소: {selectedHouse.address}</p>
          <p>연도: {selectedHouse.ymd}</p>
          <p>넓이: {selectedHouse.size}</p>
          <p>월세: {selectedHouse.rent}</p>
          <p>유형: {selectedHouse.type}</p>
          <p>층수: {selectedHouse.floors}</p>
          <button onClick={handleNavigate}>이동하기</button> {/* 매물 세부 페이지로 이동 */}
        </div>
      )}
    </div>
  );
};

export default MapPage;
