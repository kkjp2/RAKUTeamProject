import './css/registerArea.css';
import { useNavigate } from 'react-router-dom';

const RegisterArea = () => {
    const navigate = useNavigate();
    const goTOComplete = () => {
        navigate('/login/register_complete')
    }
    return<>
    <p className="title">거주 지역 선택</p>
    <p className="Area_Message">거주 중인 지역을 선택하여<br/>지역 게시판 혜택을 누려보세요.</p>
    <form className="Area_Form">
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
        <button className="Register_Area__Btn" onClick={goTOComplete}>거주 지역 등록</button>
    </form>
    </>
}

export default RegisterArea;