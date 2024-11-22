//./components/layout/login/layout.js
import Header from './header/header';
import Footer from './footer/footer'; 
import { BrowserRouter as Router} from 'react-router-dom';
import './layout.css';
const layout = (props) => {
    return<>
    <Router>
    <div className="layout">
        <Header/>
        <main className="main">
            {props.children}
        </main>
        <Footer/>
    </div>
    </Router>
    </>
}
export default layout;