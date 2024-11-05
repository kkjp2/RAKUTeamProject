import './css/dormantAuth.css'
import { useNavigate } from 'react-router-dom';

const DormantAuth = () => {
    const navigate = useNavigate();
    const goToDormantComplete = () => {
        navigate('/login/dormant_auth_complete');
      };
    return<>
    <p className="title">인증 코드 입력</p>
    <p className="Dormant_Message">2년간 최근 접속이 없어서 휴면 회원이 되었습니다<br/>이메일로 받은 인증 코드를 입력하세요.</p>
    <form className="Dormant_Form">
    <p className="Dormant_Write">인증코드(6자리)</p>
    <input type='text' className="Dormant_Input"></input>
    <button className="Dormant_Email__Btn" onClick={goToDormantComplete}>인증 코드 확인</button>
    <p className="Dormant_Resend_Write">인증코드 재발송</p>
    </form>
    </>
}

export default DormantAuth;