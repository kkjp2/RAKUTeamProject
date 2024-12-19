import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loadHouseDetails } from '../../Building details_components/components/Build_Data';
import './Categorifilterresult.css';

const Categorifilterresult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { filters } = location.state || {}; // 필터 정보 받아오기
  const [allHouses, setAllHouses] = useState([]); // 전체 매물 데이터
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const itemsPerPage = 4; // 한 페이지에 보여줄 매물 개수

  // 매물 데이터 가져오기
  useEffect(() => {
    const fetchHouses = async () => {
      const houses = await loadHouseDetails(); // 매물 데이터 로드
      console.log('전체 매물 데이터:', houses);
      setAllHouses(houses);
    };
    fetchHouses();

    console.log('적용된 필터:', filters);
  }, [filters]);

  // 필터링된 매물 목록
  const filteredHouses = allHouses.filter((house) => {
    const matchesRegion = filters?.region
      ? house.address.includes(filters.region) ||
        house.fullAddress.includes(filters.region) ||
        house.prefecture.includes(filters.region)
      : true;

    const rentValue = house.rentPrice ? parseFloat(house.rentPrice.replace(" 엔", "").replace(",", "")) : null;
    const matchesPrice = filters?.price && filters.price[0] !== 1000 && filters.price[1] !== 1000
      ? rentValue >= filters.price[0] && rentValue <= filters.price[1]
      : true;

    const sizeValue = house.buildingSize ? parseFloat(house.buildingSize.replace("㎥", "")) : null;
    const matchesSize = filters?.size && filters.size[0] !== 1000 && filters.size[1] !== 1000
      ? sizeValue >= filters.size[0] && sizeValue <= filters.size[1]
      : true;

    const matchesRoom = filters?.selectedRoom
      ? house.roomType?.includes(filters.selectedRoom)
      : true;

    return matchesRegion && matchesPrice && matchesSize && matchesRoom;
  });

  // 매물 목록 정렬 (옵션에 맞게 적용 가능)
  const sortedHouses = filteredHouses.sort((a, b) => {
    if (filters?.region && !filters.price && !filters.size && !filters.selectedRoom) {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  // 페이지네이션 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentHouses = sortedHouses.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedHouses.length / itemsPerPage);

  // 매물 상세 페이지로 이동
  const handleNavigate = (buildNumber) => {
    if (buildNumber) {
      navigate(`/realty/main/categorifilter/main-content/${buildNumber}`, {
        state: { buildNumber },
      });
    }
  };

  return (
    <div className="build-search-results">
      <h2>검색 결과</h2>
      {filteredHouses.length === 0 ? (
        <p>조건에 맞는 매물이 없습니다.</p>
      ) : (
        currentHouses.map((house, index) => (
          <div key={index} className="build-house-item">
            <div className="build-house-image">
              <img src={house.imageUrl} alt={house.name} />
            </div>
            <div className="build-house-details">
              <h3>{house.name}</h3>
              <p>주소: {house.address}</p>
              <p>가격: {house.rentPrice}</p>
              <p>크기: {house.buildingSize}</p>
              <button
                className="build-details-button"
                onClick={() => handleNavigate(house.buildNumber)}
              >
                이동하기
              </button>
            </div>
          </div>
        ))
      )}
      <div className="build-pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`build-page-button ${currentPage === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categorifilterresult;
