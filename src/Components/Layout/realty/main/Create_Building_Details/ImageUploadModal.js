import React, { useState } from "react";
import "./ImageUploadModal.css";
import defaultImage from './Image_InputNull_Image.PNG';

const ImageUploadModal = ({ isOpen, onClose, onUpload }) => {
  const [images, setImages] = useState({
    inner: null,
    outer: null,
  });

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevState) => ({ ...prevState, [type]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAttach = () => {
    onUpload(images);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>이미지 업로드</h3>
        <div>
          <label>내부 이미지:</label>
          <img src={images.inner || defaultImage} alt="내부 이미지" />
          <input type="file" onChange={(e) => handleImageChange(e, "inner")} />
        </div>
        <div>
          <label>외부 이미지:</label>
          <img src={images.outer || defaultImage} alt="외부 이미지" />
          <input type="file" onChange={(e) => handleImageChange(e, "outer")} />
        </div>
        <button onClick={handleAttach}>저장</button>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default ImageUploadModal;
