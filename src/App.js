import './App.css';
import Login from './Components/Layout/login/main/index.js';
import Main from './Components/Layout/main/page/mainIndex.js';
import Move from './Components/Layout/move/move_routes/MoveRouter.js'
import Notice from './Components/Layout/notice/main/index.js'
import Realty from './Components/Layout/realty/App.js'
import Rental from './Components/Layout/rental/main/index.js'
import Company from './Components/Layout/company/page/index.js'
import { useLocation, BrowserRouter as Router } from 'react-router-dom';


//수정test
function App() {
  return <>
    <Router>
      <Content />
    </Router>
    </>
}

function Content() {
  const location = useLocation(); // 이제 Router 내부에서 호출됩니다.

  let nowContent;
  if (location.pathname.startsWith('/main') || location.pathname.startsWith('/mypage')) {
    nowContent = <Main />;
  } else if (location.pathname.startsWith('/login')){
    nowContent = <Login/>
  } else if (location.pathname.startsWith('/MoveMain')){
    nowContent = <Move/>;
  } else if (location.pathname.startsWith('/notice')){
    nowContent = <Notice/>;
  }else if (location.pathname.startsWith('/company')){
    nowContent = <Company/>;
  }else if (location.pathname.startsWith('/rental')){
    nowContent = <Rental/>;
  }else if (location.pathname.startsWith('/realty')){
    nowContent = <Realty/>;
  }

  return <div>{nowContent}</div>;
}

export default App;