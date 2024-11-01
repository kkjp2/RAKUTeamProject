import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovingComList.css';
import Layout from '../move_layout/MoveLayout';
import { Link } from 'react-router-dom';

const MovingCompanyList = () => {
    const regions = ["全地域", "東京都", "大阪府", "愛知県", "埼玉県", "千葉県", "兵庫県", "北海道", "福岡県",
        "静岡県", "茨城県", "広島県", "京都府", "宮城県", "新潟県", "長野県", "岐阜県", "群馬県", "栃木県", "岡山県", "神奈川県"];
    const [selectedRegion, setSelectedRegion] = useState('全地域');
    const [companies, setCompanies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0); // 新增状态管理总页数

    useEffect(() => {
        fetchCompaniesByRegion(selectedRegion, currentPage); // 添加页码参数
    }, [selectedRegion, currentPage]); // 增加依赖项

    const [error, setError] = useState('');

    const fetchCompaniesByRegion = async (region, page) => {
        try {
            const response = await axios.get(`http://localhost:8080/move/companies/cityFind`, {
                params: {
                    city: region === "全地域" ? "" : region,
                    page: page - 1, // 前端页码减1，因为后端分页是从0开始的
                    size: 12
                }
            });
            if (response.data.content) {
                setCompanies(response.data.content); // 确保正确使用响应中的content数组
                setTotalPages(response.data.totalPages); // 更新总页数
            } else {
                setCompanies([]); // 如果没有content数组，清空公司列表
                setTotalPages(0); // 重置总页数
            }
            setError('');  // 清除错误信息
        } catch (error) {
            console.error('Error fetching companies:', error);
            setCompanies([]);
            setTotalPages(0); // 出错时也应重置总页数
            setError('无法加载公司数据，请稍后再试。');  // 设置用户可见的错误信息
        }
    };

    return (
        <Layout>
            <div className='comList_background'>
                <h1 className="comList_title">引越し会社一覧</h1>
                <div className="comList_regionSelector">
                    {regions.map(region => (
                        <button
                            key={region}
                            className={`comList_regionButton ${selectedRegion === region ? 'active' : ''}`}
                            onClick={() => setSelectedRegion(region)}>
                            {region}
                        </button>
                    ))}
                </div>
            </div>
                <div className="comList_container1">
                    <div className="comList_container">
                        {companies.length > 0 ? companies.map((company) => (
                            <div className="comList_card" key={company.id}>
                                <div className='comList_logoandname'>
                                    <img src={company.img_icon || 'default_icon.png'} alt="会社のロゴ" className="comList_profile_logo" />
                                    <h3 className="comList_name">{company.name}</h3>
                                </div>
                                <div className="comList_info">
                                    <p className='comList_companyService'>提供するサービス：<br />{company.service}</p>
                                    <p className='comList_companyService'>可能の地域：<br />{company.moveCity}</p>
                                </div>
                                <Link to={`/MoveMain/CompanyProfile/${company.id}`} className='comList_link'>
                                    詳細情報
                                </Link>
                            </div>
                        )) : <p className="comList_noData">選択した地域の会社は見つかりませんでした。</p>}
                    </div>
                    <div className="comList_pagination">
                        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                            前のページ
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= totalPages}>
                            次のページ
                        </button>
                    </div>

                </div>
         </Layout>
    );
};

export default MovingCompanyList;
