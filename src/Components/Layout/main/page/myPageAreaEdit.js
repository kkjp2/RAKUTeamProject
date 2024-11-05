import { Link, useNavigate } from 'react-router-dom';
import './css/myPageAreaEdit.css';

const MyPageAreaEdit =() => {
    const navigate = useNavigate();
    const goToMypage = () => {
        navigate(`/mypage/edit`);
    }
    const modifyMyArea = () =>{

    }
    return<>
    <div className="AreaEdit">
    <div className="AreaEdit_Title">거주 지역 변경</div>
    <div className="AreaEdit_Content">거주 지역을 변경해주세요 <br/>변경된 지역의 게시판을 이용할 수 있습니다.</div>
    <form>
    <div className="AreaEdit_Content">
        <select name="area" className="area_select" >
            <option value="Kyushu" className="area_option" >큐슈</option>
            <option value="Chugoku" className="area_option">주코쿠</option>
            <option value="Shikoku" className="area_option">시코쿠</option>
            <option value="Chubu" className="area_option">주부</option>
            <option value="Kansai" className="area_option">간사이</option>
            <option value="Kanto" className="area_option" selected>간토</option>
            <option value="Tohoku" className="area_option">도호쿠</option>
            <option value="Hokkaido" className="area_option">훗카이도</option>
        </select>
    </div>
    <div className="AreaEdit_Btn">
        <button className="AreaEdit_Btn_submit" onClick={modifyMyArea}>지역 변경하기</button>
        <button className="AreaEdit_Btn_cancel" onCilck={goToMypage}>뒤로</button>
        변경한 뒤로 전 지역의 게시판은 생성 및 수정이 불가합니다.
        </div>
    </div>
    
    </form>
    </div>
    </>
}

export default MyPageAreaEdit;