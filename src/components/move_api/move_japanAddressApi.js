import { useState } from 'react';
import axios from 'axios'; // 使用 axios 进行 HTTP 请求

const JapanAddressApi = () => {
  const [searchValue, setSearchValue] = useState(''); // 用于存储输入的邮政编码
  const [address, setAddress] = useState(''); // 用于存储获取的地址信息
  const [error, setError] = useState(''); // 用于存储错误信息

  // 处理输入框变化的事件
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setError(''); // 重置错误信息
  };

  // 处理搜索按钮点击事件
  const handleSearchClick = () => {
    // 检查邮政编码是否为空
    if (!searchValue) {
      setError('郵便番号を入力してください。');
      return;
    }

    // 使用 axios 发送 GET 请求
    axios
      .get(`https://api.zipaddress.net/?zipcode=${searchValue}`)
      .then((response) => {
        if (response.data.code === 200) {
          setAddress(response.data.data.fullAddress);
          setError(''); // 重置错误信息
        } else {
          setAddress('');
          setError('住所を見つけられませんでした。');
        }
      })
      .catch((error) => {
        console.error(error);
        setAddress('');
        setError('エラーが発生しました。');
      });
  };
  return {
    searchValue,
    address,
    error,
    handleInputChange,
    handleSearchClick
  };
};

export default JapanAddressApi;
