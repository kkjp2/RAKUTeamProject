import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../main/styles/Build_Header.css';
import Search from '../../main/Search_components/Search'; // 검색 로직 가져오기

function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태

  // 메인 페이지로 이동
  const navigateToMain = () => {
    navigate('/realty/main'); // 메인 페이지로 이동
  };

  // 검색 버튼 클릭 시 호출되는 함수
  const handleSearch = async () => {
    if (searchQuery) {
      const filteredResults = await Search(searchQuery); // 검색 실행
      if (filteredResults.length > 0) {
        localStorage.setItem('searchResults', JSON.stringify(filteredResults)); // 검색 결과 저장
        navigate('/realty/main/search/results'); // 검색 결과 페이지로 이동
      } else {
        alert('검색 결과가 없습니다.'); // 검색 결과가 없을 경우 알림
      }
    }
  };

  return (
    <header className="build-header">
      {/* 로고 클릭 시 메인 페이지로 이동 */}
      <div className="build-logo" onClick={navigateToMain}>
        <span>RAKU</span>
      </div>

      {/* 검색창 */}
      <div className="build-search-bar">
        <input
          type="text"
          placeholder="검색"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // 입력값 변경 시 상태 업데이트
        />
        <button onClick={handleSearch}>검색</button>
      </div>
    </header>
  );
}

export default Header;
