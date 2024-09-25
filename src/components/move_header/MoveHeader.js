import React from 'react';
import './MoveHeader.css';
import { ReactComponent as Logo } from  '../move_img/logo.svg'
import { Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
        <Link to='/MoveMain'><Logo className="logo-image" /> </Link>
        <div className="logo-text">RAKU</div>
        </div>
        <nav>
          <ul className="menu">
            <li><Link to='/MoveMain'><a href="#home">ホーム</a></Link></li>
            <li><a href="#pricing">料金プラン</a></li>
            <li><a href="#testimonials">お客様の声</a></li>
            <li><a href="#contact">引越し会社ランキング</a></li>
            <li><Link to='/MoveMain/CompanyUP'><a href="#services">企業登録</a></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;