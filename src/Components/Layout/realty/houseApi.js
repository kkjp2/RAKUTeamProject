import axios from 'axios';

// API URL 설정
const API_URL = "http://localhost:8080/api/houses";

export const fetchHouses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const searchHouses = async (keyword) => {
  const response = await axios.get(`${API_URL}/search?keyword=${keyword}`);
  return response.data;
};

export const createHouse = async (house) => {
  const response = await axios.post(API_URL, house);
  return response.data;
};

export const updateHouse = async (id, house) => {
  const response = await axios.put(`${API_URL}/${id}`, house);
  return response.data;
};

export const deleteHouse = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
