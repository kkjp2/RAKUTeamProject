import { Link, useNavigate } from 'react-router-dom';
import './css/myPageEmailEdit.css'

const MyPageEmailEdit =() => {
    const navigate = useNavigate();
    const goToEditEmailAuth = () => {
        navigate(`/mypage/edit/email/auth`);
    }
    const goToMypageEdit =() => {
        navigate(`/mypage/edit`);
    }
    return<>
    <div className="EmailEdit">
    <div className="EmailEdit_Title">이메일 주소 변경</div>
    <div className="EmailEdit_Content">새 이메일 주소를 입력하세요.<br/>변경용 인증 코드를 보내드립니다.</div>
    <form>
    <div className="EmailEdit_Content">
        <p className="EmailEdit_Content_Title">새 이메일 주소</p>
        <input type='text' className='EmailEdit_Content_Text'></input>
    </div>
    <div className="EmailEdit_Btn">
        <button className="EmailEdit_Btn_submit" onClick={goToEditEmailAuth}>변경용 이메일 보내기</button>
        <button className="EmailEdit_Btn_cancel" onClick={goToMypageEdit}>뒤로</button>
        <div className="EmailEdit_Btn_Content">
        입력된 이메일 주소로 등록을 위한 인증 코드를 보냅니다. 다음 페이지에서 입력하십시오.
        </div>
    </div>
    
    </form>
    </div>
    </>
}

export default MyPageEmailEdit;