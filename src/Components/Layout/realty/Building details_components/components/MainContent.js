import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getHouseDetailByBuildNumber, // API 호출 함수
} from "./Build_Data";
import "../../main/styles/MainContent.css";
import PriceCalculation from "./PriceCalculation";

function MainContent() {
  const { buildNum } = useParams(); // URL에서 건물 번호 파라미터 가져오기
  const [details, setDetails] = useState(null); // 건물 상세 정보를 상태에 저장
  const [rent, setRent] = useState(0); // 월세 상태
  const [additionalCost, setAdditionalCost] = useState(0); // 관리비 상태

  // API에서 건물 상세 정보를 불러오기
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const result = await getHouseDetailByBuildNumber(buildNum); // API 호출
        if (result) {
          setDetails(result); // 결과로 받은 데이터로 상태 업데이트

          // 월세 및 관리비 기본 값 설정
          setRent(result.rentPrice || 0); 
          setAdditionalCost(3000); // 기본 관리비 설정

          // 로컬 스토리지에 현재 매물 정보 저장
          localStorage.setItem(
            "recentProperty",
            JSON.stringify({
              buildNum: result.buildNum,
              name: result.name,
              image: result.image,
              rent: result.rentPrice,
              area: result.buildingSize,
              tag: result.tags,
            })
          );
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
              <tr><td>레이킹</td><td>${details.ranking || "없음"}</td></tr>
            </table>
          </body>
        </html>
      `);
      popup.document.close();
    }
  };

  const handleEdit = () => {
    console.log("수정하기 버튼 클릭");
    // 수정 로직 추가
  };

  const handleDelete = () => {
    console.log("삭제하기 버튼 클릭");
    // 삭제 로직 추가
  };

  const handleCheckCompany = () => {
    console.log("해당 회사 확인 버튼 클릭");
    // 회사 확인 로직 추가
  };

  // 데이터가 없으면 로딩 중 메시지 표시
  if (!details) return <p>로딩 중...</p>;

  return (
    <div className="build-main-content">
      <h2>{details.name} 상세 정보</h2>
      <div className="build-image-section">
        <img src={details.image || "/default-image.jpg"} alt={details.name} />
      </div>
      <div className="build-info-section">
        <div className="build-info-item">
          <label>건축명</label>
          <input type="text" value={details.name} readOnly />
        </div>
        <div className="build-info-item">
          <label>주소</label>
          <input type="text" value={`${details.address} ${details.detailedAddress}`} readOnly />
        </div>
        <div className="build-info-item">
          <label>건축 유형</label>
          <input type="text" value={details.buildingType} readOnly />
        </div>
        <div className="build-info-item">
          <label>건축년도</label>
          <input type="text" value={details.constructionDate} readOnly />
        </div>
        <div className="build-info-item">
          <label>층수</label>
          <input type="text" value={details.floors} readOnly />
        </div>
        <div className="build-info-item">
          <label>보증금</label>
          <input type="text" value={details.deposit} readOnly />
        </div>
        <div className="build-info-item">
          <label>월세</label>
          <input type="text" value={details.rentPrice} readOnly />
        </div>
        <div className="build-info-item">
          <label>건축 크기</label>
          <input type="text" value={details.buildingSize} readOnly />
        </div>
        <div className="build-info-item">
          <label>태그</label>
          <input type="text" value={details.tags || "없음"} readOnly />
        </div>
      </div>
      <div className="build-details">
        <h3>추가 정보</h3>
        <PriceCalculation rent={rent} additionalCost={additionalCost} />
      </div>
      <div className="build-additional-info">
        <button onClick={openPopup}>상세보기</button>
        <button onClick={handleEdit}>수정하기</button>
        <button onClick={handleDelete}>삭제하기</button>
        <button onClick={handleCheckCompany}>해당 회사 확인</button>
      </div>
    </div>
  );
}

export default MainContent;
