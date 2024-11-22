// ./components/layout/login/header/header.js
import './header.css';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    const goToMainpage = () => {
        navigate('/main');
      };
    return<>
    <header className="header">
        <div className="content">
        <div>
            <p className="Logo" onClick={goToMainpage}>RAKU</p>
            </div>
        </div>
    </header>
    </>
}
export default Header;