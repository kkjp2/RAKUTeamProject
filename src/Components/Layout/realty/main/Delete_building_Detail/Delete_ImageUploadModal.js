import React, { useState } from 'react';
import './Delete_ImageUploadModal.css';
import defaultImage from './Image_InputNull_Image.PNG'; // 기본 이미지 불러오기

const DeleteImageUploadModal = ({ onClose }) => {
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

  const handleDeleteImage = (type) => {
    setImages((prevImages) => ({
      ...prevImages,
      [type]: null, // 해당 이미지 타입의 값을 null로 설정하여 이미지 삭제
    }));
  };

  return (
    <div className="build-modal-overlay">
      <div className="build-modal-content">
        <h2>선택 이미지 첨부 및 수정</h2>
        <div className="build-image-upload-list">

          {/* 내부 이미지 */}
          <div className="build-image-upload-row">
            <button className="build-prev-btn">◀</button>
            <div className="build-image-info">
              <text className="build-InnerFrame">내부</text>
              <img 
                src={images.inner || defaultImage} 
                alt="내부 이미지" 
                className="build-image-preview" 
              />
              <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => handleImageChange(e, 'inner')} 
              />
              <button className="build-delete-btn" onClick={() => handleDeleteImage('inner')}>삭제</button>
            </div>
            <button className="build-next-btn">▶</button>
          </div>

          {/* 외부 이미지 */}
          <div className="build-image-upload-row">
            <button className="build-prev-btn">◀</button>
            <div className="build-image-info">
              <text className="build-OuterFrame">외부</text>
              <img 
                src={images.outer || defaultImage} 
                alt="외부 이미지" 
                className="build-image-preview" 
              />
              <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => handleImageChange(e, 'outer')} 
              />
              <button className="build-delete-btn" onClick={() => handleDeleteImage('outer')}>삭제</button>
            </div>
            <button className="build-next-btn">▶</button>
          </div>

        </div>

        <button className="build-generate-btn">저장하기</button>
        <button className="build-close-btn" onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default DeleteImageUploadModal;
