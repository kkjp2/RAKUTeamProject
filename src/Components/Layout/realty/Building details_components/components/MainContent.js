import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getHouseDetailByBuildNumber, // API 호출 함수
} from "./Build_Data";
import "../../main/styles/ImageCarousel.css";
import "../../main/styles/MainContent.css";
import PriceCalculation from "./PriceCalculation"; // PriceCalculation 컴포넌트 임포트
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

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
      <button className="carousel-control left" onClick={prevImage}>
        ❮
      </button>
      <img
        src={images[currentImage]}
        alt={`이미지 ${currentImage + 1}`}
        className="carousel-image"
      />
      <button className="carousel-control right" onClick={nextImage}>
        ❯
      </button>
    </div>
  );
}

// 건축물 상세 정보 컴포넌트
function MainContent() {
  const { buildNum } = useParams();
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  // 월세와 관리비 상태 추가
  const [rent, setRent] = useState(0);
  const [additionalCost, setAdditionalCost] = useState(0);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        // 특정 건축물의 정보를 API에서 조회
        const propertyDetails = await getHouseDetailByBuildNumber(buildNum);

        if (propertyDetails) {
          setDetails(propertyDetails);

          // 월세와 관리비 값을 업데이트
          setRent(propertyDetails.rent || 0);
          setAdditionalCost(propertyDetails.additionalCost || 3000); // 기본 관리비는 3000으로 설정

          // 최근 본 매물 정보 저장
          const propertyData = {
            name: propertyDetails.name,
            image: propertyDetails.image || null,
            rent: propertyDetails.rent,
            area: propertyDetails.size,
            tag: propertyDetails.tag || "정보 없음",
            buildNum: propertyDetails.buildNum,
          };
          localStorage.setItem("recentProperty", JSON.stringify(propertyData));
        } else {
          console.error("해당 건축물을 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("건축물 정보 조회 중 오류 발생:", error);
      }
    };

    fetchPropertyDetails();
  }, [buildNum]);

  const openPopup = () => {
    if (details) {
      const newWindow = window.open("", "_blank", "width=600,height=400");
      newWindow.document.write(`
        <!DOCTYPE html>
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
              <tr><td>판매 여부</td><td>${details.sell}</td></tr>
              <tr><td>관리자</td><td>${details.concierge}</td></tr>
              <tr><td>시키킹</td><td>${details.shikikin}</td></tr>
              <tr><td>레이킹</td><td>${details.reikin}</td></tr>
              <tr><td>이전 사용처</td><td>${details.prvusage}</td></tr>
              <tr><td>건물 번호</td><td>${details.buildNum}</td></tr>
            </table>
          </body>
        </html>
      `);
      newWindow.document.close();
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
            <tr>
              <td>이름: {details.name}</td>
            </tr>
            <tr>
              <td>주소: {details.address}</td>
            </tr>
            <tr>
              <td>넓이: {details.size}</td>
            </tr>
            <tr>
              <td>월세: {details.rent}</td>
            </tr>
            <tr>
              <td>건축년도: {details.ymd}</td>
            </tr>
            <tr>
              <td>건축 유형: {details.type}</td>
            </tr>
            <tr>
              <td>층수: {details.floors}</td>
            </tr>
            <tr>
              <td>건물 번호: {details.buildNum}</td>
            </tr>
          </tbody>
        </table>
        <div className="detailbtn">
          <button id="detailinfo" onClick={openPopup}>
            상세보기
          </button>
        </div>
      </div>
      {/* PriceCalculation 컴포넌트 호출 */}
      <PriceCalculation rent={rent} additionalCost={additionalCost} />
    </div>
  );
}

export default MainContent;
