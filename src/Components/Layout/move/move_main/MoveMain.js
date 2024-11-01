import React, { useState, useEffect } from 'react';
import './MoveMain.css';
import CompanyShowcase from './MoveCompanyShowcase.js';
import { Link } from 'react-router-dom';

function App() {

  useEffect(() => {
    document.body.classList.add('page-aaa');
    return () => {
      document.body.classList.remove('page-aaa');
    };
  }, []);

  const [movingDate, setMovingDate] = useState('');
  const [vehicleSize, setVehicleSize] = useState('small');
  const [region, setRegion] = useState('');
  const [items, setItems] = useState(0);

  const regions = [
    '東京都',
    '大阪府',
    '北海道',
    '福岡県',
    '沖縄県',
    '愛知県',
    '京都府',
    '神奈川県',
  ];

  const vehicleDescriptions = {
    small: '1ー2トン、20箱以内の荷物',
    medium: '2ー4トン、40箱以内の荷物',
    large: '4トン以上、50箱以上の荷物',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ movingDate, vehicleSize, region, items });
  };

  return (
    <>
      <div className='container-back'>
        <div className="main_content">
          <div className="main-text-box">
            <p>新しい生活のスタートを　私たちと<br />一緒に切りましょう！</p>
            <a href="#contact" className="main-cta-button">お問い合わせ</a>
          </div>
        </div>

        <div className="main_container">
          <form className="availability-form" onSubmit={handleSubmit}>
            <h2 className='main_h2'>引越しサービス</h2>
            <div className="form-group">
              <label>引越し予定日</label>
              <input
                type="date"
                value={movingDate}
                onChange={(e) => setMovingDate(e.target.value)}
                required
                lang="ja"
              />
            </div>
            <div className="form-group">
              <label>レンタル車のサイズ</label>
              <select
                value={vehicleSize}
                onChange={(e) => setVehicleSize(e.target.value)}
                required
              >
                <option value="small">小型</option>
                <option value="medium">中型</option>
                <option value="large">大型</option>
              </select>
              <p className="vehicle-description">
                {vehicleDescriptions[vehicleSize]}
              </p>
            </div>
            <div className="form-group">
              <label>地域</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                required
              >
                <option value="">選択してください</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>大荷物の数</label>
              <input
                type="number"
                value={items}
                onChange={(e) => setItems(e.target.value)}
                min="0"
                required />
            </div>
            <button
              type="button"
              className='main_submit'
              onClick={() => window.location.href = '/MoveMain/MovingCompanyList'}
            >
              当たりの運搬会社探す
            </button>
          </form>
        </div>
      </div>

      <h1 className="hero-title">RAKU引越サービス</h1>
      <div className="mian-soge">
        <div className="text-content">
          <p className="intro-text">
            &nbsp;&nbsp;&nbsp;&nbsp;
            RAKU引越サービス情報サイトへようこそ。忙しい日常の中で、安心して新生活を始められるよう、
            私たちはあなたに最適な引越会社を見つけるお手伝いをします。ビジネスやプライベートのどちらの引越でも、
            信頼できる業者をスムーズかつ簡単に選べるよう、最新の情報と評価を提供しています。
            あなたの大切な荷物を安心して任せられる引越会社を、ぜひ当サイトで見つけてください。
          </p>
          <div className="gallery-item gallery-item3"></div>
        </div>
        <div className="image-gallery">
          <div className="gallery-item gallery-item1"></div>
          <div className="gallery-item gallery-item2"></div>
        </div>
      </div>

      {/* 메인 페이지에서 이사 기업 보여주는거 */}
      <CompanyShowcase />
    </>
  );
}

export default App;
