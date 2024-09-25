import React,{ useState } from 'react';
import './MovingComList.css';
import companies from './Movecompanies';  // 引入假数据集
import Layout from '../move_layout/MoveLayout'
import { Link } from 'react-router-dom';


const MovingCompanyList = () => {

    // const [companies, setCompanies] = useState([]);
    // const [filter, setFilter] = useState('');

    // useEffect(() => {
    //     // 假设这里是一个API调用，获取搬家公司数据
    //     fetch('/api/companies')
    //         .then(response => response.json())
    //         .then(data => setCompanies(data))
    //         .catch(error => console.error('Error fetching companies:', error));
    // }, []);

        const regions = ["全地域", "東京", "大阪", "名古屋", "福岡", "札幌", "仙台", "広島", "高松", "金沢", "鹿児島"];  // 日语地区列表
        const [selectedRegion, setSelectedRegion] = useState(regions[0]);
    

    return (
        <>
        <Layout>
        <div className='comList_backgroun'>
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
        <div className="comList_container">
            {companies.map(company => (
                <div key={company.id} className="comList_card">
                <Link to='/MoveMain/CompanyProfile'><div className={`comList_logo comList_logo_${company.id}`}></div></Link>
                    <div className="comList_info">
                        <h3 className="comList_name">{company.name}</h3>
                        <div className="comList_price">{company.priceRange}</div>
                        <div className="comList_tags">
                            {company.services.map(service => (
                                <span key={service} className="comList_tag">{service}</span>
                            ))}
                            {company.area.map(area => (
                                <span key={area} className="comList_tag">{area}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </Layout>
    </>
    );
};

export default MovingCompanyList;
