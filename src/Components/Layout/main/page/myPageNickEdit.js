import './css/myPageNickEdit.css'
import { Link, useNavigate } from 'react-router-dom';

const MyPageNickEdit =() => {
    const navigate = useNavigate();
    return<>
    <div className="NicknameEdit">
    <div className="NicknameEdit_Title">사용자 정보 변경</div>
    <form>
    <div className="NicknameEdit_Content">
        <p className="NicknameEdit_Content_Title">닉네임</p>
        <input type='text' className='NicknameEdit_Content_Text'></input>
    </div>
    <div className="NicknameEdit_Btn">
        <Link to='/MyPage/Edit'>
        <button className="NicknameEdit_Btn_submit">확인 페이지로 이동</button></Link>
        <Link to='/MyPage/Edit'>
        <button className="NicknameEdit_Btn_cancel">뒤로</button></Link>
    </div>
    </form>
    </div>
    </>
} 

export default MyPageNickEdit;