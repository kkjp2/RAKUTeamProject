import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import axios from 'axios';
import './MapPage.css';

axios.defaults.baseURL = 'http://localhost:8080'; // Spring Boot 기본 URL

const geocodeCache = {};
const libraries = ['places'];

const geocodeAddress = async (address) => {
  if (geocodeCache[address]) {
    return geocodeCache[address];
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyDU4sckHDmrRoda99c3X5Y6QMYIADZRu5E`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      geocodeCache[address] = { lat, lng };
      return { lat, lng };
    } else {
      console.error('Geocoding error:', data);
      return null;
    }
  } catch (error) {
    console.error('Geocoding fetch error:', error);
    return null;
  }
};

const containerStyle = {
  width: '100%',
  height: '700px',
};

const regionCoordinates = {
  // 지역 좌표 데이터
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
  const mapRef = useRef(null);

  const [mapCenter, setMapCenter] = useState(null);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [housePositions, setHousePositions] = useState([]);
  const [houseDetailsList, setHouseDetailsList] = useState([]);
  const [houseIcon, setHouseIcon] = useState(null);
  const regionId = new URLSearchParams(location.search).get('region');

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDU4sckHDmrRoda99c3X5Y6QMYIADZRu5E',
    libraries,
  });

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get('/api/houses');
        const data = response.data.map((house) => ({
          ...house,
          fullAddress: `${house.address} ${house.detailedAddress}`,
        }));
        setHouseDetailsList(data);
        console.log('Loaded house details:', data);
      } catch (error) {
        console.error('Error fetching house details:', error);
      }
    };

    fetchHouses();
  }, []);

  useEffect(() => {
    const fetchCoordinates = async () => {
      if (!Array.isArray(houseDetailsList) || houseDetailsList.length === 0) {
        console.log('No house details available.');
        return;
      }

      try {
        const coordinatesList = await Promise.all(
          houseDetailsList.map(async (house) => {
            const coords = await geocodeAddress(house.fullAddress);
            return coords ? { ...coords, house } : null;
          })
        );

        const validCoordinates = coordinatesList.filter((coord) => coord && coord.lat && coord.lng);
        setHousePositions(validCoordinates);

        if (validCoordinates.length > 0 && !regionId) {
          setMapCenter(validCoordinates[0]);
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    fetchCoordinates();
  }, [houseDetailsList]);

  useEffect(() => {
    if (regionId && regionCoordinates[regionId]) {
      setMapCenter(regionCoordinates[regionId]);
    }
  }, [regionId]);

  const handleMarkerClick = (house) => {
    console.log('Marker clicked:', house); // 디버깅용
    setSelectedHouse(house);
  };

  const handleNavigate = () => {
    if (selectedHouse) {
      navigate(`/realty/main/map/main-content/${selectedHouse.buildNumber}`, {
        state: { houseData: selectedHouse },
      });
    }
  };

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

  return (
    <div className="build-map-page">
      <div className="build-map-container">
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
                position={{ lat: position.lat, lng: position.lng }}
                icon={houseIcon}
                onClick={() => handleMarkerClick(position.house)}
              />
            ))}
          </GoogleMap>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="build-property-details">
        {selectedHouse ? (
          <>
            <h3>Property Details</h3>
            <p>Name: {selectedHouse.name}</p>
            <p>Address: {selectedHouse.fullAddress}</p>
            <button onClick={handleNavigate}>View Details</button>
          </>
        ) : (
          <p>No property selected.</p>
        )}
      </div>
    </div>
  );
};

export default MapPage;
