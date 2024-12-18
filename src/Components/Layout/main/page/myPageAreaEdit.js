import { Link, useNavigate } from 'react-router-dom';
import './css/myPageAreaEdit.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';



const MyPageAreaEdit =() => {
    const navigate = useNavigate();
    const [address, setAddress] = useState(1);
    const goToMypage = () => {
        navigate(`/mypage/edit`);
    }
    const handleAreaChange = (event) => {
        setAddress(Number(event.target.value)); // 선택된 value를 address에 저장
    };
    async function EditArea() {
        const accessToken = window.sessionStorage.getItem('accesstoken');
        console.log(accessToken);
            try {
              await axios.post('http://localhost:8080/api/mypage/addressedit',  {
                address: address // 요청 본문
            }, 
            {
                headers: { // 요청 헤더
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });
              // 성공 시
              navigate(`/mypage/edit`);
            } catch (error) {
              // 실패 시
              console.error(error);
            }
          }; 
    return<>
    <div className="AreaEdit">
    <div className="AreaEdit_Title">거주 지역 변경</div>
    <div className="AreaEdit_Content">거주 지역을 변경해주세요 <br/>변경된 지역의 게시판을 이용할 수 있습니다.</div>
    <form>
    <div className="AreaEdit_Content">
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
    </div>
    <div className="AreaEdit_Btn">
        <button className="AreaEdit_Btn_submit" type="button" onClick={EditArea}>지역 변경하기</button>
        <button className="AreaEdit_Btn_cancel" onCilck={goToMypage}>뒤로</button>
        변경한 뒤로 전 지역의 게시판은 생성 및 수정이 불가합니다.
        </div>
    </form>
    </div>
    </>
}

export default MyPageAreaEdit;