import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './WritingPage.css';

const WritingPage = () => {
  const { category } = useParams(); // URL에서 카테고리 파라미터를 받아옴
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imgFile, setImgFile] = useState(null);
  const imgRef = useRef();

  // 이미지 파일을 선택하면 상태에 파일을 저장
  const saveImg = () => {
    const file = imgRef.current.files[0];
    setImgFile(file);
  };

  // 글 등록 처리 함수
  const handleSubmit = async () => {
    try {
      if (!title || !content) {
        alert('제목과 내용을 모두 입력해주세요!');
        return;
      }

      // JWT 토큰을 localStorage에서 가져오기
      const token = localStorage.getItem('refreshToken');
      if (!token) {
        alert('로그인이 필요합니다.');
        return;
      }

      // FormData 객체로 데이터를 서버로 전송
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('category', category); // 카테고리 값 추가
      if (imgFile) formData.append('image', imgFile);

      const response = await axios.post(
        `http://localhost:8080/board`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`, // JWT 토큰을 Authorization 헤더에 추가
          },
        }
      );

      console.log('글 등록 완료:', response.data);
      alert('글이 성공적으로 등록되었습니다!');
      setTitle('');
      setContent('');
      setImgFile(null);
      if (imgRef.current) imgRef.current.value = '';
    } catch (error) {
      console.error('등록 실패:', error.response?.data || error.message);
      alert('글 등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="writing-container">
      <div className="writing-form">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          className="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="내용을 입력하세요"
          className="content-input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="button-group">
          <input
            type="file"
            accept="image/*"
            id="contentImg"
            onChange={saveImg}
            ref={imgRef}
          />
          <button className="submit-btn" onClick={handleSubmit}>
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritingPage;
