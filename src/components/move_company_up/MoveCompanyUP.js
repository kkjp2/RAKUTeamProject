import React, { useState, useEffect } from 'react';
import './MoveCompanyUP.css';
import Layout from '../move_layout/MoveLayout';
import JapanAddressApi from '../move_api/move_japanAddressApi'
import axios from 'axios';


const CompanyForm = () => {

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCompany(prevState => ({
          ...prevState,
          img_icon: reader.result // 将 base64 编码的图片数据保存到状态中
        }));
      };
      reader.readAsDataURL(file); // 读取文件并转换为 base64
    }
  };


  const [company, setCompany] = useState({
    name: '',
    ceo: '',
    phone: '',
    email: '',
    postalCode: '',
    address: '',
    detailedAddress: '',
    businessNumber: '',
    img_icon: '',
    service: '',
    moveCity:''
  });

  // 从 JapanAddressApi hook 中提取数据和函数
  const {searchValue, address, error, handleInputChange, handleSearchClick } = JapanAddressApi();
  const [selectedBasicServices, setSelectedBasicServices] = useState([]);
  const [selectedOptionalServices, setSelectedOptionalServices] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const handleCheckboxChange = (event, setState, selectedItems) => {
    const { value } = event.target;
    const newSelectedItems = selectedItems.includes(value)
      ? selectedItems.filter(item => item !== value)  // 如果已经选中，则移除
      : [...selectedItems, value];  // 如果未选中，则添加
    setState(newSelectedItems);  // 更新状态
  };

  useEffect(() => {
    setCompany(prevState => ({
      ...prevState,
      postalCode: searchValue,  // 将邮政编码同步到 company 对象
      address: address          // 将获取到的地址同步到 company 对象
    }));
  }, [searchValue, address]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // 前端验证: 检查必填字段是否为空
    // if (!company.name || !company.ceo || !company.phone || !company.email || !company.postalCode || !company.address || !company.detailedAddress) {
    //   alert('すべての必須フィールドを入力してください。');
    //   return;
    // }

    try {
      const requestData = {
        name: company.name,
        ceo: company.ceo,
        phone: company.phone,
        email: company.email,
        postalCode: company.postalCode,
        address: company.address,
        detailedAddress: company.detailedAddress,
        businessNumber: company.businessNumber,
        img_icon: company.img_icon, // base64编码的图片
        service: [...selectedBasicServices, ...selectedOptionalServices].join(','),
        moveCity: selectedRegions.join(',')
      };

      // 发送JSON数据
      const baseURL = 'http://localhost:8080'; 
      const response = await axios.post(`${baseURL}/move/companies`, requestData, {
        headers: {
          'Content-Type': 'application/json' // 以JSON格式发送
        }
      });
      console.log('Server Response:', response);
      alert('会社登録完了しました！！！　１〜３日の審査期間があるのでお待ちください！！');
      window.location.href = 'http://localhost:3000/MoveMain'
    } catch (error) {
      console.error('Error posting company:', error);
      alert('沒有添加公司。', error.response);
    }
  };


  // 基本サービスの例
  const basicServices = ['梱包サービス', '清掃サービス', '保管サービス'];
  // オプションサービスの例
  const optionalServices = ['ピアノ運搬', '家具組み立て', '安全設置'];
  // 日本対応地域のリスト
  const japanRegions = ['全地域', '東京都', '大阪府', '愛知県', '埼玉県', '千葉県', '兵庫県', '北海道', '福岡県', '静岡県', '茨城県', 
    '広島県', '京都府', '宮城県', '新潟県', '長野県', '岐阜県', '群馬県', '栃木県', '岡山県', '神奈川県'];

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="CompanyUP_container">
          <h2 className="CompanyUP_title">企 &nbsp;&nbsp;業 &nbsp;&nbsp;登 &nbsp;&nbsp;録</h2>
          <div className="CompanyUP_formSection">
            <h3>基本情報</h3>
            <div >
              <label className='CompanyUP_label1'>会&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 社&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 名</label>
              <input
                type="text"
                name="name"
                value={company.name}
                onChange={handleChange}
                className="CompanyUP_input"
                placeholder="Company Name"
              />
              <label className='CompanyUP_label4'>事 &nbsp;&nbsp;業 &nbsp;&nbsp;者 &nbsp;&nbsp;番 &nbsp;&nbsp;号</label>
              <input
                type="text"
                name="businessNumber"
                className="CompanyUP_input"
                value={company.businessNumber}
                onChange={handleChange}
                placeholder='123456789098776'
              />
            </div>
            <div >
              <label className='CompanyUP_label1'>代&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 表&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 者</label>
              <input
                type="text"
                name="ceo"
                value={company.ceo}
                onChange={handleChange}
                className="CompanyUP_input"
                placeholder="CEO"
              />
              <label className='CompanyUP_label4'>電 &nbsp;&nbsp;&nbsp;&nbsp;話 &nbsp;&nbsp;&nbsp;&nbsp;番 &nbsp;&nbsp;&nbsp;&nbsp;号</label>
              <input
                type="text"
                name="phone"
                value={company.phone}
                onChange={handleChange}
                className="CompanyUP_input"
                placeholder="Phone Number"
              />
            </div>
            <div className="CompanyUP_formGroup">
              <label>メールアドレス</label>
              <input
                type="email"
                name="email"
                value={company.email}
                onChange={handleChange}
                className="CompanyUP_input"
                placeholder="Email Address"
              />
            </div>
            <hr></hr>
            <div className="CompanyUP_formSection">
              <h3>住所情報</h3>
              <div className="CompanyUP_postalcode">
                <label>郵便番号</label>
                <input
                  className="search"
                  name="postalCode"
                  type="text"
                  placeholder="郵便番号を入力"
                  value={searchValue} // 这里保持与 JapanAddressApi 的状态同步
                  onChange={handleInputChange}
                />
                <button className="search-btn" type="button" onClick={handleSearchClick}>
                  郵便番号検索
                </button>
                {error && <p className="error-message">{error}</p>}
              </div>
              <div className="CompanyUP_formGroup">
                <label>道路名住所</label>
                <p className="CompanyUP_address-text">
                  <input
                    type="hidden" // 使用隐藏的input来提交数据
                    name="address"
                    value={company.address}
                    onChange={handleChange} // 如果需要在输入时更新这个地址，可以保留onChange
                  />
                  {address && <span className='InvisibleText'>{address}</span>}
                  <span className='InvisibleText1'>Invisible Text</span>
                </p>
              </div>
              <div className="CompanyUP_formGroup">
                <label>詳細住所</label>
                <input
                  type="text"
                  name="detailedAddress"
                  value={company.detailedAddress}
                  onChange={handleChange}
                  className="CompanyUP_input"
                  placeholder="Detailed Address"
                />
              </div>
            </div>
            <div className="CompanyUP_formGroup">
              <label>基本サービス</label>
              <div className="CompanyUP_checkboxGroup">
                {basicServices.map((service, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      value={service}
                      name='basicServices'
                      onChange={(e) => handleCheckboxChange(e, setSelectedBasicServices, selectedBasicServices)}
                    />
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div className="CompanyUP_formGroup">
              <label>オプションサービス</label>
              <div className="CompanyUP_checkboxGroup">
                {optionalServices.map((service, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      value={service}
                      name='optionalServices'
                      onChange={(e) => handleCheckboxChange(e, setSelectedOptionalServices, selectedOptionalServices)}
                    />
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div className="CompanyUP_formGroup">
              <label>対応地域</label>
              <div className="CompanyUP_checkboxGroup">
                {japanRegions.map((moveCity) => (
                  <div key={moveCity}>
                    <input
                      type="checkbox"
                      value={moveCity}
                      name='moveCity'
                      onChange={(e) => handleCheckboxChange(e, setSelectedRegions, selectedRegions)}
                    />
                    {moveCity}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="CompanyUP_formGroup">
            <label>引越し環境の特長</label>
            <input type="text" className="CompanyUP_input" />
          </div>
          {/* 회사 아이콘/이미지 사진 업로드 */}
          <div>
            <label>会社LOGO</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange} // 处理图片选择
            />
          </div>
          <div className="CompanyUP_formSection">
            <h3>企業情報の追加入力</h3>
            <textarea className="CompanyUP_textarea"></textarea>
          </div>
          <div className="CompanyUP_buttonGroup">
            {/* <button className="CompanyUP_resetButton">初期化</button> */}
            <button type="submit" className="CompanyUP_submitButton">登録する</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default CompanyForm;
