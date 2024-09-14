import React from 'react';
import './Header.css';
import { ReactComponent as Logo } from  '../img/logo.svg'
import { Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
        <Link to='/'><Logo className="logo-image" /> </Link>
        <div className="logo-text">RAKU</div>
        </div>
        <nav>
          <ul className="menu">
            <li><Link to='/'><a href="#home">ホーム</a></Link></li>
            <li><a href="#services">サービス</a></li>
            <li><a href="#pricing">料金プラン</a></li>
            <li><Link to='/리뷰'><a href="#testimonials">お客様の声</a></Link></li>
            <li><a href="#contact">引越し会社ランキング</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
