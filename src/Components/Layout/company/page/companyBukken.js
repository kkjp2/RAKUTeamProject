import CompanyLayout from './companyLayout.js';
import './css/companyBukken.css'

const CompanyBukken =() => {

    return<>
    <CompanyLayout>
    <div className="CompanyBukken">
    <p className="CompanyBukken_Title">취급 물건</p>
    <button className="CompanyBukken_Btn">
    해당 부동산 매물 보러가기

    </button>
    </div>
    </CompanyLayout>
    </>
}

export default CompanyBukken;