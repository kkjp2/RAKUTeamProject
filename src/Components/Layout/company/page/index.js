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
                <Route path='/realty/company/:companyId/main' element={<CompanyMain/>}/>
                <Route path='/realty/company/:companyId/bukken' element={<CompanyBukken/>}/>
                <Route path='/realty/company/:companyId/map' element={<CompanyMap/>}/>
                <Route path='/realty/company/:companyId/staff' element={<CompanyStaff/>}/>
            </Routes>

        </Layout>

    </Router>
    
    </>
}

export default Index;