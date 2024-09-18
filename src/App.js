import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Layout from './Components/Layout/notice/layout.js';
import MainBoard from './Components/Layout/notice/main/mainboard.js';
import RegionBoardList from './Components/Layout/notice/main/region_board_list.js';
import FestivalBoardList from './Components/Layout/notice/main/festival_board_list.js';



function App() {
  return (
    <Layout>
    <BrowserRouter>
    <Routes>      
    <Route path="/" element={<MainBoard/>}/>                     
         <Route path="/region_board_list" element={<RegionBoardList/>}/>
         <Route path="/festival_board_list" element={<FestivalBoardList/>}/>         
         
         </Routes>
        </BrowserRouter>
    </Layout>

  
  );
}

export default App;
