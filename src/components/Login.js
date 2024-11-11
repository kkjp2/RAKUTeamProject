import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
  const [id, setId] = useState(''); // 用户的邮箱ID
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, pwd: password }), // 后端期望的字段名称
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      localStorage.setItem('accessToken', data.accessToken); // 存储Token

      alert('Login successful!');
      onLoginSuccess(data.accessToken); // 通知父组件登录成功
    } catch (error) {
      console.error('Authentication failed:', error);
      alert('Authentication failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken'); // 删除Token
    alert('Logged out successfully!');
    onLoginSuccess(null); // 通知父组件用户已登出
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button> {/* 新增登出按钮 */}
    </div>
  );
}

export default Login;
