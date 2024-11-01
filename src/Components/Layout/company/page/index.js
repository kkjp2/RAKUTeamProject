import Layout from '../mainLayout.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyMain from './companyMain.js';
import CompanyBukken from './companyBukken.js';
import CompanyMap from './companyMap.js';
import CompanyStaff from './companyStaff.js';

const Index = () => {

    return<>
    
    <Router>
        <Layout>
            <Routes>
                <Route path='/Realty/Company/:companyId/Main' element={<CompanyMain/>}/>
                <Route path='/Realty/Company/:companyId/Bukken' element={<CompanyBukken/>}/>
                <Route path='/Realty/Company/:companyId/Map' element={<CompanyMap/>}/>
                <Route path='/Realty/Company/:companyId/Staff' element={<CompanyStaff/>}/>
            </Routes>

        </Layout>

    </Router>
    
    </>
}

export default Index;