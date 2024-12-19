import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getHouseDetailByBuildNumber, updateHouseDetail } from '../../Building details_components/components/Build_Data';
import './Modify_building_page.css';

const ModifyBuildingPage = () => {
  const { buildNum } = useParams(); // URL에서 buildNum 추출
  const navigate = useNavigate(); // 페이지 이동에 사용
  const [formData, setFormData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

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

  useEffect(() => {
    console.log('buildNum:', buildNum); // 디버깅용
    if (!buildNum) {
      setErrorMessage('매물 ID가 유효하지 않습니다.');
      return;
    }

    const loadData = async () => {
      try {
        const data = await getHouseDetailByBuildNumber(buildNum);
        if (data) {
          setFormData({
            buildNumber: data.buildNumber,
            name: data.name || '',
            buildingType: data.buildingType || '',
            floors: data.floors || 0,
            roomType: data.roomType || '',
            saleType: data.saleType || '월세',
            rentPrice: data.rentPrice || '',
            salePrice: data.salePrice || '',
            isDuplex: data.isDuplex || false,
            prefecture: data.prefecture || '',
            deposit: data.deposit || '',
            previousUse: data.previousUse || '',
            tags: data.tags || '',
            realtyMemberKey: data.realtyMemberKey || '',
          });
        } else {
          setErrorMessage('해당 매물을 찾을 수 없습니다.');
        }
      } catch (error) {
        console.error('데이터 로드 실패:', error);
        setErrorMessage('데이터를 가져오는 중 문제가 발생했습니다.');
      }
    };

    loadData();
  }, [buildNum]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
    setErrorMessage('');
  };

  const handleSave = async () => {
    if (!formData) {
      setErrorMessage('데이터를 로드 중입니다. 잠시만 기다려 주세요.');
      return;
    }

    try {
      const response = await updateHouseDetail(buildNum, formData);
      if (response) {
        alert('수정이 완료되었습니다!');
        navigate('/realty/main'); // 수정 후 메인 페이지로 이동
      }
    } catch (error) {
      console.error('데이터 수정 실패:', error);
      setErrorMessage('데이터 수정에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  if (!buildNum) {
    return (
      <div>
        <p>매물 ID가 제공되지 않았습니다. URL을 확인하세요.</p>
        <button onClick={() => navigate('/realty/main')}>메인으로 이동</button>
      </div>
    );
  }

  if (!formData) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  return (
    <div className="create-building-container">
      <div className="form-container">
        <form className="building-form" onSubmit={(e) => e.preventDefault()}>
          <label>매물명: <span>*필수</span></label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />

          <label>건축물종류: <span>*필수</span></label>
          <input 
            type="text" 
            name="buildingType" 
            value={formData.buildingType} 
            onChange={handleChange} 
            required 
          />

          <label>건축층수: <span>*필수</span></label>
          <input 
            type="number" 
            name="floors" 
            value={formData.floors} 
            onChange={handleChange} 
            required 
          />

          <label>지방: <span>*필수</span></label>
          <select 
            name="prefecture" 
            value={formData.prefecture} 
            onChange={handleChange} 
            required
          >
            <option value="">지방 선택</option>
            {prefectureOptions.map((pref, index) => (
              <option key={index} value={pref}>{pref}</option>
            ))}
          </select>

          <label>태그: <span>선택 사항</span></label>
          <input 
            type="text" 
            name="tags" 
            value={formData.tags} 
            onChange={handleChange} 
          />

          <label>담당직원 키: <span>*필수</span></label>
          <input 
            type="number" 
            name="realtyMemberKey" 
            value={formData.realtyMemberKey} 
            onChange={handleChange} 
            required 
          />

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="form-buttons">
            <button className="cancle-btn" onClick={() => navigate('/realty/main')}>돌아가기</button>
            <button className="save-btn" onClick={handleSave}>수정하기</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModifyBuildingPage;
