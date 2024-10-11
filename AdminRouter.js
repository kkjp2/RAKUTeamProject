import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminMenu from './AdminMenu'; // 导入侧边栏组件
import AdminManagement from './AdminManagement';
// import AdminCompanyManagement from './AdminCompanyManagement';
import AdminRealManagement from './AdminRealManagement';
import AdminBoardManaging from './AdminBoardManaging';
import AdminMembershipManagement from './AdminMembershipManagement'
import AdminSetting from './AdminSetting'
import './AdminPage.css';


function App() {
  return (
    <Router>
      <div className="app_container">
        {/* 左侧导航栏始终保持不变 */}
        <AdminMenu />
        {/* 右侧内容区域根据路由动态变化 */}
        <div className="adminManagement_content">
          <Routes>
            <Route path="/MoveMain/AdminManagement" element={<AdminManagement />} />
            {/* <Route path="/MoveMain/AdminCompanyManagement" element={<AdminCompanyManagement />} /> */}
            <Route path="/MoveMain/AdminRealManagement" element={<AdminRealManagement />} />
            <Route path='/MoveMain/AdminBoardManaging' element={<AdminBoardManaging/>}/>
            <Route path='/MoveMain/AdminMembershipManagement' element={<AdminMembershipManagement/>}/>
            <Route path='/MoveMain/AdminSetting' element={<AdminSetting/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
