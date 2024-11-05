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
import MyPageDelete from './myPageDelete.js';
import RecentlyViewed from './recentlyViewed.js';
import InquiryDetail from './inquiryDetail.js';
import Announcement from './annLayout.js';

const Index = () => {

    return<>
    <Router>
    <Layout>
    <Routes>
    
            <Route path='/main' element={<MainPage/>}/>
            <Route path='/myPage' element={<MyPage/>}/>
            <Route path='/myPage/favorites' element={<Favorites/>}/>
            <Route path='/myPage/edit' element={<MyPageEdit/>}/>
            <Route path='/myPage/edit/nickname' element={<MyPageNickEdit/>}/>
            <Route path='/myPage/edit/email' element={<MyPageEmailEdit/>}/>
            <Route path='/myPage/edit/email/Auth' element={<MyPageEmailEditAuth/>}/>
            <Route path='/myPage/edit/password' element={<MyPagePasswordEdit/>}/>
            <Route path='/myPage/edit/area' element={<MyPageAreaEdit/>}/>
            <Route path='/myPage/delete' element={<MyPageDelete/>}/>
            <Route path='/myPage/recentlyviewed' element={<RecentlyViewed/>}/>
            <Route path='/myPage/inquirydetail' element={<InquiryDetail/>}/>
            <Route path='/main/announcement' element={<Announcement/>}/>
    </Routes>
    </Layout>
    </Router>
    </>


}



export default Index;