import Header from '../move_header/MoveHeader';
import Footer from '../move_footer/MoveFooter'; 
import './MoveLayout.css';
const Layout = (props) => {
    return (
        <div className="layout">
            <Header/>
            <main className="main">
                {props.children}
            </main>
            <Footer/>
        </div>
    );
}
export default Layout;