import { Link, useNavigate } from 'react-router-dom';
import './css/myPageEmailEditAuth.css'


const MyPageEmailEditAuth =() => {

    return<>
    <div className="EmailEditAuth">
    <p className="EmailEditAuth_Title">인증 코드 입력</p>
    <p className="EmailEditAuth_Content">새 이메일 주소에 인증코드를 
    보내드렸습니다.<br/>인증 코드를 입력해주세요.</p>
    <form className="EmailEditAuth_Form">
    <p className="EmailEditAuth_Write">인증코드(6자리)</p>
    <input type='text' className="EmailEditAuth_Input"></input>
    <button className="EmailEditAuth_Btn">인증 코드 확인</button>
    <Link to='/MyPage/Edit'>
        <button className="EmailEditAuth_Btn_cancel">뒤로</button></Link>
    <p className="EmailEditAuth_Resend_Write">인증코드 재발송</p>
    </form>
    </div>
    </>
}

export default MyPageEmailEditAuth;