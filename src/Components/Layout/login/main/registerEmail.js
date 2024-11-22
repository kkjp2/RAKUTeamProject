// ./Components/Layout/login/main/registerEmail.js

import './css/registerEmail.css';
import { useNavigate } from 'react-router-dom';

const RegisterEmail = () => {
    const navigate = useNavigate();
    const goToAuth = () => {
        navigate('/login/register_auth')
    };
    return<>
    <div>
    <p className="title">신규 가입</p>
    <section className="Register_Email_Form">
                <form className="Register_Email">
                    <p className="Register_Id__Write">로그인</p>
                    <input type='text' className="Register_Id__Input"></input>
                    <p className="Register_Pass__Write">비밀번호</p>
                    <input type="password" className="Register_Pass__Input"></input>
                    <input type="checkbox" className="Register_Email_checkbox" id='Register_Email_checkbox' />
                    <label for="Register_Email_checkbox"><span>이메일 알람 허용</span></label>
                    <button className="Register_Email__Btn" onClick={goToAuth}>이메일 등록</button>
                </form>
            </section>
    </div>
    </>
}

export default RegisterEmail;