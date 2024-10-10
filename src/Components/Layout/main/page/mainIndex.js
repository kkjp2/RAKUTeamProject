import Layout from '../mainLayout.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './mainPage.js';
import MyPage from './myPage.js';
import Favorites from './favorites.js';
import MyPageEdit from './myPageEdit.js';
import MyPageNickEdit from './myPageNickEdit.js';
import MyPageEmailEdit from './myPageEmailEdit.js';
import MyPageEmailEditAuth from './myPageEmailEditAuth.js';
import MyPagePasswordEdit from './myPagePasswordEdit.js';
import MyPageAreaEdit from './myPageAreaEdit.js';
import MyPageDeleteEdit from './myPageDelete.js';
import RecentlyViewed from './recentlyViewed.js';
import InquiryDetail from './inquiryDetail.js';
import Comparison from './comparison.js';

const Index = () => {

    return<>
    <Router>
    <Layout>
    <Routes>
    
            <Route path='/' element={<MainPage/>}/>
            <Route path='/MyPage' element={<MyPage/>}/>
            <Route path='/MyPage/Favorites' element={<Favorites/>}/>
            <Route path='/MyPage/Edit' element={<MyPageEdit/>}/>
            <Route path='/MyPage/Edit/Nickname' element={<MyPageNickEdit/>}/>
            <Route path='/MyPage/Edit/Email' element={<MyPageEmailEdit/>}/>
            <Route path='/MyPage/Edit/Email/Auth' element={<MyPageEmailEditAuth/>}/>
            <Route path='/MyPage/Edit/Password' element={<MyPagePasswordEdit/>}/>
            <Route path='/MyPage/Edit/Area' element={<MyPageAreaEdit/>}/>
            <Route path='/MyPage/Edit/Delete' element={<MyPageDeleteEdit/>}/>
            <Route path='/MyPage/RecentlyViewed' element={<RecentlyViewed/>}/>
            <Route path='/MyPage/InquiryDetail' element={<InquiryDetail/>}/>
            <Route path='/MyPage/Comparison' element={<Comparison/>}/>
    </Routes>
    </Layout>
    </Router>
    </>


}



export default Index;