// ./Components/Layout/login/main/login.js
import './css/login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const goToDormant = () => {
        navigate('/login/dormant_auth');
      };
    const goTORegister = () => {
        navigate('/login/register_email')
    }
    return<>
    <div className="main">
    <p className="title">로그인</p>
        <div className="Signin__Inner">
            <section className="Signin__Form">
                <form className="Signin">
                    <p className="Id__Write">로그인</p>
                    <input type='text' className="Id__Input"></input>
                    <p className="Pass__Write">비밀번호</p>
                    <input type="password" className="Pass__Input"></input>
                    <button className="Signin__Btn" id="company" onClick={goToDormant}>로그인</button>
                </form>
            </section>
            <div className="Register__Form">
                <p className="Write1">신규 가입이 필요한 분</p>
                <p className="Write2">가입시 게시판 작성과 즐겨찾기 기능을 이용할 수 있습니다.</p>
                <button className="Register__Btn" onClick={goTORegister}>신규 등록</button>
            </div>
        </div>
    </div>
    </>
    
}

export default Login;