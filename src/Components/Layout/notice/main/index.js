import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from '../layout.js';
import MainBoard from './mainboard.js';
import RegionBoardList from './region_board_list.js';
import FestivalBoardList from './festival_board_list.js';
import MyPage from './MyPage.js';
import WritingPage from './WritingPage.js';
import ViewBoard from './view_board.js';
import ViewFestival from './view_festival.js';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import LoginPage from './Components/Layout/notice/main/loginpage.js';

const homepage = () => {
    return<>
    <Layout>
    <Routes>
    <Route path="/notice" element={<MainBoard/>}/>                  
    <Route path="/notice/mypage" element={<MyPage/>}/>          
    <Route path="/notice/region/board/list/:region" element={<RegionBoardList />} />         
    <Route path="/notice/festival/board/list/:region" element={<FestivalBoardList/>}/>                 
    <Route path="/notice/writingpage/:region" element={<WritingPage/>}/>  
    <Route path="/notice/view/board/:id"element={<ViewBoard/>}/>
    <Route path="/notice/view/festival/:id" element={<ViewFestival/>}/>    
    {/* <Route path="/notice/login" element={<LoginPage/>}/>*/}
    </Routes>
    </Layout>
     </>
}

export default homepage;