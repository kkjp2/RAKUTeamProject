import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api';
import './MapPage.css';

const geocodeCache = {};

const geocodeAddress = async (address) => {
  if (geocodeCache[address]) {
    return geocodeCache[address];
  }

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyBJSMaDSq6mQaGfj9Z-yAzBORZoPeIMCbo`
  );
  const data = await response.json();

  if (data.results && data.results.length > 0) {
    const { lat, lng } = data.results[0].geometry.location;
    geocodeCache[address] = { lat, lng };
    return { lat, lng };
  } else {
    console.error("Geocoding error:", data);
    return null;
  }
};

const containerStyle = {
  width: '100%',
  height: '700px',
};

const MapPage = () => {
  const navigate = useNavigate();
  const [mapCenter, setMapCenter] = useState(null);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [houseIcon, setHouseIcon] = useState(null);
  const [housePositions, setHousePositions] = useState([]);
  const [houseDetailsList, setHouseDetailsList] = useState([]); // 상태 추가

  useEffect(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const storedHouses = localStorage.getItem('houseDetailsList');
    if (storedHouses) {
      setHouseDetailsList(JSON.parse(storedHouses));
    }
  }, []);

  useEffect(() => {
    const fetchCoordinates = async () => {
      if (houseDetailsList.length === 0) return; // 데이터가 없을 경우 리턴

      const coordinatesList = await Promise.all(
        houseDetailsList.map((house) => geocodeAddress(house.address))
      );
      const validCoordinates = coordinatesList.filter(coord => coord !== null);
      setHousePositions(validCoordinates);

      if (validCoordinates.length > 0) {
        setMapCenter(validCoordinates[0]);
      }
    };

    fetchCoordinates();
  }, [houseDetailsList]); // 의존성 추가

  const handleMarkerClick = (house) => {
    setSelectedHouse(house);
  };

  const handleNavigate = () => {
    if (selectedHouse) {
      navigate(`/building-details/${selectedHouse.buildNum}`, { state: { houseData: selectedHouse } });
    }
  };

  const onLoad = useCallback(() => {
    setHouseIcon({
      url: 'data:image/svg+xml;charset=UTF-8,' +
        encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40px" height="40px">
            <path fill="#F76D57" d="M32 2 L2 32 H14 V62 H26 V42 H38 V62 H50 V32 H62 Z"/>
            <path fill="#F76D57" d="M32 0 L0 32 H12 V62 H24 V42 H40 V62 H52 V32 H64 Z"/>
          </svg>
        `),
      scaledSize: new window.google.maps.Size(40, 40),
    });
  }, []);

  return (
    <div className="map-page">
      <div className="map-container">
        {mapCenter ? (
          <>
            <h2>매물 위치</h2>
            <LoadScriptNext
              googleMapsApiKey="AIzaSyBJSMaDSq6mQaGfj9Z-yAzBORZoPeIMCbo"
              libraries={['places']}
              onLoad={onLoad}
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={mapCenter}
                zoom={15}
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
