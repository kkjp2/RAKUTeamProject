import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './styles/Header.css';
import Search from '../../Search_components/Search'; // 경로를 실제 위치에 맞게 수정


function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태

  // 메인 페이지로 이동
  const navigateToMain = () => {
    navigate('/'); // '/'로 이동하여 메인 페이지로 리다이렉트
  };

  // 검색 버튼 클릭 시 호출되는 함수
  const handleSearch = () => {
    if (searchQuery) {
      const filteredResults = Search(searchQuery); // Search.js에서 검색 수행

      if (filteredResults.length > 0) {
        localStorage.setItem('searchResults', JSON.stringify(filteredResults)); // 검색 결과 저장
        navigate('/search-results'); // 검색 결과 페이지로 이동
      } else {
        alert('검색 결과가 없습니다.'); // 검색 결과가 없는 경우 알림
      }
    }
  };

  return (
    <header className="header">
      {/* 로고 클릭 시 메인 페이지로 이동 */}
      <div className="logo" onClick={navigateToMain} style={{ cursor: 'pointer' }}>
        <img src="Logo.png" alt="logo" />
        <span>RAKU</span>
      </div>

      {/* 검색창 */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="검색" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} // 입력값 변경 시 상태 업데이트
        />
        <button onClick={handleSearch}>검색</button> {/* 검색 버튼 클릭 시 handleSearch 호출 */}
      </div>
    </header>
  );
}

export default Header;
