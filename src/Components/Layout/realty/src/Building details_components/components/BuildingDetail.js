import React from 'react';
import { useLocation } from 'react-router-dom';

const BuildingDetail = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h2>매물 상세 정보</h2>
      {state ? (
        <>
          <p>이름: {state.name}</p>
          <p>주소: {state.address}</p>
          <p>연도: {state.ymd}</p>
          <p>넓이: {state.size} m²</p>
          <p>월세: {state.rent}</p>
          <p>유형: {state.type}</p>
          <p>층수: {state.floors}</p>
        </>
      ) : (
        <p>매물 정보를 불러오는 중입니다...</p>
      )}
    </div>
  );
};

export default BuildingDetail;
