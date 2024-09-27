import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api';
import './MapPage.css';

const geocodeCache = {};

// Geocode address and cache the result
const geocodeAddress = async (address) => {
  if (geocodeCache[address]) {
    return geocodeCache[address];
  }

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=Input_Your_Key`
  );
  const data = await response.json();

  if (data.results && data.results.length > 0) {
    const { lat, lng } = data.results[0].geometry.location;
    geocodeCache[address] = { lat, lng }; // Cache the result
    return { lat, lng };
  } else {
    console.error("Geocoding error:", data);
    return null;
  }
};

// Map container styles
const containerStyle = {
  width: '100%',
  height: '700px',
};

// Coordinates for each region (추가된 지역 중심 좌표)
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

const MapPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mapCenter, setMapCenter] = useState(null);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [houseIcon, setHouseIcon] = useState(null);
  const [housePositions, setHousePositions] = useState([]);
  const [houseDetailsList, setHouseDetailsList] = useState([]);

  // region 쿼리 파라미터에서 지역 ID를 가져옴
  const regionId = new URLSearchParams(location.search).get('region');

  // Load house details from localStorage on component mount
  useEffect(() => {
    const storedHouses = localStorage.getItem('houseDetailsList');
    if (storedHouses) {
      setHouseDetailsList(JSON.parse(storedHouses));
    }
  }, []);

  // Fetch geocode for house addresses and set positions on the map
  useEffect(() => {
    const fetchCoordinates = async () => {
      if (houseDetailsList.length === 0) return;

      const coordinatesList = await Promise.all(
        houseDetailsList.map((house) => geocodeAddress(house.address))
      );
      const validCoordinates = coordinatesList.filter(coord => coord !== null);
      setHousePositions(validCoordinates);

      if (validCoordinates.length > 0 && !regionId) {
        setMapCenter(validCoordinates[0]); // Center the map at the first valid house position
      }
    };

    fetchCoordinates();
  }, [houseDetailsList, regionId]);

  // Handle marker click to select a house
  const handleMarkerClick = (house) => {
    setSelectedHouse(house);
  };

  // Navigate to main-content page with selected house data
  const handleNavigate = () => {
    if (selectedHouse) {
      navigate(`/main-content/${selectedHouse.buildNum}`, { state: { houseData: selectedHouse } });
    }
  };

  // Load a custom house icon for the map
  const onLoad = useCallback(() => {
    setHouseIcon({
      url: 'data:image/svg+xml;charset=UTF-8,' +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40px" height="40px">
            <path fill="#F76D57" d="M32 2 L2 32 H14 V62 H26 V42 H38 V62 H50 V32 H62 Z"/>
            <path fill="#F76D57" d="M32 0 L0 32 H12 V62 H24 V42 H40 V62 H52 V32 H64 Z"/>
          </svg>`
        ),
      scaledSize: new window.google.maps.Size(40, 40),
    });
  }, []);

  // 지역이 선택되었을 때 해당 지역의 중심으로 지도 설정 (마커는 표시하지 않음)
  useEffect(() => {
    if (regionId && regionCoordinates[regionId]) {
      setMapCenter(regionCoordinates[regionId]); // 선택된 지역 중심 좌표로 설정
    }
  }, [regionId]);

  return (
    <div className="map-page">
      <div className="map-container">
        {mapCenter ? (
          <>
            <h2>매물 위치</h2>
            <LoadScriptNext
              googleMapsApiKey="Input_your_key"
              libraries={['places']}
              onLoad={onLoad}
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={mapCenter}
                zoom={regionId ? 10 : 15} // 지역 선택 시 zoom을 줄임
              >
                {houseIcon && houseDetailsList.map((house, index) => (
                  housePositions[index] && (
                    <Marker
                      key={index}
                      position={housePositions[index]}
                      onClick={() => handleMarkerClick(house)}
                      icon={houseIcon}
                    />
                  )
                ))}
                {/* 지역 선택 시 마커를 표시하지 않음 */}
              </GoogleMap>
            </LoadScriptNext>
          </>
        ) : (
          <p>매물의 위치를 불러오는 중입니다...</p>
        )}
      </div>

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
          <button onClick={handleNavigate}>이동하기</button>
        </div>
      )}
    </div>
  );
};

export default MapPage;
