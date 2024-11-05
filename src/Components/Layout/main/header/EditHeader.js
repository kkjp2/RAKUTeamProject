// ./components/layout/login/header/header.js
import './EditHeader.css';
import { useNavigate } from 'react-router-dom';


const EditHeader = () => {
    const navigate = useNavigate();
    const goToMainPage = () => {
        navigate('/main');
      };
    return<>
    <header className="header">
        <div className="content">
        <div>
            <p className="Logo" onClick={goToMainPage}>RAKU</p>
            </div>

        {/* <nav className="navigation">
            <ul>
                <li>
                    메뉴1
                </li>
                <li>
                    메뉴2
                </li>
            </ul>
        </nav> */}
        </div>
    </header>
    </>
}
export default EditHeader;