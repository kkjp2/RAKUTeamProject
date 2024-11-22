import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Building details_components/components/Header';
import MainContent from './Building details_components/components/MainContent';
import PriceCalculation from './Building details_components/components/PriceCalculation';
import Footer_Popup from './Building details_components/components/Footer_Popup';
import RegionsPage from './Maps_components/RegionsPage'; 
import RegionDetailPage from './Maps_components/RegionDetailPage'; 
import MapPage from './Maps_components/MapPage'; 
import SearchPageResult from './Search_components/Search_Page_result'; 
import CategoriFilter from './Categori_Components/CategoriFilter'; 
import Categorifilterresult from './Categori_Components/Categorifilterresult'; 
import CreateBuildingPage from './Create_Building_Details/Create_building_page';
import ModifyBulidingPage from './Modify_Bulding_Detail/Modify_building_page';
import DeleteBuildingPage from './Delete_building_Detail/Delete_building_page';
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
          <Route path="/main/content/:buildNum" element={<MainContent />} />

          {/* 지역 리스트 페이지 경로 */}
          <Route path="/regions/:regionId" element={<RegionDetailPage />} />

          {/* 지도 페이지 경로: 구글 맵 */}
          <Route path="/map" element={<MapPage />} />

          {/* 검색 결과 페이지 경로 */}
          <Route path="/search/results" element={<SearchPageResult />} /> 

          {/* 카테고리 필터 페이지 경로 */}
          <Route path="/categoriFilter" element={<CategoriFilter />} /> 

          {/* 카테고리 필터 결과 페이지 경로 */}
          <Route path="/categorifilterresult" element={<Categorifilterresult />} /> 

          {/* 추가: 건물 생성 페이지 경로 */}
          <Route path="/create/building/page" element={<CreateBuildingPage />} /> {/* 경로 추가 */}

          <Route path="/modify/building/page" element={<ModifyBulidingPage />} />
          <Route path="/delete/building/page" element={<DeleteBuildingPage/>} />
        </Routes>

        <Footer_Popup />
      </div>
    </Router>
  );
}

export default App;
