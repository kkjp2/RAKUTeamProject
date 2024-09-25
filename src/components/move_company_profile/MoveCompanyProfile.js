import React from 'react';
import './MoveCompanyProfile'; // 引入CSS样式文件
import logo from '../move_img/logo/logo4.jpg'; // 假设你的logo图片存储在相同目录下
import email from '../move_img/mail.png'
import Layout from '../move_layout/MoveLayout';
import Review from '../move_review/MoveReview';

function CompanyProfile() {
    return (
        <Layout>
        <div className="profile-container">
            <div className="profile-header">
                <img src={logo} alt="会社のロゴ" className="profile-logo" />
                <div className="profile-company-info">
                    <h1>サカイ引越センター</h1>
                    <button className="email-button">
                        <img src={email} alt="Email Icon" className="email-icon" /> メール問い合わせ
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
        <Review/>
        </Layout>
    );
}

export default CompanyProfile;
