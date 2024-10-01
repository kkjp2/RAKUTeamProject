import './App.css';
import Layout from './Components/Layout/rental/layout';
import RentalBoard from './Components/Layout/rental/main/rentalboard';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RentalList from './Components/Layout/rental/main/RentalList';
import RentalWritePage from './Components/Layout/rental/main/rental_writepage';
import RentalForm from './Components/Layout/rental/main/RentalForm';
import RentalDetail from './Components/Layout/rental/main/rental_detail';
import ReservationForm from './Components/Layout/rental/main/rental_reservationform';
import RentalMyPage from './Components/Layout/rental/main/rental_mypage';

function App() {
  return (
   <Layout>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<RentalBoard/>}/>    
    <Route path='/rental_mypage' element={<RentalMyPage/>}/>
    <Route path="/rental_list/:region" element={<RentalList/>}/>
    <Route path="/rental_write_page" element={<RentalWritePage/>}/>
    <Route path='/rentalform' element={<RentalForm/>}/>
    <Route path='/rental_details' element={<RentalDetail/>} />
    <Route path='/rental_reservationform' element={<ReservationForm/>}/>
      </Routes>
      </BrowserRouter>
   </Layout>
   
  );
}

export default App;
