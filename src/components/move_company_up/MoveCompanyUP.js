import React, { useState } from 'react';
import './MoveCompanyUP.css';
import Layout from '../move_layout/MoveLayout';

const CompanyForm = () => {
  // 基本サービスの例
  const basicServices = ['梱包サービス', '清掃サービス', '保管サービス'];
  // オプションサービスの例
  const optionalServices = ['ピアノ運搬', '家具組み立て', '安全設置'];
  // 日本対応地域のリスト
  const japanRegions = [
    '北海道', '東北', '関東', '中部', '近畿', '中国', '四国', '九州'
  ];

  const [selectedBasicServices, setSelectedBasicServices] = useState([]);
  const [selectedOptionalServices, setSelectedOptionalServices] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const handleCheckboxChange = (e, setSelected, selected) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  return (
    <Layout>
    <div className="CompanyUP_container">
      <h2 className="CompanyUP_title">企 &nbsp;&nbsp;業 &nbsp;&nbsp;登 &nbsp;&nbsp;録</h2>
      <div className="CompanyUP_formSection">
        <h3>基本情報</h3>
        <div >
          <label className='CompanyUP_label1'>会&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 社&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 名</label>
          <input type="text" className="CompanyUP_input" />
          <label className='CompanyUP_label4'>事 &nbsp;&nbsp;業 &nbsp;&nbsp;者 &nbsp;&nbsp;番 &nbsp;&nbsp;号</label>
          <input type="text" className="CompanyUP_input" />
        </div>
        <div >
          <label className='CompanyUP_label1'>代&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 表&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 者</label>
          <input type="text" className="CompanyUP_input" />
          <label className='CompanyUP_label4'>電 &nbsp;&nbsp;&nbsp;&nbsp;話 &nbsp;&nbsp;&nbsp;&nbsp;番 &nbsp;&nbsp;&nbsp;&nbsp;号</label>
          <input type="text" className="CompanyUP_input" />
        </div>
        <div className="CompanyUP_formGroup">
          <label>メールアドレス</label>
          <input type="email" className="CompanyUP_input" />
        </div>
        <hr></hr>
        <div className="CompanyUP_formSection">
        <h3>住所情報</h3>
        <div className="CompanyUP_postalcode">
          <label>郵便番号</label>
          <input type="text" className="CompanyUP_input" />
          <button className="CompanyUP_searchButton">郵便番号検索</button>
        </div>
        <div className="CompanyUP_formGroup">
          <label>道路名住所</label>
          <input type="text" className="CompanyUP_input" />
        </div>
        <div className="CompanyUP_formGroup">
          <label>詳細住所</label>
          <input type="text" className="CompanyUP_input" />
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
            {japanRegions.map((region, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  value={region}
                  onChange={(e) => handleCheckboxChange(e, setSelectedRegions, selectedRegions)}
                />
                {region}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="CompanyUP_formGroup">
          <label>引越し環境の特長</label>
          <input type="text" className="CompanyUP_input" />
        </div>
      <div className="CompanyUP_formSection">
        <h3>企業情報の追加入力</h3>
        <textarea className="CompanyUP_textarea"></textarea>
      </div>
      <div className="CompanyUP_buttonGroup">
        <button className="CompanyUP_resetButton">初期化</button>
        <button className="CompanyUP_submitButton">登録する</button>
      </div>
    </div>
    </Layout>
  );
};

export default CompanyForm;
