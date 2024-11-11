// MoveCompanyImport.js
import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchCompanies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      try {
       // 根据实际API服务器地址调整
        const response = await axios.get(`/move/company/companies`);
        console.log('API Response:', response.data); // 输出 API 响应数据
        if (response && response.data) {
          setCompanies(response.data);
        } else {
          console.log('No data returned from the API');
        }
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    }

    fetchCompanies();
  }, []);

  return companies;
}

export default useFetchCompanies;
