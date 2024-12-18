import React from 'react';
import './AdminPage.css';
//게시판 내용 관리
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
                <h2> 게시판 내용 관리</h2>
                <div className='adminManagement_heder_button'>
                <button>선택삭제</button>
                <button>관리자 추가</button>
                </div>
                </div>
                <hr></hr>
                <div className="adminManagement_search-filter-section">
                    <div className="adminManagement_search-box">
                        <select className="adminManagement_select">
                            <option value="id">게시판 제목</option>
                            <option value="name">게시글 아이디</option>
                        </select>
                        <input type="text" placeholder="검색" className="adminManagement_input" />
                        <button className="adminManagement_button">검색</button>
                    </div>
                </div>
                <table className="adminManagement_table">
                    <thead>
                        <tr>
                            <th>게시판 제목</th>
                            <th>게시판 날짜</th>
                            <th>닉네임</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.manager}</td>
                                <td>{item.email}</td>
                                <td>{item.region}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
}

export default AdminPage;
