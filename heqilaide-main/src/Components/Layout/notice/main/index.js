import { Routes, Route, BrowserRouter } from "react-router-dom";
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

const homepage = () => {
    return<>
    <Layout>
    <Route path="/notice" element={<MainBoard/>}/>                  
    <Route path="/notice/mypage" element={<MyPage/>}/>          
    <Route path="/notice/region/board/list/:region" element={<RegionBoardList />} />         
    <Route path="/notice/festival/board/list/:region" element={<FestivalBoardList/>}/>                 
    <Route path="/notice/writingpage" element={<WritingPage/>}/>  
    <Route path="/notice/view/board"element={<ViewBoard/>}/>
    <Route path="/notice/view/festival" element={<ViewFestival/>}/>    
    {/* <Route path="/notice/login" element={<LoginPage/>}/>*/}
    </Layout>
     </>
}

export default homepage;