import './css/dormantComplete.css';
import { useNavigate } from 'react-router-dom';

const DormantComplete =() => {
    const navigate = useNavigate();
    const goToMainpage = () => {
        navigate('/main');
      };
    return<>
    <p className="title">휴면 회원 해제</p>
    <p className="Dormant_Complete_Message1">휴면 회원이 해제되었습니다<br/>다시 만나서 반갑습니다</p>
    <p className="Dormant_Complete_Message2">아래 버튼으로 계속 서비스를 이용하실 수 있습니다</p>
    <button className="Dormant_Complete__Btn" onclick={goToMainpage}>메인 페이지로 돌아가기</button>
    </>
}

export default DormantComplete;