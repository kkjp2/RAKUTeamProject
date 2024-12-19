import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getHouseDetailByBuildNumber, deleteHouseDetail } from '../../Building details_components/components/Build_Data';
import '../Delete_building_Detail/Delete_building_page.css'; // 스타일

const DeleteBuildingPage = () => {
  const { buildNum } = useParams(); // URL에서 buildNum 추출
  const navigate = useNavigate(); // 페이지 이동
  const [buildingData, setBuildingData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHouseDetailByBuildNumber(buildNum);
        if (data) {
          setBuildingData(data);
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

  const handleDelete = async () => {
    const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');
    if (confirmDelete) {
      try {
        await deleteHouseDetail(buildNum);
        alert('삭제가 완료되었습니다!');
        navigate('/realty/main'); // 삭제 후 메인 페이지로 이동
      } catch (error) {
        console.error('데이터 삭제 실패:', error);
        setErrorMessage('데이터 삭제에 실패했습니다. 다시 시도해 주세요.');
      }
    }
  };

  if (errorMessage) {
    return (
      <div>
        <p>{errorMessage}</p>
        <button onClick={() => navigate('/realty/main')}>메인으로 이동</button>
      </div>
    );
  }

  if (!buildingData) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  return (
    <div className="build-create-building-container">
      <div className="build-form-container">
        <h2>건축물 상세 정보</h2>
        <form className="build-building-form" onSubmit={(e) => e.preventDefault()}>
          <label>매물 번호:</label>
          <input type="text" value={buildingData.buildNumber} readOnly />

          <label>매물명:</label>
          <input type="text" value={buildingData.name} readOnly />

          <label>건축물종류:</label>
          <input type="text" value={buildingData.buildingType} readOnly />

          <label>건축층수:</label>
          <input type="number" value={buildingData.floors} readOnly />

          <label>방 구분:</label>
          <input type="text" value={buildingData.roomType} readOnly />

          <label>구/신축:</label>
          <input type="text" value={buildingData.isNew ? '신축' : '구축'} readOnly />

          <label>매매/월세:</label>
          <input type="text" value={buildingData.saleType} readOnly />

          <label>월세:</label>
          <input type="text" value={buildingData.rentPrice || '-'} readOnly />

          <label>매매:</label>
          <input type="text" value={buildingData.salePrice || '-'} readOnly />

          <label>복/단층:</label>
          <input type="text" value={buildingData.isDuplex ? '복층' : '단층'} readOnly />

          <label>지방:</label>
          <input type="text" value={buildingData.prefecture} readOnly />

          <label>주소:</label>
          <input type="text" value={buildingData.address} readOnly />

          <label>상세주소:</label>
          <input type="text" value={buildingData.detailedAddress} readOnly />

          <label>레이팅:</label>
          <input type="text" value={buildingData.ranking || '-'} readOnly />

          <label>시키킹:</label>
          <input type="text" value={buildingData.deposit || '-'} readOnly />

          <label>이전 사용처:</label>
          <input type="text" value={buildingData.previousUse || '-'} readOnly />

          <label>건축 연월:</label>
          <input type="text" value={buildingData.constructionDate} readOnly />

          <label>태그:</label>
          <input type="text" value={buildingData.tags || '-'} readOnly />

          <label>건축물 크기:</label>
          <input type="text" value={buildingData.buildingSize} readOnly />

          <label>담당직원 키:</label>
          <input type="number" value={buildingData.realtyMemberKey} readOnly />

          {/* 에러 메시지 표시 */}
          {errorMessage && <p className="build-error-message">{errorMessage}</p>}

          <div className="build-form-buttons">
            <button className="build-cancle-btn" onClick={() => navigate('/realty/main')}>돌아가기</button>
            <button className="build-delete-btn" onClick={handleDelete}>삭제하기</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteBuildingPage;
