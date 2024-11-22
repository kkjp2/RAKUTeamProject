import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPageResult = () => {
  const navigate = useNavigate();
  const searchResults = JSON.parse(localStorage.getItem('searchResults')) || [];

  const handleNavigateToDetail = (buildNum) => {
    navigate(`/main-content/${buildNum}`); // 상세 페이지로 이동
  };

  return (
    <div>
      <h2>검색 결과</h2>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((property) => (
            <li key={property.buildNum}>
              <h3>{property.name}</h3>
              <p>{property.address}</p>
              <button onClick={() => handleNavigateToDetail(property.buildNum)}>상세보기</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default SearchPageResult;
