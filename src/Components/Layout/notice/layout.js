//./components/layout/layout.js
import Header from './header/header';
import './layout.css';


const layout = (props) => {
    return<>
    <div className="layout">
        <Header/>
        <main className="main">
            {props.children}
        </main>
        
    </div>
    </>
}
export default layout;