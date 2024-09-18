//./Components/Layout/login/main/index.js
import Layout from '../layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login.js';
import Register_Email from './registerEmail.js';
import Register_Auth from './registerAuth.js';
import Register_Area from './registerArea.js';
import Register_Complete from './registerComplete.js';

const homepage = () => {
    return<>
    <Layout>
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register_email" element={<Register_Email/>}/>
      <Route path="/Register_Auth" element={<Register_Auth/>}/>
      <Route path="/Register_Area" element={<Register_Area/>}/>
      <Route path="/Register_Complete" element={<Register_Complete/>}/>
      </Routes>
    </Router>
    </Layout>
    </>
}

export default homepage;