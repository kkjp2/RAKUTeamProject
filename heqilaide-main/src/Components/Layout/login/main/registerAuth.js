// ./Components/Layout/login/main/registerAuth.js

import './css/registerAuth.css';
import { useNavigate } from 'react-router-dom';

const RegisterAuth =() => {
    const navigate = useNavigate();
    const goTOArea = () => {
        navigate('/login/register_area')
    }
    return <>
    <p className="title">인증 코드 입력</p>
    <p className="Auth_Message">이메일로 받은 인증 코드를 입력하세요.</p>
    <form className="Auth_Form">
    <p className="Auth_Write">인증코드(6자리)</p>
    <input type='text' className="Auth_Input"></input>
    <button className="Register_Auth__Btn" onClick={goTOArea}>인증 코드 확인</button>
    <p className="Auth_Resend_Write">인증코드 재발송</p>
    </form>
    </>
}

export default RegisterAuth;