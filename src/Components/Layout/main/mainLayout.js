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
    if (location.pathname.startsWith('/mypage/edit') ) {
        headerContent = <EditHeader/>;
        footerContent = <Footer/>;
      } else if (location.pathname === '/main' || location.pathname.startsWith('/mypage')) {
        headerContent = <MainHeader/>;
      } else {
        headerContent = <h1>Default Header</h1>;
      }
    const isTheMain = location.pathname === '/main';
    


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