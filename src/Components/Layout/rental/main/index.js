import Layout from '../layout';
import RentalBoard from './rentalboard';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RentalList from './RentalList';
import RentalWritePage from './rental_writepage';
import RentalForm from './RentalForm';
import RentalDetail from './rental_detail';
import ReservationForm from './rental_reservationform';
import RentalMyPage from './rental_mypage';
import RentalChat from './rental_chat';
import RentalReview from './rental_review';
// import Login from './main/index.js'
// import Index from './index.js'
import RentalReservationForm from './rental_reservationform.js';

const homepage = () => {
    return<>
    <Layout>
    <Route path="/rental" element={<RentalBoard/>}/>                  
    <Route path="/rental/mypage" element={<RentalMyPage/>}/>          
    <Route path="/rental/list/:region" element={<RentalList/>}/> 
    <Route path="/rental/write/page" element={<RentalWritePage/>}/> 
    <Route path="/rental/rentalform" element={<RentalForm/>}/> 
    <Route path="/rental/details" element={<RentalDetail/>}/> 
    <Route path="/rental/reservationform" element={<RentalReservationForm/>}/>
    <Route path="/rental/chat" element={<RentalChat/>}/>
    <Route path="/rental/review" element={<RentalReview/>}/>
    
    
    </Layout>
     </>
}

export default homepage;