import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles/ImageCarousel.css';
import './styles/MainContent.css';
import image1 from './images/image1.jpg'; 
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg'; 

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
  const { buildNum } = useParams();
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬 스토리지에서 데이터 읽기
    const fetchPropertyDetails = () => {
      const storedDetailsList = JSON.parse(localStorage.getItem('houseDetailsList')); // 하우스 데이터 목록 가져오기
      if (storedDetailsList) {
        // buildNum에 해당하는 데이터 필터링
        const propertyDetails = storedDetailsList.find(item => item.buildNum === buildNum);
        setDetails(propertyDetails || null);
      }
    };

    fetchPropertyDetails();
  }, [buildNum]);

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
            <tr><td>부동산 관계자 코멘트</td><td>${details.conciergecoment}</td></tr>
            <tr><td>복 단층</td><td>${details.dpsin}</td></tr>
            <tr><td>건물번호</td><td>${details.buildNum}</td></tr>
          </table>
        </body>
      </html>`);
      newWindow.document.close();
    }
  };

  const navigateToMap = () => {
    if (details) {
      navigate('/map', { state: { buildNum: details.buildNum } });
    }
  };

  if (!details) {
    return <p>Loading...</p>;
  }

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
          <button onClick={navigateToMap}>지도 보기</button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
