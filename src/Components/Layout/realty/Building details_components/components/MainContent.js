import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getHouseDetailByBuildNumber, // API 호출 함수
} from "./Build_Data";
import "../../main/styles/MainContent.css";
import PriceCalculation from "./PriceCalculation";
// import ImageCarousel from "./ImageCarousel"; // 주석 처리

function MainContent() {
  const { buildNum } = useParams(); // URL에서 건물 번호 파라미터 가져오기
  const [details, setDetails] = useState(null); // 상태에 건물 상세 정보 저장
  const [rent, setRent] = useState(0);
  const [additionalCost, setAdditionalCost] = useState(0);

  // 백엔드 API에서 데이터 불러오기
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const result = await getHouseDetailByBuildNumber(buildNum); // API 호출
        if (result) {
          setDetails(result);

          // 월세 및 관리비 값 설정
          setRent(result.rentPrice || 0);
          setAdditionalCost(3000); // 기본 관리비 설정
        } else {
          console.error("해당 건축물을 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("데이터 조회 중 오류 발생:", error);
      }
    };

    fetchDetails();
  }, [buildNum]);

  // 상세 정보 팝업 창 열기
  const openPopup = () => {
    if (details) {
      const popup = window.open("", "_blank", "width=600,height=400");
      popup.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${details.name} 상세 정보</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              table { width: 100%; border-collapse: collapse; }
              td { padding: 8px; border: 1px solid #ddd; }
            </style>
          </head>
          <body>
            <h2>${details.name} 상세 정보</h2>
            <table>
              <tr><td>건축년도</td><td>${details.constructionDate}</td></tr>
              <tr><td>건축 유형</td><td>${details.buildingType}</td></tr>
              <tr><td>층수</td><td>${details.floors}</td></tr>
              <tr><td>보증금</td><td>${details.deposit}</td></tr>
              <tr><td>월세</td><td>${details.rentPrice}</td></tr>
              <tr><td>이전 사용처</td><td>${details.previousUse}</td></tr>
              <tr><td>주소</td><td>${details.address}, ${details.detailedAddress}</td></tr>
              <tr><td>크기</td><td>${details.buildingSize}</td></tr>
              <tr><td>태그</td><td>${details.tags || "없음"}</td></tr>
              <tr><td>랭킹</td><td>${details.ranking || "없음"}</td></tr>
            </table>
          </body>
        </html>
      `);
      popup.document.close();
    }
  };

  if (!details) return <p>Loading...</p>;

  return (
    <div className="main-content">
      <h2>{details.name} 상세 정보</h2>
      {/* <ImageCarousel /> 주석 처리 */}
      <div className="property-details">
        <table>
          <tbody>
            <tr><td>건축명</td><td>{details.name}</td></tr>
            <tr><td>주소</td><td>{details.address} {details.detailedAddress}</td></tr>
            <tr><td>건축 유형</td><td>{details.buildingType}</td></tr>
            <tr><td>건축년도</td><td>{details.constructionDate}</td></tr>
            <tr><td>층수</td><td>{details.floors}</td></tr>
            <tr><td>보증금</td><td>{details.deposit}</td></tr>
            <tr><td>월세</td><td>{details.rentPrice}</td></tr>
            <tr><td>건축 크기</td><td>{details.buildingSize}</td></tr>
            <tr><td>태그</td><td>{details.tags || "없음"}</td></tr>
          </tbody>
        </table>
        <div className="detailbtn">
          <button onClick={openPopup}>상세보기</button>
        </div>
      </div>
      <PriceCalculation rent={rent} additionalCost={additionalCost} />
    </div>
  );
}

export default MainContent;
