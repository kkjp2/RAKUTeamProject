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
import Index from './Components/Layout/company/page/index.js'
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