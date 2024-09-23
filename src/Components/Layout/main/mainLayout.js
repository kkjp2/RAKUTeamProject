//./components/layout/login/layout.js
import MainHeader from './header/mainHeader';
import EditHeader from './header/EditHeader';
import { useLocation } from 'react-router-dom';
import Footer from './footer/footer'; 
import './mainLayout.css';
const Layout = (props) => {
    const location = useLocation();
    let headerContent;
    let footerContent;
    switch (location.pathname) {
    case '/':
    case '/MyPage':
    case '/MyPage/Favorites':
      headerContent = <MainHeader/>;
      break;
    case '/MyPage/Edit':
      headerContent = <EditHeader/>;
      footerContent = <Footer/>;
      break;
    default:
      headerContent = <h1>Default Header</h1>;
    }
    const isTheMain = location.pathname === '/';
    


    return<>
    <div className="layout">
        <div>{headerContent}</div>
        <main className={isTheMain ? 'main' : "other-main"}>
            {props.children}
        </main>
        <div>{footerContent}</div>
    </div>
    </>
}
export default Layout;