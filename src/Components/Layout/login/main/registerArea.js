import './css/registerArea.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const RegisterArea = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id, pwd } = location.state || {};   
    const [address, setAddress] = useState(1);
    const goTOComplete = () => {
        navigate('/login/register_complete')
    }
    const handleAreaChange = (event) => {
        setAddress(Number(event.target.value)); // 선택된 value를 address에 저장
    };
    async function handlerRegister() {
        try {
            const response = await axios.post('http://localhost:8080/api/users/membership', { 
              id: id,
              pwd: pwd,
              nick: id,
              address: address,
              role : "USER",
              alarm : 0,
              bookmark : null,
              recent : null
            });
            // 성공 시
            console.log(response.data); // 응답 데이터 확인
            goTOComplete();
          } catch (error) {
            // 실패 시
            window.alert("회원가입에 오류가 생겼습니다 다시 처음부터 시작 바랍니다.")
            console.error(error);
          }
    }
    return<>
    <p className="title">거주 지역 선택</p>
    <p className="Area_Message">거주 중인 지역을 선택하여<br/>지역 게시판 혜택을 누려보세요.</p>
    <form className="Area_Form">
        <select name="area" className="area_select" value={address} 
                onChange={handleAreaChange} >
            <option value={1} className="area_option" >큐슈</option>
            <option value={2} className="area_option">주코쿠</option>
            <option value={3} className="area_option">시코쿠</option>
            <option value={4} className="area_option">주부</option>
            <option value={5} className="area_option">간사이</option>
            <option value={6} className="area_option">간토</option>
            <option value={7} className="area_option">도호쿠</option>
            <option value={8} className="area_option">훗카이도</option>
        </select>
        <button className="Register_Area__Btn" type="button" onClick={handlerRegister}>거주 지역 등록</button>
    </form>
    </>
}

export default RegisterArea;