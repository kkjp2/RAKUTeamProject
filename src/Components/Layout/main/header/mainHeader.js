import './mainHeader.css'
import { Link,useNavigate } from 'react-router-dom';
import { LuClock5 } from "react-icons/lu";
import { IoIosStarOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

const MainHeader = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(true); // 로딩 상태
    const goToMyPage = () => {
        navigate('/mypage');
      };
    const goToFavorites = () => {
        navigate(`/myPage/favorites`);
    }
    const goToRecentlyViewed = () => {
        navigate(`/myPage/recentlyViewed`);
    }
      const goToMainPage = () => {
        navigate('/main');
      };
    const goToLogin = () => {
        navigate('/login');
    }
    const Login = window.sessionStorage.getItem('accesstoken');
    async function checkUser() {
        const accessToken = window.sessionStorage.getItem('accesstoken');
        try {
            const response = await axios.get('http://localhost:8080/api/users/checkuser', { 
              headers : {
                Authorization: `Bearer ${accessToken}`
              }
            });
            // 성공 시
            console.log(response.data); // 응답 데이터 확인
            setRole(response.data);
            return testid("USER");
          } catch (error) {
            // 실패 시
            console.error(error);
            setRole(null);
          }finally {
            setLoading(false); // 로딩 상태 종료
        }
    }
    const hasExecuted = useRef(false);

    useEffect(() => {
        if (Login) {
            checkUser();
        } else {
            setLoading(false); // 로그인되지 않은 경우 로딩 종료
        }
    }, [Login]); // Login 변경 시 실행

    const testid = () =>{
        if(role === "USER" || role === "MANAGER"){
        return<>
        <div className="mainRecent_Menu" onClick={goToRecentlyViewed}>
        <p>최근 본 물건</p>
        <LuClock5 className="mainRecent_Img" />
        </div>
        <div className="mainFavorite_Menu" onClick={goToFavorites}>
        <p>즐겨찾기</p>
        <IoIosStarOutline className="mainFavorite_Img" />
        </div>
        <div className="mainMypage_Menu" onClick={goToMyPage}>
        <p>마이메뉴</p>
        <IoMenu className="mainMypage_Img"/>
        </div>
        </> 
        }else if(role === "ADMIN"){
            return<>
            <div className="mainMypage_Admin" onClick={goToMyPage}>
        <p>관리자페이지</p>
        <IoMenu className="mainMypage_Img"/>
        </div>
            </>
        }else {
            return<>
            <div className="mainMypage_Admin" onClick={goToLogin}>
            <p>Login</p>
            <MdLogin className="mainMypage_Img"/>
            </div>
            </>
        }
    }
    return <>
    <header className="mainHeader">
        <div className="mainContent">
            <p className="mainLogo" onClick={goToMainPage}>RAKU</p>
            <div className="mainRealty_Menu">
            <div className="mainCategory_Menu">
            <p> 카테고리 검색</p>
            </div>
            <div className="mainMap_Menu" >
            <p > 지도 검색</p>
            </div>
            <div className="mainSell_Menu">
            <p > 부동산 팔기 문의</p>
            </div>
            </div>
            <div className="mainMy_Menu">
                {testid()}
            </div>
        </div>
    </header>
    </>
}


export default MainHeader; 