import './header.css'

const Header = () => {

    return <>
    <header className="header">
        <div className="content">
            <p className="Logo">RAKU</p>
            <div className="Realty_Menu">
            <div className="Category_Menu">
            <p> 카테고리 검색</p>
            </div>
            <div className="Map_Menu" >
            <p > 지도 검색</p>
            </div>
            <div className="Sell_Menu">
            <p > 부동산 팔기 문의</p>
            </div>
            </div>
            <div className="My_Menu">
            <div className="Recent_Menu">
            <p>최근 본 물건</p>
            <div className="Recent_Img"></div>
            </div>
            <div className="Favorite_Menu">
            <p>즐겨찾기</p>
            <div className="Favorite_Img"></div>
            </div>
            <div className="Mypage_Menu">
            <p>마이메뉴</p>
            <div className="Mypage_Img"></div>
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

export default Header; 