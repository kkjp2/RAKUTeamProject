import './css/registerComplete.css';
import { useNavigate } from 'react-router-dom';

const RegisterComplete = () => {
    const navigate = useNavigate();
    const goToMainpage = () => {
        navigate('/main');
      };
    return<>
    <p className="title">신규 등록 완료</p>
    <p className="Complete_Message1">등록해 주셔서 감사합니다.<br/>등록 완료 안내 메일을 보냈습니다.</p>
    <p className="Complete_Message2">아래 버튼으로 계속 서비스를 이용하실 수 있습니다</p>
    <button className="Register_Complete__Btn" onclick={goToMainpage}>메인 페이지로 돌아가기</button>
    </>
}

export default RegisterComplete;