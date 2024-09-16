//./Components/Layout/login/main/index.js
import Layout from '../layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login.js';
import Register_Email from './registerEmail.js';
import Register_Auth from './registerAuth.js';

const homepage = () => {
    return<>
    <Layout>
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register_email" element={<Register_Email/>}/>
      <Route path="/Register_Auth" element={<Register_Auth/>}/>
      </Routes>
    </Router>
    </Layout>
    </>
}

export default homepage;