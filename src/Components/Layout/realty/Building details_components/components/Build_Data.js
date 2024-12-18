import axios from "axios";

const API_URL = "http://localhost:8080/api/houses";

// 모든 데이터 조회
export const getAllHouseDetails = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("전체 데이터 조회 실패:", error);
    return [];
  }
};

// B_buildNumber로 특정 데이터 조회
export const getHouseDetailByBuildNumber = async (buildNumber) => {
  try {
    const response = await axios.get(`${API_URL}/${buildNumber}`);
    return response.data;
  } catch (error) {
    console.error(`BuildNumber ${buildNumber} 데이터 조회 실패:`, error);
    return null;
  }
};

// 데이터 추가
export const createHouseDetail = async (newData) => {
  try {
    const response = await axios.post(API_URL, newData);
    return response.data;
  } catch (error) {
    console.error("데이터 추가 실패:", error);
    return null;
  }
};

// 데이터 업데이트
export const updateHouseDetail = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("데이터 업데이트 실패:", error);
    return null;
  }
};

// 데이터 삭제
export const deleteHouseDetail = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("데이터 삭제 실패:", error);
  }
};

// loadHouseDetails 함수 추가 (getAllHouseDetails 호출)
export const loadHouseDetails = async () => {
  return await getAllHouseDetails();
};
