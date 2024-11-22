import './mainHeader.css'
import { Link,useNavigate } from 'react-router-dom';
import { LuClock5 } from "react-icons/lu";
import { IoIosStarOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdLogin } from "react-icons/md";

const MainHeader = () => {
    const navigate = useNavigate();
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
    const test = [
        {
        key: 1,
        id: "abcd",
        pwd: "qwer1234",
        admin: 1
        },
        {
            key: 1,
            id: "abcdf",
            pwd: "qwer",
            admin: 0   
        }

    ]
    const testid = (admin) =>{
        if(admin === 0){
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
        }else if(admin ===  1){
            return<>
            <div className="mainMypage_Admin" onClick={goToMyPage}>
        <p>관리자페이지</p>
        <IoMenu className="mainMypage_Img"/>
        </div>
            </>
        }else {
            return<>
            <div className="mainMypage_Admin" onClick={goToMyPage}>
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
            {testid(0)}
            </div>
        </div>
    </header>
    
    </>
}


export default MainHeader; 