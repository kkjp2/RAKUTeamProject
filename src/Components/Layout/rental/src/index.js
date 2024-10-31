import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // App 컴포넌트를 import
import './index.css'; // 기본 스타일 import

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot로 루트 생성
root.render(<App />); // App 렌더링
