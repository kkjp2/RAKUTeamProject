import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Layout from './Components/Layout/notice/layout.js';
import MainBoard from './Components/Layout/notice/main/mainboard.js';
import RegionBoardList from './Components/Layout/notice/main/region_board_list.js';
import FestivalBoardList from './Components/Layout/notice/main/festival_board_list.js';
import MyPage from './Components/Layout/notice/main/MyPage.js';
import WritingPage from './Components/Layout/notice/main/WritingPage.js';
import ViewBoard from './Components/Layout/notice/main/view_board.js';
import ViewFestival from './Components/Layout/notice/main/view_festival.js';



function App() {
  return (
    <Layout>      
    <BrowserRouter>
    <Routes>                
    <Route path="/" element={<MainBoard/>}/>          
    <Route path="/MyPage" element={<MyPage/>}/>          
    <Route path="/region_board_list/:region" element={<RegionBoardList />} />         
         <Route path="/festival_board_list/:region" element={<FestivalBoardList/>}/>                 
         <Route path="/WritingPage" element={<WritingPage/>}/>  
         <Route path="/view_board"element={<ViewBoard/>}/>
         <Route path="/view_festival" element={<ViewFestival/>}/>       
         </Routes>
        </BrowserRouter>        
    </Layout>

  
  );
}

export default App;
