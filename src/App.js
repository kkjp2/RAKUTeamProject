import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Main from './components/index'
import Review from './components/review/Review';

function App() {
  return (
    <Router>
      <div>
        <Routes>  
          <Route path="/" element={<Main />} />  
          <Route path="/리뷰" element={<Review />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;