import React, { useState } from 'react';
import './ImageUploadModal.css';
import defaultImage from './Image_InputNull_Image.PNG'; // 기본 이미지 불러오기

const ImageUploadModal = ({ onClose }) => {
  const [images, setImages] = useState({
    inner: null,
    outer: null,
  });

  const handleImageChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevState) => ({
          ...prevState,
          [type]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>등록시 이미지 첨부</h2>
        <div className="image-upload-list">

          {/* 내부 이미지 */}
          <div className="image-upload-row">
            <button className="prev-btn">◀</button>
            <div className="image-info">
              <text className="InnerFrame">내부</text>
              <img 
                src={images.inner || defaultImage} 
                alt="내부 이미지" 
                className="image-preview" 
              />
              <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => handleImageChange(e, 'inner')} 
              />
            </div>
            <button className="next-btn">▶</button>
          </div>

          {/* 외부 이미지 */}
          <div className="image-upload-row">
            <button className="prev-btn">◀</button>
            <div className="image-info">
              <text className="OuterFrame">외부</text>
              <img 
                src={images.outer || defaultImage} 
                alt="외부 이미지" 
                className="image-preview" 
              />
              <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => handleImageChange(e, 'outer')} 
              />
            </div>
            <button className="next-btn">▶</button>
          </div>

        </div>

        <button className="generate-btn">첨부하기</button>
        <button className="close-btn" onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default ImageUploadModal;
