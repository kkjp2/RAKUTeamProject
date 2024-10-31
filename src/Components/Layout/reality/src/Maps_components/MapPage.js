import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './MapPage.css';
import { loadHouseDetails, clearLocalStorage } from '../Building details_components/components/Build_Data'; // 수정된 경로

const geocodeCache = {};
const libraries = ['places'];

// 주소를 지오코딩하고 결과를 캐시에 저장하는 함수
const geocodeAddress = async (address) => {
  if (geocodeCache[address]) {
    return geocodeCache[address];
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyBJSMaDSq6mQaGfj9Z-yAzBORZoPeIMCbo`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      geocodeCache[address] = { lat, lng };
      return { lat, lng };
    } else {
      console.error("지오코딩 오류:", data);
      return null;
    }
  } catch (error) {
    console.error("Geocode fetch error:", error);
    return null;
  }
};

// 지도 스타일 설정
const containerStyle = {
  width: '100%',
  height: '700px',
};

const MapPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mapRef = useRef(null); // Google Map 인스턴스를 관리하기 위한 ref
  const [mapCenter, setMapCenter] = useState(null); // 지도 중심 좌표
  const [selectedHouse, setSelectedHouse] = useState(null); // 선택된 매물
  const [housePositions, setHousePositions] = useState([]); // 매물 위치 리스트
  const [houseDetailsList, setHouseDetailsList] = useState([]); // 매물 리스트
  const [houseIcon, setHouseIcon] = useState(null); // 마커 아이콘
  const regionId = new URLSearchParams(location.search).get('region');

  // Google Maps API 로드
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBJSMaDSq6mQaGfj9Z-yAzBORZoPeIMCbo', // 실제 Google API 키로 대체
    libraries: libraries,
  });

  // 컴포넌트가 처음 렌더링될 때 로컬 스토리지에서 매물 정보를 불러옴
  useEffect(() => {
    const storedHouses = loadHouseDetails();
    setHouseDetailsList(storedHouses);
  }, []);

  // 매물 정보를 기반으로 좌표를 가져오는 비동기 함수
  useEffect(() => {
    const fetchCoordinates = async () => {
      if (houseDetailsList.length === 0) return;

      try {
        const coordinatesList = await Promise.all(
          houseDetailsList.map(async (house) => {
            try {
              return await geocodeAddress(house.address);
            } catch (error) {
              console.error('Geocode request failed:', error);
              return null;
            }
          })
        );

        const validCoordinates = coordinatesList.filter(coord => coord !== null);
        setHousePositions(validCoordinates);

        if (validCoordinates.length > 0 && !regionId) {
          setMapCenter(validCoordinates[0]); // 첫 번째 매물의 좌표를 중심으로 설정
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    fetchCoordinates();
  }, [houseDetailsList, regionId]);

  // 마커 클릭 핸들러
  const handleMarkerClick = (house) => {
    setSelectedHouse(house);
  };

  // 매물 상세 페이지로 이동
  const handleNavigate = () => {
    if (selectedHouse) {
      navigate(`/main-content/${selectedHouse.buildNum}`, { state: { houseData: selectedHouse } });
    }
  };

  // 마커 아이콘 설정
  useEffect(() => {
    setHouseIcon({
      url: 'data:image/svg+xml;charset=UTF-8,' +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40px" height="40px">
            <path fill="#F76D57" d="M32 2 L2 32 H14 V62 H26 V42 H38 V62 H50 V32 H62 Z"/>
            <path fill="#F76D57" d="M32 0 L0 32 H12 V62 H24 V42 H40 V62 H52 V32 H64 Z"/>
          </svg>`
        ),
      scaledSize: { width: 40, height: 40 },
    });
  }, []);

  // 지역 ID가 있으면 해당 지역으로 지도 중심 이동
  useEffect(() => {
    if (regionId) {
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

      const regionCoordinatesData = regionCoordinates[regionId];
      if (regionCoordinatesData) {
        setMapCenter(regionCoordinatesData);
      }
    }
  }, [regionId]);

  return (
    <div className="map-page">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={10}
          onLoad={(map) => (mapRef.current = map)}
        >
          {housePositions.map((position, index) => (
            <Marker
              key={index}
              position={position}
              icon={houseIcon}
              onClick={() => handleMarkerClick(houseDetailsList[index])}
            />
          ))}
        </GoogleMap>
      ) : (
        <div>로딩 중...</div>
      )}
      {selectedHouse && (
        <div className="house-details">
          <h2>매물 간략 정보</h2>
          <p>이름: {selectedHouse.name}</p>
          <p>주소: {selectedHouse.address}</p>
          <p>면적: {selectedHouse.size}</p>
          <p>월세: {selectedHouse.rent}</p>
          <p>유형: {selectedHouse.type}</p>
          <p>층수: {selectedHouse.floors}</p>
          <p>담당자: {selectedHouse.concierge}</p>
          <button onClick={handleNavigate}>상세 정보 보기</button>
        </div>
      )}
    </div>
  );
};

export default MapPage;
