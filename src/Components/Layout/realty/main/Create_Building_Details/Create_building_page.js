import React, { useState } from "react";
import axios from "axios";
import ImageUploadModal from "./ImageUploadModal";
import './Create_building_page.css';

const API_URL = "http://localhost:8080/api/houses";

const CreateBuildingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saleType, setSaleType] = useState("월세");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
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
    setErrorMessage("");
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
    <div className="Cbuild-create-building-container">
      <div className="Cbuild-form-container">
        <form
          className="Cbuild-building-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <label>매물명: <span>*필수</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label>건축물종류: <span>*필수</span></label>
          <input
            type="text"
            name="buildingType"
            value={formData.buildingType}
            onChange={handleInputChange}
            required
          />
          <label>건축층수: <span>*필수</span></label>
          <input
            type="number"
            name="floors"
            value={formData.floors}
            onChange={handleInputChange}
            required
          />
          <label>방 구분: <span>*필수</span></label>
          <input
            type="text"
            name="roomType"
            value={formData.roomType}
            onChange={handleInputChange}
            required
          />
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
          <label>월세</label>
          <input
            type="number"
            name="rentPrice"
            value={formData.rentPrice}
            onChange={handleInputChange}
          />
          <label>매매가</label>
          <input
            type="number"
            name="salePrice"
            value={formData.salePrice}
            onChange={handleInputChange}
          />
          <label>지방</label>
          <select
            name="prefecture"
            value={formData.prefecture}
            onChange={handleInputChange}
            required
          >
            <option value="">선택하세요</option>
            {prefectureOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <label>주소</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />

          <label>상세주소</label>
          <input
            type="text"
            name="detailedAddress"
            value={formData.detailedAddress}
            onChange={handleInputChange}
            required
          />
          <label>건축년월</label>
          <input
            type="month"
            name="constructionDate"
            value={formData.constructionDate}
            onChange={handleInputChange}
            required
          />
          <label>담당자 코멘트</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            required
          />

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <div className="Cbuild-form-buttons">
            <button
              type="button"
              className="Cbuild-save-btn"
              onClick={handleSave}
            >
              저장
            </button>
            <button
              type="button"
              className="Cbuild-cancle-btn"
              onClick={() => setFormData({
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
              })}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBuildingPage;
