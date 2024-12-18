import React from 'react';
import './AdminPage.css';

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
                <h2> 부동산 회사 관리</h2>
                <div className='adminManagement_heder_button'>
                <button>선택삭제</button>
                <button>관리자 추가</button>
                </div>
                </div>
                <hr></hr>
                <div className="adminManagement_search-filter-section">
                    <div className="adminManagement_search-box">
                        <select className="adminManagement_select">
                            <option value="id">회사명</option>
                            <option value="name">지역</option>
                        </select>
                        <input type="text" placeholder="검색" className="adminManagement_input" />
                        <button className="adminManagement_button">검색</button>
                    </div>
                </div>
                <table className="adminManagement_table">
                    <thead>
                        <tr>
                            <th>면허번호</th>
                            <th>회사명</th>
                            <th>회사 홈페이지</th>
                            <th>회사 연락처</th>
                            <th>회사주소</th>
                            <th>영업시간</th>
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
