import React, { useState } from 'react';
import './AdminPage.css';
import { Link } from 'react-router-dom';

function AdminPage() {
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const [boardOpen, setBoardOpen] = useState(false);

    const toggleUserMenu = () => {
        setUserMenuOpen(!isUserMenuOpen);
    };

    const boardMenu = () => {
        setBoardOpen(!boardOpen);
    };

    return (
        <div className="adminManagement_container">
            <aside className="adminManagement_sidebar">
                <h1>RAKU</h1>
                <hr></hr>
                <ul>
                    <li><div className='adminManagement_imgicon1'></div> 사이트로 바로 가기</li>
                    <li><div className='adminManagement_imgicon2'></div> 대시보드</li>
                    <li onClick={toggleUserMenu}><div className='adminManagement_imgicon3'></div> 사용자 관리</li>
                    {isUserMenuOpen && (
                        <div className="adminManagement_dropdown_content">
                            <ul>
                                <li><Link to='/MoveMain/AdminManagement'>개인 회원 관리</Link></li>
                                <li><Link to='/MoveMain/AdminMembershipManagement'>기업 회원 관리</Link></li>
                                <li><Link to='/MoveMain/AdminRealManagement'>부동산 회원 관리</Link></li>
                            </ul>
                        </div>
                    )}
                    <li onClick={boardMenu}><div className='adminManagement_imgicon4'></div> 게시판 관리</li>
                    {boardOpen && (
                        <div className="adminManagement_dropdown_content">
                            <ul>
                                <li><Link to='/MoveMain/AdminBoardManaging'>게시판 내용 관리</Link></li>
                                <li>신고 누적 게시판</li>
                                <li>공지사항 관리</li>
                            </ul>
                        </div>
                    )}
                    <li><div className='adminManagement_imgicon5'></div> <Link to='/MoveMain/AdminSetting'>환경설정</Link></li>
                </ul>
            </aside>
        </div>
        
    );
}

export default AdminPage;
