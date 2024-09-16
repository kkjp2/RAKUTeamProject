// ./Components/Layout/login/main/registerAuth.js

import './css/registerAuth.css';

const RegisterAuth =() => {
    return <>
    <p className="title">인증 코드 입력</p>
    <p className="Auth_Message">이메일로 받은 인증 코드를 입력하세요.</p>
    <form className="Auth_Form">
    <p className="Auth_Write">인증코드(6자리)</p>
    <input type='text' className="Auth_Input"></input>
    <button className="Register_Email__Btn">로그인</button>
    <p className="Auth_Resend_Write">인증코드 재발송</p>
    </form>
    </>
}

export default RegisterAuth;