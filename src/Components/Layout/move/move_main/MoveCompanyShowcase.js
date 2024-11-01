import React from 'react';
import './MoveCompanyShowcase.css';

const companies = [
  {
    name: 'スピード引越サービス',
    price: '¥30,000/日',
    description: '迅速かつ効率的な引越サービス。急な引越しにも対応可能。',
    features: ['迅速対応', '梱包サービス', '家具の分解・組立'],
    imageClass: 'speed-moving',
  },
  {
    name: 'プレミアム引越サービス',
    price: '¥50,000/日',
    description: '高品質なサービスで安心・安全な引越しを提供します。',
    features: ['保険付き', '高品質な梱包', '専門スタッフ'],
    imageClass: 'premium-moving',
  },
  {
    name: 'エコ引越し',
    price: '¥25,000/日',
    description: '環境に優しい引越しサービス。リサイクル材を使用。',
    features: ['環境対応', 'リーズナブル', '再利用可能な梱包材'],
    imageClass: 'eco-moving', // 使用 CSS 中的类名来指定图片
  },
];

const CompanyShowcase = () => {
  return (
    <div className="showcase-container">
      <h1 className="showcase-title">引越し会社の推薦</h1>
      <div className="company-grid">
        {companies.map((company, index1) => (
          <div key={index1} className="company-card">
            <div className={`company-image ${company.imageClass}`}>
              <div className="company-overlay">
                <h2>{company.name}</h2>
                <p>{company.description}</p>
                <ul>
                  {company.features.map((feature, index2) => (
                    <li key={index2}>{feature}</li> // 使用唯一的 key
                  ))}
                </ul>
                <p className="price">{company.price}</p>
                <a href="#contact" className="browse-button">詳細を見る</a>
              </div>
            </div>
            <h3 className="company-name">{company.name}</h3>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CompanyShowcase;
