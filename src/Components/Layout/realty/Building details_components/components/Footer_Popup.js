import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../main/styles/FooterPopup.css";

function Footer_Popup() {
  const [recentProperty, setRecentProperty] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // 버튼 비활성화 상태
  const navigate = useNavigate();

  // 로컬 스토리지에서 최근 본 매물 정보를 가져오는 함수
  useEffect(() => {
    const fetchRecentProperty = () => {
      const savedProperty = JSON.parse(localStorage.getItem("recentProperty"));
      console.log("Fetched property from localStorage:", savedProperty); // 로컬 스토리지에서 가져온 값 확인

      if (savedProperty) {
        setRecentProperty(savedProperty); // 상태 업데이트
        console.log("buildNum in savedProperty:", savedProperty.buildNum); // buildNum이 있는지 확인
        // buildNum이 없으면 버튼 비활성화
        setIsButtonDisabled(!savedProperty.buildNum);
      } else {
        setRecentProperty(null); // 최근 매물이 없으면 null로 설정
        setIsButtonDisabled(true); // 매물이 없으면 버튼 비활성화
      }
    };

    // 초기화 시 로컬 스토리지 데이터 가져오기
    fetchRecentProperty();

    // 로컬 스토리지 변경 감지 (다른 탭에서 업데이트된 경우 반영)
    window.addEventListener("storage", fetchRecentProperty);

    return () => {
      window.removeEventListener("storage", fetchRecentProperty);
    };
  }, []);

  // 해당 건축물 확인 버튼 클릭 시 FP 페이지로 이동
  const handleViewProperty = () => {
    if (recentProperty && recentProperty.buildNum) {
      console.log("Navigating to:", `/realty/main/fp/${recentProperty.buildNum}`);
      navigate(`/realty/main/fp/${recentProperty.buildNum}`);
    } else {
      console.log("No buildNum found, button should be disabled");
    }
  };

  // 팝업 토글
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // 버튼 비활성화 여부 확인
  console.log("Is button disabled:", isButtonDisabled);

  return (
    <div className={`build-footer-container ${isPopupOpen ? "open" : "closed"}`}>
      <footer className="build-footer">
        <div className="build-recent-property">
          <div className="build-recent-info">
            <p>이전 건축물 간략정보</p>
            {recentProperty ? (
              <>
                <p>이름: {recentProperty.name || "정보 없음"}</p>
                {recentProperty.image && (
                  <img
                    src={recentProperty.image}
                    alt="최근 매물 사진"
                    className="build-recent-image"
                  />
                )}
                <p>월세: {recentProperty.rent || "정보 없음"}</p>
                <p>면적: {recentProperty.area || "정보 없음"}</p>
                <p>태그: {recentProperty.tag || "정보 없음"}</p>
                <p>건축물 번호: {recentProperty.buildNum || "정보 없음"}</p> {/* buildNum 출력 */}
              </>
            ) : (
              <p>최근 본 매물이 없습니다.</p>
            )}
          </div>
        </div>
        <div className="build-footer-buttons">
          <button
            className="build-footer-btn"
            onClick={handleViewProperty}
            disabled={isButtonDisabled} // 상태에 따라 버튼 활성화/비활성화
          >
            해당 건축물 확인
          </button>
        </div>
      </footer>
      <button className="build-toggle-btn" onClick={togglePopup}>
        {isPopupOpen ? "이전 매물 정보 닫기" : "이전 매물 정보 열기"}
      </button>
    </div>
  );
}

export default Footer_Popup;
