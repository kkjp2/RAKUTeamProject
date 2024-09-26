import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Building details_components/components/Header';
import MainContent from './Building details_components/components/MainContent';
import PriceCalculation from './Building details_components/components/PriceCalculation';
import Footer from './Building details_components/components/Footer';
import RegionsPage from './Maps_components/RegionsPage'; 
import RegionDetailPage from './Maps_components/RegionDetailPage'; 
import MapPage from './Maps_components/MapPage'; 
import './Building details_components/components/styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          {/* 기본 경로: 지방 선택 페이지 */}
          <Route path="/" element={<RegionsPage />} />

          {/* 메인 페이지 경로: MainContent + PriceCalculation */}
          <Route path="/main" element={
            <>
              <MainContent />
              <PriceCalculation />
            </>
          } />

          {/* 특정 매물의 상세 페이지로 이동 (buildNum 기반) */}
          <Route path="/main-content/:buildNum" element={<MainContent />} />

          {/* 지역 리스트 페이지 경로 */}
          <Route path="/regions/:regionId" element={<RegionDetailPage />} />

          {/* 지도 페이지 경로: 구글 맵 */}
          <Route path="/map" element={<MapPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
