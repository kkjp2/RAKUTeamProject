import React from 'react';
import './MoveHeader.css';
import { ReactComponent as Logo } from  '../move_img/logo.svg'
import { Link,useNavigate} from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleLinkClick = (event) => {
    const token = localStorage.getItem('token'); // 检查 token

    if (!token) {
      event.preventDefault(); // 阻止默认跳转行为
      // alert('ログインが必要です。ログインしてください。');
      // navigate('/login');

      const userWantsToLogin = window.confirm('ログインが必要です。ログインしますか？');
      if (userWantsToLogin) {
        navigate('/login'); // 用户选择“是”后跳转到登录页面
      }
    }
  };

  return (
    <header className="move_header">
      <div className="container">
        <div className="logo-container">
        <Link to='/main'><Logo className="logo-image" /></Link>
        <div className="logo-text">RAKU</div>
        </div>
        <nav>
          <ul className="menu">
            <li><Link to='/MoveMain'>ホーム</Link></li>
            <li><a href="#pricing">料金プラン</a></li>
            <li><Link to='/MoveMain/UserReview'>お客様の声</Link></li>
            <li><a href="#contact">引越し会社ランキング</a></li>
            <li><Link to='/MoveMain/CompanyUP' onClick={handleLinkClick}>企業登録</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
