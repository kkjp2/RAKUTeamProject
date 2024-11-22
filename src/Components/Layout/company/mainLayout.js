//./components/layout/login/layout.js
import MainHeader from './header/mainHeader';
import { useLocation } from 'react-router-dom';
import Footer from './footer/footer'; 
import './mainLayout.css';
const Layout = (props) => {

    return<>
    <div className="layout">
        <MainHeader/>
        <main className="main">
            {props.children}
        </main>
        <Footer/>
    </div>
    </>
}
export default Layout;