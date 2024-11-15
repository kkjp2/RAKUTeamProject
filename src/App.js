import { BrowserRouter } from "react-router-dom";
import './App.css';
import Login from './Components/Layout/login/main/index.js';
import { useLocation } from 'react-router-dom';

function App() {
  // const [hello, setHello] = useState('')
  // const location = useLocation();
  // let index ;
  // useEffect(() => {
  //     axios.get('/api/hello')
  //     .then(response => setHello(response.data))
  //     .catch(error => console.log(error))
  // }, []);
  // if (location.pathname.startsWith('/login') ) {
  //   index = <Login/>;
  // } else (location.pathname.startsWith('/main')){
  //   index = <Main/>;
  // }
  return (   
    <Login/>
    // {index}      
  );
}


//login : /login
//realty : /realty
export default App;