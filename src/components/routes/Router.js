import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Main from '../index'
import Review from '../review/Review';
import CompanyProfile from '../company_list/MovingCompanyList'

function Start() {
  return (
    <Router>
      <div>
        <Routes>  
          <Route path="/" element={<Main />} />  
          <Route path="/리뷰" element={<Review />} />
          <Route path='/MovingCompanyList' element={<CompanyProfile/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default Start;