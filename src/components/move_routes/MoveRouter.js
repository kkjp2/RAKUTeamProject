import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'; 
import Main from '../index'
import CompanyDetail from '../move_review/MoveReview.js';
import MovingCompanyList from '../move_company_list/MovingCompanyList'
import CompanyProfile from '../move_company_profile/MoveCompanyProfile.js'
import CompanyUP from '../move_company_up/MoveCompanyUP.js'
import MoveReservation from '../move_reservation/MoveReservation.js'
import MoveReservationCheck from '../move_reservation/MoveReservationCheck.js'
import MoveReviewUP from '../move_review/MoveReviewUP.js'
import Login from '../Login.js'

function Start() {
  return (
    <Router>
      <div>
        <Routes>  
          <Route path="/" element={<Navigate to="/MoveMain" replace />} />
          <Route path="/MoveMain" element={<Main />} />  
          {/* <Route path="/MoveMain/UserReview/:companyId" component={CompanyDetail} element={<UserReview />} /> */}
          <Route path="/MoveMain/UserReview/:companyId" element={<CompanyDetail />} />
          <Route path='/MoveMain/MoveReviewUP' element={<MoveReviewUP/>}/>
          <Route path='/MoveMain/MovingCompanyList' element={<MovingCompanyList/>}/>
          <Route path='/MoveMain/CompanyProfile/:companyId' element={<CompanyProfile/>}/>
          <Route path='/MoveMain/CompanyUP' element={<CompanyUP/>}/>
          <Route path='/MoveMain/MoveReservation' element={<MoveReservation/>}/>
          <Route path='/MoveMain/MoveReservationCheck' element={<MoveReservationCheck/>}/>
          <Route path='/MoveMain/Login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default Start;