import Layout from '../mainLayout.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './mainPage.js';
import MyPage from './myPage.js';
import Favorites from './favorites.js';
import MyPageEdit from './myPageEdit.js';
import MyPageNickEdit from './myPageNickEdit.js';
import MyPageEmailEdit from './myPageEmailEdit.js';

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
    
    </Routes>
    </Layout>
    </Router>
    </>


}



export default Index;