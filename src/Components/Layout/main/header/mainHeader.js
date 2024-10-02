import './mainHeader.css'
import { Link,useNavigate } from 'react-router-dom';

const MainHeader = () => {
    const navigate = useNavigate();
    const goToMyPage = () => {
        navigate('/MyPage');
      };
      const goToMainPage = () => {
        navigate('/');
      };
    const goToFavorites = () => {
        navigate(`/MyPage/Favorites`);
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
            <div className="mainRecent_Menu">
            <p>최근 본 물건</p>
            <Link to="/MyPage/RecentlyViewed">
            <div className="mainRecent_Img"></div>
            </Link>
            </div>
            <div className="mainFavorite_Menu">
            <p>즐겨찾기</p>
            <div className="mainFavorite_Img" onClick={goToFavorites}></div>
            </div>
            <div className="mainMypage_Menu" onClick={goToMyPage}>
            <p>마이메뉴</p>
            <div className="mainMypage_Img"></div>
            </div>
            </div>
        </div>

        {/* <nav className="navigation">
            <ul>
                <li>
                    메뉴1
                </li>
                <li>
                    메뉴2
                </li>
            </ul>
        </nav> */}
    </header>
    
    </>
}

export default MainHeader; 