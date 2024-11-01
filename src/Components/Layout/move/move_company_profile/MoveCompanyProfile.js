import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../move_layout/MoveLayout';
// import Review from '../move_review/MoveReview';
import './MoveCompanyProfile.css'
import useFetchCompanies from '../move_function/move_import/MoveCompanyImport.js'

function CompanyProfile() {

    const { id } = useParams(); // 获取URL中的公司ID
    const companies = useFetchCompanies(); // 调用 Hook 获取公司数据
    const [company, setCompany] = useState(null);

    useEffect(() => {
        if (companies.length > 0) {
            const selectedCompany = companies.find((company) => company.id === parseInt(id));
            setCompany(selectedCompany);
        }
    }, [id, companies]);

    if (!company) {
        return <div>Loading company details...</div>;
    }

    return (
        <Layout>
            <div className="profile-container">
                <div className="profile-header">
                    <img src={company.img_icon} alt="会社のロゴ" className="profile-logo" />
                    <div className="profile-company-info">
                        <h1>{company.name}</h1>
                        <p>{company.description}</p> {/* 显示公司描述 */}
                        <button className="email-button">
                            <a href={`mailto:${company.email}`}>メール問い合わせ</a> {/* 邮件按钮 */}
                        </button>
                    </div>
                </div>
                <p>家庭の引越し、企業の移転、国際的な輸送を含む全面的な引越しサービスを提供しています。</p>
                <hr></hr>
                <div className="profile-main">
                    <h2>主要サービス</h2>
                    <ul>
                        <li>
                            <span>家庭の引越し: </span>個人および家族の引越しニーズに応じたカスタマイズ可能なサービスを提供します。梱包、運搬、配置まで全てサポート。
                        </li>
                        <li>
                            <span>企業の移転 : </span>オフィス移転に必要な全ての要素をカバーする専門的なサービス。事務所の設備や機密書類の安全な輸送を保証。
                        </li>
                        <li>
                            <span>国際的な輸送 : </span>海外への引越しサービスでは、荷物の国際規格に合わせた梱包、通関手続きの支援から配送までを一手に担います。
                        </li>
                    </ul>
                </div>
                <div className="profile-footer">
                    <p>詳細情報やお問い合わせについては、隣のリンクをクリックしてください。
                    </p>
                </div>
            </div>
            {/* <Review /> */}
        </Layout>
    );
}

export default CompanyProfile;
