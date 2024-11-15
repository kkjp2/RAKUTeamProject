//./Components/Layout/login/main/index.js
import Layout from '../layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login.js';
import Dormant_Auth from './dormantAuth.js';
import Dormant_Auth_Complete from './dormantComplete.js'
import Register_Email from './registerEmail.js';
import Register_Auth from './registerAuth.js';
import Register_Area from './registerArea.js';
import Register_Complete from './registerComplete.js';

const homepage = () => {
    return<>
    <Layout>
      <Router>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/login/dormant_auth" element={<Dormant_Auth/>}/>
      <Route path="/login/dormant_auth_complete" element={<Dormant_Auth_Complete/>}/>
      <Route path="/login/register_email" element={<Register_Email/>}/>
      <Route path="/login/register_auth" element={<Register_Auth/>}/>
      <Route path="/login/register_area" element={<Register_Area/>}/>
      <Route path="/login/register_complete" element={<Register_Complete/>}/>
      </Routes>
      </Router>
    </Layout>
    </>
}

export default homepage;