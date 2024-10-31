import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchCompanies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const baseURL = 'http://localhost:8080'; // 根据您的实际API服务器地址调整
        const response = await axios.get(`${baseURL}/move/companies`);
        console.log('API Response:', response);  // 日志 API 响应数据
        if (response && response.data) {
          setCompanies(response.data);
        } else {
          console.log('No data returned from the API');
        }
      } catch (error) {
        console.error('Error fetching companies:', error);
        console.log('Error details:', error.response);  // 日志错误详情
      }
    }
    
    fetchCompanies();
  }, []);

  return companies;
}

export default useFetchCompanies;
