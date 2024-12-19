import React, { useState } from "react";
import axios from "axios";
import ImageUploadModal from "./ImageUploadModal";
import "./Create_building_page.css";

const API_URL = "http://localhost:8080/api/houses";

const CreateBuildingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saleType, setSaleType] = useState("월세");
  const [errorMessage, setErrorMessage] = useState("");

  // 폼 상태
  const [formData, setFormData] = useState({
    name: "",
    buildingType: "",
    floors: "",
    roomType: "",
    isNew: true, // 신축 여부
    saleType: "월세",
    rentPrice: "",
    salePrice: "",
    isDuplex: false, // 단층 여부
    prefecture: "",
    address: "",
    detailedAddress: "",
    deposit: "", // 보증금
    previousUse: "", // 이전 사용처
    constructionDate: "", // 건축년월
    tags: "", // 태그
    buildingSize: "", // 건축물 크기
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
    setErrorMessage("");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = async () => {
    // 필수 필드 체크
    const requiredFields = [
      { field: "name", label: "매물명" },
      { field: "buildingType", label: "건축물종류" },
      { field: "floors", label: "건축층수" },
      { field: "roomType", label: "방 구분" },
      { field: "prefecture", label: "지방" },
      { field: "address", label: "주소" },
      { field: "detailedAddress", label: "상세주소" },
      { field: "constructionDate", label: "건축년월" },
      { field: "comments", label: "담당직원 코멘트" },
    ];

    for (const field of requiredFields) {
      if (!formData[field.field]) {
        alert(`필수 입력 항목인 '${field.label}'을(를) 입력해주세요.`);
        return;
      }
    }

    if (saleType === "월세" && formData.salePrice !== "") {
      setErrorMessage("월세가 선택된 경우 매매 값은 비워 두어야 합니다.");
      return;
    } else if (saleType === "매매" && formData.rentPrice !== "") {
      setErrorMessage("매매가 선택된 경우 월세 값은 비워 두어야 합니다.");
      return;
    } else if (
      saleType === "월세 + 매매" &&
      (formData.rentPrice === "" || formData.salePrice === "")
    ) {
      setErrorMessage("월세 + 매매가 선택된 경우 둘 다 값을 입력해야 합니다.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}`, formData);
      if (response.status === 200 || response.status === 201) {
        alert("매물이 성공적으로 생성되었습니다.");
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
          deposit: "",
          previousUse: "",
          constructionDate: "",
          tags: "",
          buildingSize: "",
          comments: "",
        });
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("데이터 전송 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="create-building-container">
      <div className="form-container">
        <form className="building-form" onSubmit={(e) => e.preventDefault()}>
          {/* 매물명 */}
          <label>매물명: <span>*필수</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {/* 건축물 종류 */}
          <label>건축물종류: <span>*필수</span></label>
          <input
            type="text"
            name="buildingType"
            value={formData.buildingType}
            onChange={handleInputChange}
            required
          />
          {/* 층수 */}
          <label>건축층수: <span>*필수</span></label>
          <input
            type="number"
            name="floors"
            value={formData.floors}
            onChange={handleInputChange}
            required
          />
          {/* 방 구분 */}
          <label>방 구분: <span>*필수</span></label>
          <input
            type="text"
            name="roomType"
            value={formData.roomType}
            onChange={handleInputChange}
            required
          />
          {/* 구/신축 */}
          <label>신축 여부: <span>*필수</span></label>
          <div>
            <input
              type="radio"
              name="isNew"
              value={true}
              checked={formData.isNew === true}
              onChange={() => setFormData({ ...formData, isNew: true })}
            /> 신축
            <input
              type="radio"
              name="isNew"
              value={false}
              checked={formData.isNew === false}
              onChange={() => setFormData({ ...formData, isNew: false })}
            /> 구축
          </div>
          {/* 단층/복층 */}
          <label>단층/복층: <span>*필수</span></label>
          <div>
            <input
              type="radio"
              name="isDuplex"
              value={false}
              checked={formData.isDuplex === false}
              onChange={() => setFormData({ ...formData, isDuplex: false })}
            /> 단층
            <input
              type="radio"
              name="isDuplex"
              value={true}
              checked={formData.isDuplex === true}
              onChange={() => setFormData({ ...formData, isDuplex: true })}
            /> 복층
          </div>
          {/* 매매 타입 */}
          <label>월세/매매: <span>*필수</span></label>
          <div>
            <input
              type="radio"
              name="saleType"
              value="월세"
              checked={saleType === "월세"}
              onChange={handleSaleTypeChange}
            /> 월세
            <input
              type="radio"
              name="saleType"
              value="매매"
              checked={saleType === "매매"}
              onChange={handleSaleTypeChange}
            /> 매매
            <input
              type="radio"
              name="saleType"
              value="월세 + 매매"
              checked={saleType === "월세 + 매매"}
              onChange={handleSaleTypeChange}
            /> 월세 + 매매
          </div>
          {/* 월세 값 */}
          <label>월세: <span>선택 사항</span></label>
          <input
            type="text"
            name="rentPrice"
            value={formData.rentPrice}
            onChange={handleInputChange}
            disabled={saleType === "매매"}
          />
          {/* 매매 값 */}
          <label>매매: <span>선택 사항</span></label>
          <input
            type="text"
            name="salePrice"
            value={formData.salePrice}
            onChange={handleInputChange}
            disabled={saleType === "월세"}
          />
          {/* 지방 */}
          <label>지방: <span>*필수</span></label>
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
          {/* 주소 */}
          <label>주소: <span>*필수</span></label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          {/* 상세 주소 */}
          <label>상세주소: <span>*필수</span></label>
          <input
            type="text"
            name="detailedAddress"
            value={formData.detailedAddress}
            onChange={handleInputChange}
            required
          />
          {/* 건축년월 */}
          <label>건축년월: <span>*필수</span></label>
          <input
            type="date"
            name="constructionDate"
            value={formData.constructionDate}
            onChange={handleInputChange}
            required
          />
          {/* 보증금 */}
          <label>보증금: <span>선택 사항</span></label>
          <input
            type="text"
            name="deposit"
            value={formData.deposit}
            onChange={handleInputChange}
          />
          {/* 이전 사용처 */}
          <label>이전 사용처: <span>선택 사항</span></label>
          <input
            type="text"
            name="previousUse"
            value={formData.previousUse}
            onChange={handleInputChange}
          />
          {/* 건축물 크기 */}
          <label>건축물 크기: <span>*필수</span></label>
          <input
            type="text"
            name="buildingSize"
            value={formData.buildingSize}
            onChange={handleInputChange}
            required
          />
          {/* 태그 */}
          <label>태그: <span>선택 사항</span></label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
          />
          {/* 담당 직원 코멘트 */}
          <label>담당직원 코멘트: <span>*필수</span></label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            required
          ></textarea>
        </form>

        {/* 에러 메시지 */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* 버튼 */}
        <div className="form-buttons">
          <button className="cancel-btn">돌아가기</button>
          <button className="save-btn" onClick={handleSave}>
            생성하기
          </button>
          <button className="upload-image-btn" onClick={handleOpenModal}>
            이미지 업로드
          </button>
        </div>
      </div>

      {/* 이미지 업로드 모달 */}
      {isModalOpen && <ImageUploadModal onClose={handleCloseModal} />}
    </div>
  );
};

export default CreateBuildingPage;
