import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles/ImageCarousel.css';
import './styles/MainContent.css';
import image1 from './images/image1.jpg'; 
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg'; 

// 이미지 캐러셀 컴포넌트
function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3];

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="image-carousel">
      <button className="carousel-control left" onClick={prevImage}>❮</button>
      <img src={images[currentImage]} alt={`이미지 ${currentImage + 1}`} className="carousel-image" />
      <button className="carousel-control right" onClick={nextImage}>❯</button>
    </div>
  );
}

function MainContent() {
  const { buildNum } = useParams();  // URL에서 buildNum 파라미터 받기
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  // 로컬 스토리지에서 해당 buildNum에 맞는 매물 데이터 가져오기
  useEffect(() => {
    console.log(buildNum);  // buildNum이 제대로 넘어왔는지 확인
    const fetchPropertyDetails = () => {
      const storedDetailsList = JSON.parse(localStorage.getItem('houseDetailsList'));
      if (storedDetailsList) {
        const propertyDetails = storedDetailsList.find(item => String(item.buildNum) === String(buildNum));
        setDetails(propertyDetails || null);
      }
    };

    fetchPropertyDetails();
  }, [buildNum]);

  // 상세보기 팝업 띄우기
  const openPopup = () => {
    if (details) {
      const newWindow = window.open('', '_blank', 'width=600,height=400');
      newWindow.document.write(`<!DOCTYPE html>
      <html>
        <head>
          <title>상세 정보</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            table { width: 100%; border-collapse: collapse; }
            td { padding: 8px; border: 1px solid #ddd; }
          </style>
        </head>
        <body>
          <h2>상세 정보</h2>
          <table>
            <tr><td>건축년도</td><td>${details.ymd}</td></tr>
            <tr><td>넓이</td><td>${details.size}</td></tr>
            <tr><td>월세</td><td>${details.rent}</td></tr>
            <tr><td>건축 유형</td><td>${details.type}</td></tr>
            <tr><td>층수</td><td>${details.floors}</td></tr>
            <tr><td>판매</td><td>${details.sell}</td></tr>
            <tr><td>관리자</td><td>${details.concierge}</td></tr>
            <tr><td>시키킹</td><td>${details.shikikin}</td></tr>
            <tr><td>레이킹</td><td>${details.reikin}</td></tr>
            <tr><td>이전사용처</td><td>${details.prvusage}</td></tr>
            <tr><td>건물번호</td><td>${details.buildNum}</td></tr>
          </table>
        </body>
      </html>`);
      newWindow.document.close();
    }
  };

  // 지도 보기로 이동
  const navigateToMap = () => {
    if (details) {
      navigate('/map', { state: { buildNum: details.buildNum } });
    }
  };

  // 데이터가 아직 없을 때
  if (!details) {
    return <p>Loading...</p>;
  }

  // 매물 정보 표시
  return (
    <div className="main-content">
      <h2>{details.name} 상세 정보</h2>
      <ImageCarousel />
      <div className="property-details">
        <table>
          <tbody>
            <tr><td>주소: {details.address}</td></tr>
            <tr><td>넓이: {details.size}</td></tr>
            <tr><td>월세: {details.rent}</td></tr>
            <tr><td>건축년도: {details.ymd}</td></tr>
            <tr><td>건축 유형: {details.type}</td></tr>
            <tr><td>층수: {details.floors}</td></tr>
            <tr><td>건물번호: {details.buildNum}</td></tr>
          </tbody>
        </table>
        <div className="detailbtn">
          <button id="detailinfo" onClick={openPopup}>상세보기</button>
          
        </div>
      </div>
    </div>
  );
}

export default MainContent;
