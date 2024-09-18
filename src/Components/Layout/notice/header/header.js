// ./components/layout/header/header.js
import './header.css';
import React,{useState} from 'react';




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴의 열림

    // 메뉴 열고 닫기 함수
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen); // 현재 상태의 반대로 변경
    };

    
  
  
  return (
    <header className="header">
      <h1>RAKU</h1> 
      <div className="user-id">김김김님! 안녕하세요!</div>            
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
            {/* 메뉴가 열렸을 때 보여줄 항목 */}
            {isMenuOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><a href="/mypage">마이페이지</a></li>
            <li><a href="/edit-profile">개인정보 수정</a></li>
            <li><a href="/logout">로그아웃</a></li>
          </ul>
        </div>
      )}
    
    </header>
  );
};

export default Header;