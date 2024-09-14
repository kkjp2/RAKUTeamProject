import Header from '../header/Header';
import Footer from '../footer/Footer'; 
import './Layout.css';
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