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
      <h1 className="main_header"><a href='/'>RAKU</a></h1> 
      <div className="user-id">유우키님! 안녕하세요!</div>            
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
            {/* 메뉴가 열렸을 때 보여줄 항목 */}
            {isMenuOpen && (
        <div className="dropdown-menu">
          <ul>
                      
            <li><a href="/notice/mypage">마이페이지</a></li>
            <li><a href="/signup">회원가입</a></li>
            <li><a href="/notice_login">로그인</a></li>
          </ul>
        </div>
      )}
    
    </header>
  );
};

export default Header;