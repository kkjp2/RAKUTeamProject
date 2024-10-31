import './css/myPagePasswordEdit.css';
import { Link, useNavigate } from 'react-router-dom';

const MyPagePasswordEdit = () => {
    return<>
    <div className="PasswordEdit">
    <div className="PasswordEdit_Title">새 비밀번호 입력</div>
    <form>
    <div className="PasswordEdit_Content">
        <p className="PasswordEdit_Content_Title">새로운 비밀번호</p>
        <input type='password' className='PasswordEdit_Content_Text'></input>
        <p className="PasswordEdit_Content_p">8자 이상의 숫자, 영문자(대문자와 소문자)를 포함한다.<br/>전각이나 기호는 사용할 수 없습니다.</p>
    </div>
    <div className="PasswordEdit_Btn">
        <Link to='/MyPage/Edit'>
        <button className="PasswordEdit_Btn_submit">비밀번호 재설정</button></Link>
        <Link to='/MyPage/Edit'>
        <button className="PasswordEdit_Btn_cancel">뒤로</button></Link>
    </div>
    </form>
    </div>
    </>
}

export default MyPagePasswordEdit;