import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadHouseDetails } from '../Building details_components/components/Build_Data';
import './Categorifilterresult.css';

// 이미지 import
import image1 from '../Building details_components/components/images/image1.jpg';
import image2 from '../Building details_components/components/images/image2.jpg';
import image3 from '../Building details_components/components/images/image3.jpg';

const Categorifilterresult = () => {
  const location = useLocation();
  const { filters } = location.state || {};

  const [allHouses, setAllHouses] = useState([]);
  const [sortOption, setSortOption] = useState('기본');
  const [sortOrder, setSortOrder] = useState('상위순');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTag, setSearchTag] = useState('');
  const itemsPerPage = 4;

  useEffect(() => {
    const houses = loadHouseDetails();
    setAllHouses(houses);
  }, []);

  // 필터링 로직
  const filteredHouses = allHouses.filter((house) => {
    const matchesPrice = house.rent.replace('万', '') >= filters.price[0];
    const matchesSize = parseInt(house.size.replace('㎡', ''), 10) >= filters.size[0];
    const matchesType = filters.type ? house.type.includes(filters.type) : false;
    const matchesRegion = filters.region ? house.address.includes(filters.region) : false;
    const matchesFloor = filters.floor ? house.floors.includes(filters.floor) : false;
    const matchesTag = searchTag
      ? house.name.includes(searchTag) || house.address.includes(searchTag) || house.type.includes(searchTag)
      : true;

    return matchesPrice || matchesSize || matchesType || matchesRegion || matchesFloor || matchesTag;
  });

  // 정렬 로직
  const sortedHouses = filteredHouses.sort((a, b) => {
    const rentA = parseFloat(a.rent.replace('万', ''));
    const rentB = parseFloat(b.rent.replace('万', ''));
    const sizeA = parseInt(a.size.replace('㎡', ''), 10);
    const sizeB = parseInt(b.size.replace('㎡', ''), 10);
    const viewsA = a.views;
    const viewsB = b.views;
    const floorA = parseInt(a.floors.replace(/[^0-9]/g, ''), 10);
    const floorB = parseInt(b.floors.replace(/[^0-9]/g, ''), 10);

    let comparison = 0;
    switch (sortOption) {
      case '가격':
        comparison = rentA - rentB;
        break;
      case '넓이':
        comparison = sizeB - sizeA;
        break;
      case '지역':
        comparison = a.address.localeCompare(b.address);
        break;
      case '조회수':
        comparison = viewsB - viewsA;
        break;
      case '층수':
        comparison = floorB - floorA;
        break;
      case '건축물 유형':
        comparison = a.type.localeCompare(b.type);
        break;
      case '기본':
      default:
        if (rentA !== rentB) comparison = rentA - rentB;
        else if (sizeA !== sizeB) comparison = sizeB - sizeA;
        else if (a.address !== b.address) comparison = a.address.localeCompare(b.address);
        else if (viewsA !== viewsB) comparison = viewsB - viewsA;
        else if (floorA !== floorB) comparison = floorB - floorA;
        else comparison = a.type.localeCompare(b.type);
        break;
    }

    return sortOrder === '상위순' ? comparison : -comparison;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentHouses = sortedHouses.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedHouses.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="search-results">
      <h2>검색 결과</h2>

      <div className="sort-options">
        <label htmlFor="sort">정렬 기준:</label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="기본">기본</option>
          <option value="가격">가격</option>
          <option value="넓이">넓이</option>
          <option value="지역">지역</option>
          <option value="조회수">조회수</option>
          <option value="층수">층수</option>
          <option value="건축물 유형">건축물 유형</option>
        </select>

        <div className="sort-order">
          <button
            className={`order-button ${sortOrder === '상위순' ? 'active' : ''}`}
            onClick={() => setSortOrder('상위순')}
          >
            상위순
          </button>
          <button
            className={`order-button ${sortOrder === '하위순' ? 'active' : ''}`}
            onClick={() => setSortOrder('하위순')}
          >
            하위순
          </button>
        </div>
      </div>

      <div className="tag-search">
        <label htmlFor="tag-search">태그 검색:</label>
        <input
          type="text"
          id="tag-search"
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
          placeholder="태그 검색"
        />
      </div>

      {currentHouses.length > 0 ? (
        currentHouses.map((house, index) => (
          <div key={index} className="house-item">
            <div className="house-info">
              <div className="house-image">
                {/* 동적으로 이미지 불러오기 */}
                <img
                  src={
                    index === 0
                      ? image1
                      : index === 1
                      ? image2
                      : image3
                  }
                  alt="건축물 사진"
                />
              </div>
              <div className="house-details">
                <table>
                  <tbody>
                    <tr>
                      <th>매물 명</th>
                      <td>{house.name}</td>
                    </tr>
                    <tr>
                      <th>주소</th>
                      <td>{house.address}</td>
                    </tr>
                    <tr>
                      <th>구조</th>
                      <td>{house.type}</td>
                    </tr>
                    <tr>
                      <th>가격</th>
                      <td>{house.rent}</td>
                    </tr>
                    <tr>
                      <th>크기</th>
                      <td>{house.size}</td>
                    </tr>
                    <tr>
                      <th>층수</th>
                      <td>{house.floors}</td>
                    </tr>
                    <tr>
                      <th>조회수</th>
                      <td>{house.views}</td>
                    </tr>
                    <tr>
                      <th>추천수</th>
                      <td>{house.recommendations}</td>
                    </tr>
                  </tbody>
                </table>
                <button className="details-button">상세보기</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>결과가 없습니다.</p>
      )}

      {sortedHouses.length > itemsPerPage && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, pageIndex) => (
            <button
              key={pageIndex}
              className={`page-button ${currentPage === pageIndex + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(pageIndex + 1)}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categorifilterresult;
