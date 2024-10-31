// import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Layout from './Components/Layout/notice/layout.js';
import MainBoard from './Components/Layout/notice/main/mainboard.js';
import RegionBoardList from './Components/Layout/notice/main/region_board_list.js';
import FestivalBoardList from './Components/Layout/notice/main/festival_board_list.js';
import MyPage from './Components/Layout/notice/main/MyPage.js';
import WritingPage from './Components/Layout/notice/main/WritingPage.js';
import ViewBoard from './Components/Layout/notice/main/view_board.js';
import ViewFestival from './Components/Layout/notice/main/view_festival.js';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LoginPage from './Components/Layout/notice/main/loginpage.js';





import Layout from './Components/Layout/rental/layout';
import RentalBoard from './Components/Layout/rental/main/rentalboard';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RentalList from './Components/Layout/rental/main/RentalList';
import RentalWritePage from './Components/Layout/rental/main/rental_writepage';
import RentalForm from './Components/Layout/rental/main/RentalForm';
import RentalDetail from './Components/Layout/rental/main/rental_detail';
import ReservationForm from './Components/Layout/rental/main/rental_reservationform';
import RentalMyPage from './Components/Layout/rental/main/rental_mypage';
import RentalChat from './Components/Layout/rental/main/rental_chat';
import RentalReview from './Components/Layout/rental/main/rental_review';
import Login from './Components/Layout/login/main/index.js'

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
      axios.get('/api/hello')
      .then(response => setHello(response.data))
      .catch(error => console.log(error))
  }, []);

  return (
    <Layout>      
    <BrowserRouter>
    <Routes>                
    <Route path="/" element={<MainBoard/>}/>                  
    <Route path="/notice_MyPage" element={<MyPage/>}/>          
    <Route path="/notice_region_board_list/:region" element={<RegionBoardList />} />         
         <Route path="/notice_festival_board_list/:region" element={<FestivalBoardList/>}/>                 
         <Route path="/notice_WritingPage" element={<WritingPage/>}/>  
         <Route path="/notice_view_board"element={<ViewBoard/>}/>
         <Route path="/notice_view_festival" element={<ViewFestival/>}/>    
         <Route path="/notice_login" element={<LoginPage/>}/>    
         </Routes>
        </BrowserRouter>        
    </Layout>  
  );
}

export default App;