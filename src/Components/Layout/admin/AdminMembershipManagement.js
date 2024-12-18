import React from 'react';
import './AdminPage.css';
//기업 회원 관리
function AdminPage() {
    const data = [
        { id: '001', manager: '관리자A', email: 'user1@example.com', region: '서울', joinDate: '2023-01-10', lastLogin: '2024-01-01' },
        { id: '002', manager: '관리자B', email: 'user2@example.com', region: '부산', joinDate: '2023-03-15', lastLogin: '2024-03-01' },
        { id: '003', manager: '관리자C', email: 'user3@example.com', region: '대구', joinDate: '2023-05-22', lastLogin: '2024-05-10' },
    ];

    return (
            <div className="adminManagement_table-wrapper">
            <div className='adminManagement_out'>
               <button>나가기</button>
            </div>
                <div className='adminManagement_heder'>
                <h2> 기업 회원 관리</h2>
                <div className='adminManagement_heder_button'>
                <button>선택삭제</button>
                <button>관리자 추가</button>
                </div>
                </div>
                <hr></hr>
                <div className="adminManagement_search-filter-section">
                    <div className="adminManagement_search-box">
                        <select className="adminManagement_select">
                            <option value="id">회원 아이디</option>
                            <option value="name">회원 이름</option>
                        </select>
                        <input type="text" placeholder="검색" className="adminManagement_input" />
                        <button className="adminManagement_button">검색</button>
                    </div>
                    <div className="adminManagement_filters">
                        <label>
                            <input type="checkbox" className="adminManagement_checkbox" />
                            기업 직원
                        </label>
                        <label>
                            <input type="checkbox" className="adminManagement_checkbox" />
                            직원 신청
                        </label>
                    </div>
                </div>
                <table className="adminManagement_table">
                    <thead>
                        <tr>
                            <th>아이디</th>
                            <th>이름</th>
                            <th>기업대표자</th>
                            <th>나이</th>
                            <th>회사이름</th>
                            <th>직원 신청</th>
                            <th>가입일</th>
                            <th>최근 접속일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.manager}</td>
                                <td>{item.email}</td>
                                <td>{item.region}</td>
                                <td>{item.joinDate}</td>
                                <td>{item.lastLogin}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
}

export default AdminPage;
