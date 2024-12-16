import React, { useState } from 'react';
import ImageUploadModal from './Modify_ImageUploadModal'; // 이미지 모달 컴포넌트
import './Modify_building_page.css'; // 스타일

const ModifyBuildingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saleType, setSaleType] = useState('월세'); // 기본값은 '월세'
  const [rentValue, setRentValue] = useState('150000 엔'); // 월세 값
  const [saleValue, setSaleValue] = useState(''); // 매매 값
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태
  const [prefecture, setPrefecture] = useState(''); // 도도부현 상태
  const prefectureOptions = [ 
    '홋카이도',
     '도호쿠',
     '간토',
     '주부',
     '긴키',
     '주고쿠',
     '시코쿠',
     '큐슈',
     '오키나와',
  ];
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaleTypeChange = (e) => {
    setSaleType(e.target.value);
    setErrorMessage(''); // 라디오 버튼이 변경될 때 에러 메시지 초기화
  };

  const handleSave = () => {
    // 라디오 버튼과 값에 따른 유효성 검사
    if (saleType === '월세' && saleValue !== '') {
      setErrorMessage('월세가 선택된 경우 매매 값은 비워 두어야 합니다.');
    } else if (saleType === '매매' && rentValue !== '') {
      setErrorMessage('매매가 선택된 경우 월세 값은 비워 두어야 합니다.');
    } else if (saleType === '월세 + 매매' && (rentValue === '' || saleValue === '')) {
      setErrorMessage('월세 + 매매가 선택된 경우 둘 다 값을 입력해야 합니다.');
    } else {
      setErrorMessage(''); // 에러 메시지 초기화
      // 저장 처리 로직을 여기에 추가
      console.log('Form submitted successfully.');
    }
  };

  return (
    <div className="create-building-container">
      {/* 중앙 폼 */}
      <div className="form-container">
        <form className="building-form" onSubmit={(e) => e.preventDefault()}>
          <label>매물명: <span>*필수</span></label>
          <input type="text" defaultValue="百道レジダンス" required />

          <label>건축물종류: <span>*필수</span></label>
          <input type="text" defaultValue="철근 콘크리트" required />

          <label>건축층수: <span>*필수</span></label>
          <input type="number" defaultValue={30} required />

          <label>방 구분: <span>*필수</span></label>
          <input type="text" defaultValue="3LDK" required />

          <label>구/신축: <span>*필수</span></label>
          <div>
            <input type="radio" name="buildType" value="구축" defaultChecked /> 구축
            <input type="radio" name="buildType" value="신축" /> 신축
          </div>

          <label>월세/매매: <span>*필수</span></label>
          <div>
            <input 
              type="radio" 
              name="saleType" 
              value="월세" 
              checked={saleType === '월세'} 
              onChange={handleSaleTypeChange} 
            /> 월세
            <input 
              type="radio" 
              name="saleType" 
              value="매매" 
              checked={saleType === '매매'} 
              onChange={handleSaleTypeChange} 
            /> 매매
            <input 
              type="radio" 
              name="saleType" 
              value="월세 + 매매" 
              checked={saleType === '월세 + 매매'} 
              onChange={handleSaleTypeChange} 
            /> 월세 + 매매
          </div>

          {/* 월세 입력 필드 */}
          <label>월세: <span>선택 사항</span></label>
          <input 
            type="text" 
            value={rentValue} 
            onChange={(e) => setRentValue(e.target.value)} 
            disabled={saleType === '매매'} // '매매'가 선택되면 비활성화
          />

          {/* 매매 입력 필드 */}
          <label>매매: <span>선택 사항</span></label>
          <input 
            type="text" 
            value={saleValue} 
            onChange={(e) => setSaleValue(e.target.value)} 
            disabled={saleType === '월세'} // '월세'가 선택되면 비활성화
          />

          <label>복/단층: <span>*필수</span></label>
          <div>
            <input type="radio" name="buildfloor" defaultChecked /> 복층
            <input type="radio" name="buildfloor" /> 단층
          </div>
          <label>지방: <span>*필수</span></label>
          <select value={prefecture} onChange={(e) => setPrefecture(e.target.value)} required>
            <option value="">지방 선택</option>
            {prefectureOptions.map((pref, index) => (
              <option key={index} value={pref}>{pref}</option>
            ))}
          </select>

          <label>레이킹: <span>선택 사항</span></label>
          <input type="text" defaultValue="" />

          <label>시키킹: <span>선택 사항</span></label>
          <input type="text" defaultValue="100,000 엔" />

          <label>주소: <span>*필수</span></label>
          <input type="text" defaultValue="후쿠오카시" required />

          <label>상세주소: <span>*필수</span></label>
          <input type="text" defaultValue="모모치하마 2-3-26" required />

          <label>이전사용처: <span>선택 사항</span></label>
          <input type="text" defaultValue="" />

          <label>건축년월: <span>*필수</span></label>
          <input type="date" defaultValue="2024-07-01" required />

          <label>태그: <span>선택 사항</span></label>
          <input type="text" defaultValue="바닷가 전망, 접근성 좋음" />

          <label>담당직원: <span>*필수</span></label>
          <input type="text" defaultValue="오오하시 유키" required />

          <label>담당직원 코멘트: <span>*필수</span></label>
          <textarea defaultValue="바닷가 인근에 위치한 건물로, 조용하고 넓은 공간이 특징입니다." required></textarea>

          <label>사진: </label>
          <button type="button" onClick={handleOpenModal} className="image-upload-btn">
            이미지 추가 및 수정
          </button>

          <label>건축물 크기: <span>*필수</span></label>
          <input type="text" defaultValue="250㎡" required />
        </form>

        {/* 에러 메시지 표시 */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* 하단 버튼 */}
        <div className="form-buttons">
          <button className="cancle-btn">돌아가기</button>
          <button className="save-btn" onClick={handleSave}>수정하기</button>
        </div>
      </div>

      {/* 오른쪽 이미지 모달 */}
      <div className="image-modal-container">
        {isModalOpen && <ImageUploadModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default ModifyBuildingPage;
