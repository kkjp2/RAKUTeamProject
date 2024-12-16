import React, { useState } from "react";
import axios from "axios"; // Spring Boot API 호출
import ImageUploadModal from "./ImageUploadModal"; // 이미지 모달 컴포넌트
import "./Create_building_page.css"; // 스타일

const API_URL = "http://localhost:8080/api/houses"; // Spring Boot 서버의 엔드포인트

const CreateBuildingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saleType, setSaleType] = useState("월세"); // 기본값은 '월세'
  const [rentValue, setRentValue] = useState(""); // 월세 값 (빈 값으로 초기화)
  const [saleValue, setSaleValue] = useState(""); // 매매 값 (빈 값으로 초기화)
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태
  const [prefecture, setPrefecture] = useState(""); // 도도부현 상태

  // 폼 상태
  const [formData, setFormData] = useState({
    name: "", // 매물명
    buildingType: "", // 건축물 종류
    floors: "", // 건축 층수
    roomType: "", // 방 구분
    isNew: true, // 신축 여부
    saleType: "월세", // 매매 타입
    rentPrice: "", // 월세 값
    salePrice: "", // 매매 값
    isDuplex: false, // 단층 여부
    prefecture: "", // 지방
    address: "", // 주소
    detailedAddress: "", // 상세 주소
    ranking: "", // 레이팅
    deposit: "", // 보증금
    previousUse: "", // 이전 사용처
    constructionDate: "", // 건축년월
    tags: "", // 태그
    buildingSize: "", // 건축물 크기
    realtyMemberKey: "", // 담당 직원 키
    comments: "", // 담당자 코멘트
  });

  const prefectureOptions = [
    "홋카이도",
    "도호쿠",
    "간토",
    "주부",
    "긴키",
    "주고쿠",
    "시코쿠",
    "큐슈",
    "오키나와",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(""); // 입력 시 에러 메시지 초기화
  };

  const handleSaleTypeChange = (e) => {
    const saleType = e.target.value;
    setSaleType(saleType);
    setFormData({
      ...formData,
      saleType: saleType,
      rentPrice: saleType === "매매" ? "" : formData.rentPrice,
      salePrice: saleType === "월세" ? "" : formData.salePrice,
    });
    setErrorMessage(""); // 라디오 버튼이 변경될 때 에러 메시지 초기화
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = async () => {
    // 유효성 검사
    if (saleType === "월세" && saleValue !== "") {
      setErrorMessage("월세가 선택된 경우 매매 값은 비워 두어야 합니다.");
    } else if (saleType === "매매" && rentValue !== "") {
      setErrorMessage("매매가 선택된 경우 월세 값은 비워 두어야 합니다.");
    } else if (
      saleType === "월세 + 매매" &&
      (rentValue === "" || saleValue === "")
    ) {
      setErrorMessage("월세 + 매매가 선택된 경우 둘 다 값을 입력해야 합니다.");
    } else {
      setErrorMessage(""); // 에러 메시지 초기화

      // Spring Boot API로 데이터 전송
      try {
        const response = await axios.post(`${API_URL}`, formData);
        if (response.status === 200 || response.status === 201) {
          console.log("Form submitted successfully:", response.data);
          alert("매물이 성공적으로 생성되었습니다.");
          // 폼 초기화
          setFormData({
            name: "",
            buildingType: "",
            floors: "",
            roomType: "",
            isNew: true,
            saleType: "월세",
            rentPrice: "",
            salePrice: "",
            isDuplex: false,
            prefecture: "",
            address: "",
            detailedAddress: "",
            ranking: "",
            deposit: "",
            previousUse: "",
            constructionDate: "",
            tags: "",
            buildingSize: "",
            realtyMemberKey: "",
            comments: "",
          });
        }
      } catch (error) {
        alert(error)
        console.error("Error submitting form:", error);
        setErrorMessage("데이터 전송 중 문제가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <div className="create-building-container">
      <div className="form-container">
        <form className="building-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            매물명: <span>*필수</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="예: 백도 레지던스"
            required
          />

          <label>
            건축물종류: <span>*필수</span>
          </label>
          <input
            type="text"
            name="buildingType"
            value={formData.buildingType}
            onChange={handleInputChange}
            placeholder="예: 철근 콘크리트"
            required
          />

          <label>
            건축층수: <span>*필수</span>
          </label>
          <input
            type="number"
            name="floors"
            value={formData.floors}
            onChange={handleInputChange}
            placeholder="예: 30"
            required
          />

          <label>
            방 구분: <span>*필수</span>
          </label>
          <input
            type="text"
            name="roomType"
            value={formData.roomType}
            onChange={handleInputChange}
            placeholder="예: 3LDK"
            required
          />

          <label>
            월세/매매: <span>*필수</span>
          </label>
          <div>
            <input
              type="radio"
              name="saleType"
              value="월세"
              checked={saleType === "월세"}
              onChange={handleSaleTypeChange}
            />{" "}
            월세
            <input
              type="radio"
              name="saleType"
              value="매매"
              checked={saleType === "매매"}
              onChange={handleSaleTypeChange}
            />{" "}
            매매
            <input
              type="radio"
              name="saleType"
              value="월세 + 매매"
              checked={saleType === "월세 + 매매"}
              onChange={handleSaleTypeChange}
            />{" "}
            월세 + 매매
          </div>

          <label>
            월세: <span>선택 사항</span>
          </label>
          <input
            type="text"
            name="rentPrice"
            value={formData.rentPrice}
            onChange={handleInputChange}
            placeholder="예: 150,000 엔"
            disabled={saleType === "매매"}
          />

          <label>
            매매: <span>선택 사항</span>
          </label>
          <input
            type="text"
            name="salePrice"
            value={formData.salePrice}
            onChange={handleInputChange}
            placeholder="예: 10,000,000 엔"
            disabled={saleType === "월세"}
          />

          <label>
            지방: <span>*필수</span>
          </label>
          <select
            name="prefecture"
            value={formData.prefecture}
            onChange={handleInputChange}
            required
          >
            <option value="">지방 선택</option>
            {prefectureOptions.map((pref, index) => (
              <option key={index} value={pref}>
                {pref}
              </option>
            ))}
          </select>

          <label>
            주소: <span>*필수</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="예: 후쿠오카시"
            required
          />

          <label>
            상세주소: <span>*필수</span>
          </label>
          <input
            type="text"
            name="detailedAddress"
            value={formData.detailedAddress}
            onChange={handleInputChange}
            placeholder="예: 모모치하마 2-3-26"
            required
          />

          <label>
            건축년월: <span>*필수</span>
          </label>
          <input
            type="date"
            name="constructionDate"
            value={formData.constructionDate}
            onChange={handleInputChange}
            required
          />

          <label>
            태그: <span>선택 사항</span>
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            placeholder="예: 바닷가 전망, 접근성 좋음"
          />

          <label>
            담당직원 코멘트: <span>*필수</span>
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            placeholder="예: 바닷가 인근에 위치한 건물로, 조용하고 넓은 공간이 특징입니다."
            required
          ></textarea>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="form-buttons">
          <button className="cancel-btn">돌아가기</button>
          <button className="save-btn" onClick={handleSave}>
            생성하기
          </button>
          {/* 이미지 업로드 모달을 여는 버튼 추가 */}
          <button className="upload-image-btn" onClick={handleOpenModal}>
            이미지 업로드
          </button>
        </div>
      </div>

      {isModalOpen && <ImageUploadModal onClose={handleCloseModal} />}
    </div>
  );
};

export default CreateBuildingPage;
