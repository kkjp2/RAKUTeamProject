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
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get('http://localhost:8080/move/company/companies/${id}');
                setCompanies(response.data); // 响应中包含公司数据，以及通过 `fileUrl` 获取文件 URL
            } catch (err) {
                setError('无法加载公司列表');
            }
        };
        fetchCompanies();
    }, []);


    useEffect(() => {
        fetchCompaniesByRegion(selectedRegion, currentPage);
    }, [selectedRegion, currentPage]);

    // 获取公司列表
    const fetchCompaniesByRegion = async (region, page) => {
        try {
            const response = await axios.get(`http://localhost:8080/move/company/companies/cityFind`, {
                params: {
                    moveCity: region === "全地域" ? "" : region,
                    page: page - 1, // 后端分页从0开始，前端从1开始
                    size: 12
                }
            });
            console.log(response.data);

            if (response.data.content) {
                setCompanies(response.data.content);
                setTotalPages(response.data.totalPages);
            } else {
                setCompanies([]);
                setTotalPages(0);
            }
            setError('');
        } catch (error) {
            console.error('Error fetching companies:', error);
            setCompanies([]);
            setTotalPages(0);
            setError('无法加载公司数据，请稍后再试。');
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
                            onClick={() => {
                                setSelectedRegion(region);
                                setCurrentPage(1); // 切换地区时，重置为第一页
                            }}>
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
                                <img src={company.imgUrl} alt="Company Logo" className="comList_profile_logo" />
                                <h3 className="comList_name">{company.name}{company.id}</h3>
                            </div>
                            <div className="comList_info">
                                <p className='comList_companyService'>提供するサービス：<br />{company.service}</p>
                                <p className='comList_companyService'>可能の地域：<br />{company.moveCity}</p>
                            </div>
                            {company.id ? (
                                <Link to={`/MoveMain/CompanyProfile/${company.id}`} className='comList_link'>
                                    詳細情報
                                </Link>
                            ) : (
                                <span>Company ID is missing</span>
                            )}
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
