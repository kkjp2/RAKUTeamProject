import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search_Page_result.css';

const Search_Page_result = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchResults = JSON.parse(localStorage.getItem('searchResults'));
    if (searchResults) {
      setResults(searchResults);
    } else {
      alert('검색 결과가 없습니다.');
    }
  }, []);

  const handleNavigate = (buildNumber) => {
    navigate(`/realty/main/categorifilter/main-content/${buildNumber}`, {
      state: { buildNumber },
    });
  };

  return (
    <div className="build-search-results">
      <h2>검색 결과</h2>
      {results.length === 0 ? (
        <p>조건에 맞는 매물이 없습니다.</p>
      ) : (
        results.map((house, index) => (
          <div key={index} className="build-house-item">
            <h3>{house.name}</h3>
            <p>주소: {house.address}</p>
            <p>가격: {house.rentPrice}</p>
            <p>크기: {house.buildingSize}</p>
            <button
              className="build-navigate-button"
              onClick={() => handleNavigate(house.buildNumber)}
            >
              이동하기
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Search_Page_result;
