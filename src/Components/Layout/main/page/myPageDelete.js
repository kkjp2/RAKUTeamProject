import { Link, useNavigate } from 'react-router-dom';
import './css/myPageDelete.css'

const MyPageDelete = () => {
    const navigate = useNavigate();
    const deleteUser = () => {

    }
    const goToMain =() => {
        navigate(`/main`)
    }
    const goToMypageEdit =() => {
        navigate(`/mypage/edit`)
    }
    return<>
    <div className="DeleteEdit">
    <div className="DeleteEdit_Title">계정 삭제</div>
    <div className="DeleteEdit_Content1">계정을 삭제하기 전에 저장된 데이터가 사라지거나 사용할 수 없게 되는 기능이 있는지 확인하세요.</div>
    <div className="DeleteEdit_Content2">
        <ul>
            <li>신착 알림 메일(임대·매매)</li>
            <li>임대 매매의 즐겨찾기・열람 이력・저장한 조건</li>
            <li>부동산 투자의 마음에 드는 물건, 보존한 조건</li>
        </ul>
    </div>
    <form>
    <div className="DeleteEdit_Content3">
        <input type="checkbox" className="DeleteEdit_Content_checkbox" id='DeleteEdit_Content_checkbox' />
        <label for="DeleteEdit_Content_checkbox"><span>계정 삭제에 동의함</span></label>
    </div>

    <div className="DeleteEdit_Btn">
        <button className="DeleteEdit_Btn_submit" onClick={deleteUser}>계정 삭제하기</button>
        <button className="DeleteEdit_Btn_cancel" onClick={mypage/edit}>뒤로</button>
        <div className="DeleteEdit_Btn_Content">
        변경한 뒤로 전 지역의 게시판은 생성 및 수정이 불가합니다.
        </div>
    </div>
    
    </form>
    </div>
    </>
}

export default MyPageDelete;