import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getHouseDetailByBuildNumber, updateHouseDetail } from '../../Building details_components/components/Build_Data';
import './Modify_building_page.css'; // 스타일

const ModifyBuildingPage = () => {
  const { buildNum } = useParams(); // URL에서 buildNum 추출
  const navigate = useNavigate(); // 페이지 이동
  const [formData, setFormData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHouseDetailByBuildNumber(buildNum);
        if (data) {
          setFormData(data);
        } else {
          setErrorMessage('해당 매물을 찾을 수 없습니다.');
        }
      } catch (error) {
        console.error('데이터 로드 실패:', error);
        setErrorMessage('데이터를 불러오는 중 문제가 발생했습니다.');
      }
    };

    if (buildNum) {
      fetchData();
    } else {
      setErrorMessage('유효하지 않은 매물 ID입니다.');
    }
  }, [buildNum]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorMessage('');
  };

  const handleSave = async () => {
    const confirmSave = window.confirm('수정 사항을 저장하시겠습니까?');
    if (confirmSave) {
      try {
        await updateHouseDetail(buildNum, formData);
        alert('수정이 완료되었습니다!');
        navigate('/realty/main'); // 저장 후 메인 페이지로 이동
      } catch (error) {
        console.error('데이터 수정 실패:', error);
        setErrorMessage('데이터 수정에 실패했습니다. 다시 시도해 주세요.');
      }
    }
  };

  if (errorMessage) {
    return (
      <div>
        <p>{errorMessage}</p>
        <button onClick={() => navigate('/main')}>메인으로 이동</button>
      </div>
    );
  }

  if (!formData) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  return (
    <div className="build-create-building-container">
      <div className="build-form-container">
        <h2>건축물 수정</h2>
        <form className="build-building-form" onSubmit={(e) => e.preventDefault()}>
          <label>매물 번호:</label>
          <input type="text" value={formData.buildNumber} readOnly />

          <label>매물명:</label>
          <input type="text" value={formData.name} readOnly />

          <label>건축물종류:</label>
          <input type="text" value={formData.buildingType} readOnly />

          <label>건축층수:</label>
          <input type="number" value={formData.floors} readOnly />

          <label>지방:</label>
          <input type="text" value={formData.prefecture} readOnly />

          <label>매매/월세:</label>
          <select 
            name="saleType" 
            value={formData.saleType} 
            onChange={handleChange}
          >
            <option value="월세">월세</option>
            <option value="매매">매매</option>
          </select>

          <label>월세:</label>
          <input 
            type="text" 
            name="rentPrice" 
            value={formData.rentPrice} 
            onChange={handleChange} 
          />

          <label>매매:</label>
          <input 
            type="text" 
            name="salePrice" 
            value={formData.salePrice} 
            onChange={handleChange} 
          />

          <label>시키킹:</label>
          <input 
            type="text" 
            name="deposit" 
            value={formData.deposit} 
            onChange={handleChange} 
          />

          <label>이전 사용처:</label>
          <input 
            type="text" 
            name="previousUse" 
            value={formData.previousUse} 
            onChange={handleChange} 
          />

          <label>담당직원 키:</label>
          <input 
            type="number" 
            name="realtyMemberKey" 
            value={formData.realtyMemberKey} 
            onChange={handleChange} 
          />

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="build-form-buttons">
            <button className="build-cancle-btn" onClick={() => navigate('/realty/main')}>돌아가기</button>
            <button className="build-save-btn" onClick={handleSave}>저장하기</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModifyBuildingPage;
