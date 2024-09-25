import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'; 
import Main from '../index'
import Review from '../move_review/MoveReview';
import MovingCompanyList from '../move_company_list/MovingCompanyList'
import CompanyProfile from '../move_company_profile/MoveCompanyProfile'
import CompanyUP from '../move_company_up/MoveCompanyUP'

function Start() {
  return (
    <Router>
      <div>
        <Routes>  
          <Route path="/" element={<Navigate to="/MoveMain" replace />} />
          <Route path="/MoveMain" element={<Main />} />  
          <Route path="/MoveMain/리뷰" element={<Review />} />
          <Route path='/MoveMain/MovingCompanyList' element={<MovingCompanyList/>}/>
          <Route path='/MoveMain/CompanyProfile' element={<CompanyProfile/>}/>
          <Route path='/MoveMain/CompanyUP' element={<CompanyUP/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default Start;