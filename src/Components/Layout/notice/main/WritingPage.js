// import React, { useState,useRef } from 'react';
// import './WritingPage.css';
// import axios from 'axios';

// const WritingPage = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [imgFile, setImgFile]=useState("");
//   const imgRef=useRef();
//   const saveImg=()=>{
//     const file=imgRef.current.files[0];
//     const reader= new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend=()=>{
//       setImgFile(reader.result);
//     }
//   }

//   const handleSave = () => {
//     // 임시 저장 기능 (콘솔로 출력 또는 로컬 스토리지에 저장 가능)
//     console.log("임시 저장: ", { title, content });
//   };

//   const handleSubmit = () => {
//     // 등록 기능 (실제로 서버로 전송하거나 추가 작업 처리)
//     console.log("등록 완료: ", { title, content });
//   };
//   async function submit(id, pwd) {
//     try {
//       const response = await axios.post('http://localhost:8080/board/', {
//         id: id,
//         pwd: pwd,
//       });
//       // 성공 시
//       console.log(response.data); // 응답 데이터 확인
//       window.sessionStorage.setItem('accesstoken', response.data.accessToken);
//       window.sessionStorage.setItem('refreshtoken', response.data.refreshToken);
//       document.location.href = "/main";
//     } catch (error) {
//       // 실패 시
//       console.error(error);
//       window.alert("로그인 정보가 틀립니다.");
//     }
//   };  

//   return (
//     <div className="writing-container">
      
      
//       <div className="writing-form">
//         <input 
//           type="text" 
//           placeholder="대충 제목 입니다" 
//           className="title-input"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)} 
//         />
//         <textarea 
//           placeholder="대충 내용" 
//           className="content-input"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}          
//         />
        


     
//         <div className="button-group">
//         <input type="file"
//         accept='image/*'
//         id="contentImg"
//         onChange={saveImg}
//         ref={imgRef}/>
//           <button className="save-btn" onClick={handleSave}>임시 저장</button>
//           <button className="submit-btn" onClick={handleSubmit}>등록</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WritingPage;

import React, { useState, useRef } from 'react';
import axios from 'axios'; // axios import
import './WritingPage.css';

const WritingPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const[category,setCategory]=useState('');
  const [imgFile, setImgFile] = useState(null);  // 이미지 파일을 상태로 저장

  const imgRef = useRef();

  // 이미지 파일 선택 후 상태에 저장
  const saveImg = () => {
    const file = imgRef.current.files[0];
    setImgFile(file);
  };

  // 글 등록 처리 함수
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('category',category);
      if (imgFile) formData.append('image', imgFile);  // 이미지가 있으면 formData에 추가

      // axios로 서버에 POST 요청
      const response = await axios.post('http://localhost:8080/board', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('글 등록 완료:', response.data); // 서버 응답 출력
      // 성공 후 추가 동작 (예: 페이지 리디렉션, 메시지 표시 등)
    } catch (error) {
      console.error('등록 실패:', error); // 에러 출력
    }
  };

  return (
    <div className="writing-container">
      <div className="writing-form">
        <input
          type="text"
          placeholder="대충 제목 입니다"
          className="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}  // 제목 변경
        />
    
        <textarea
          placeholder="대충 내용"
          className="content-input"
          value={content}
          onChange={(e) => setContent(e.target.value)}  // 내용 변경
        />
        <div className="button-group">
          <input
            type="file"
            accept="image/*"
            id="contentImg"
            onChange={saveImg}  // 이미지 파일 선택 시 saveImg 호출
            ref={imgRef}
          />
          <button className="submit-btn" onClick={handleSubmit}>등록</button>
        </div>
      </div>
    </div>
  );
};

export default WritingPage;