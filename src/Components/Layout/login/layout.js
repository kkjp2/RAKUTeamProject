//./components/layout/login/layout.js
import Header from './header/header';
import Footer from './footer/footer'; 
import './layout.css';
const layout = (props) => {
    return<>
    <div className="layout">
        <Header/>
        <main className="main">
            {props.children}
        </main>
        <Footer/>
    </div>
    </>
}
export default layout;