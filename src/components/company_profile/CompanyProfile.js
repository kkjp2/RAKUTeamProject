// App.js
import React from 'react';
import styles from './CompanyProfile.module.css';

function App() {
    const services = [
        { id: 1, name: '階段の利用', image: 'stairs.jpg', description: '階段を利用しての移動もサポートします。' },
        { id: 2, name: '緊急サービス', image: 'emergency.jpg', description: '急な引越しも対応可能です。' },
        { id: 3, name: '重量物運搬', image: 'heavy.jpg', description: '重量物の運搬も安全に行います。' },
        { id: 4, name: '梱包材料の提供', image: 'packing.jpg', description: '必要な梱包材料を全て提供します。' },
        { id: 5, name: '家具の組み立て', image: 'furniture.jpg', description: '家具の組み立てサービスも承ります。' },
        { id: 6, name: 'クリーニングサービス', image: 'cleaning.jpg', description: '引越し後の清掃も行います。' }
      ];
    
      return (
        <div className={styles.module_container}>
          <div className={styles.header}>
            <h1>私たちのサービス</h1>
            <h2>ベストムーブ株式会社</h2>
          </div>
          {services.map(service => (
            <div key={service.id} className={styles.service_card} style={{ backgroundImage: `url(${service.image})` }}>
              <div className={styles.service_name}>{service.name}</div>
              <div className={styles.service_description}>{service.description}</div>
            </div>
          ))}
          <div className={styles.module_more}>
            <a href="mailto:contact@bestmove.com">メールで連絡</a>
          </div>
        </div>
  );
}

export default App;
