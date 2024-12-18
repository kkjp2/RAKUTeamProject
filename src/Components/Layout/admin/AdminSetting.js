import React from 'react';
import './AdminPage.css';

function AdminSettings() {
  return (
    <div className="adminSetting_table_wrapper">
    <div className='adminManagement_out'>
       <button>나가기</button>
    </div>
      <h2 className="adminSetting_title">환경설정</h2>
      <form className="adminSetting_form">
        <div className="adminSetting_form-group">
          <label className="adminSetting_label">홈페이지 제목</label>
          <input type="text" className="adminSetting_input" />
        </div>

        <div className="adminSetting_form-group">
          <label className="adminSetting_label">최고 관리자</label>
          <select className="adminSetting_select">
            <option value="">선택하세요</option>
            <option value="관리자1">관리자1</option>
            <option value="관리자2">관리자2</option>
          </select>
        </div>

        <div className="adminSetting_form-group">
          <label className="adminSetting_label">관리자 이메일 주소</label>
          <input type="email" className="adminSetting_input" />
        </div>

        <div className="adminSetting_form-group">
          <label className="adminSetting_label">관리 메일 발송 이름</label>
          <input type="text" className="adminSetting_input" />
        </div>

        <div className="adminSetting_form-group">
          <label className="adminSetting_label">페이지 표시수</label>
          <input type="number" className="adminSetting_input" />
        </div>

        <div className="adminSetting_form-group">
          <label className="adminSetting_label">글쓰기 간격</label>
          <div className="adminSetting_input-group">
            <input type="number" className="adminSetting_input1" />
            <span className="adminSetting_span">초 지난후 글쓰기 가능</span>
          </div>
        </div>

        <div className="adminSetting_button-group">
          <button type="submit" className="adminSetting_button">확인</button>
        </div>
      </form>
    </div>
  );
}

export default AdminSettings;
