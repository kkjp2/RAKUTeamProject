import './css/myPage.css';
import { Link,useNavigate } from 'react-router-dom';

const MyPage = () => {
    const navigate = useNavigate();
    const goToFavorites = () => {
        navigate(`/mypage/favorites`);
    }
    const goToEdit = () => {
        navigate(`/mypage/edit`);
    }
    const goToRecentlyViewed = () => {
        navigate(`/mypage/recentlyviewed`);
    }
    const goToInquiry = () => {
        navigate(`/mypage/inquirydetail`);
    }
    const goToAnnouncement = () => {
        navigate(`/main/announcement`);
    }
    return <> 
    <div className="MyPage">
    <div className="MyPage_Title">
        <div className="MyPage_Title_1">
            <p className="MyPage_Title_1_Maintitle">My Page</p>
            <span className='MyPage_Title_1_2'>
            <button className="MyPage_Title_1_Btn" onClick={goToEdit}>사용자 수정</button>
            </span>
        </div>
        <div className="MyPage_Title_2">
            <p className="MyPage_Title_2_title">test씨</p>
            <div><button className="MyPage_Title_2_Btn" onClick={goToEdit}>로그아웃</button></div>
        </div>

    </div>
    <div className="MyPage_Main">
        <span className="MyPage_Main_Favorites">
            <button className="MyPage_Main_Favorites_Btn" onClick={goToFavorites} >
                <div className="MyPage_Main_Favorites_Btn_Img"></div>
                <p className="MyPage_Main_Favorites_Btn_Text" >즐겨찾기</p>
            </button>
        </span>
        <span className="MyPage_Main_Comparison">
        <button className="MyPage_Main_Comparison_Btn">
            <div className="MyPage_Main_Comparison_Btn_Img"></div>
            <p className="MyPage_Main_Comparison_Btn_Text">게시판 마이페이지</p>
            </button>
        </span>
        <span className="MyPage_Main_Recent">
            <button className="MyPage_Main_Recent_Btn" onClick={goToRecentlyViewed}>
                <div className="MyPage_Main_Recent_Btn_Img"></div>
            <p className="MyPage_Main_Recent_Btn_Text">최근 본 물건</p>
            </button>
        </span>
        <span className="MyPage_Main_inquiry">
            <button className="MyPage_Main_inquiry_Btn" onClick={goToInquiry}>
                <div className="MyPage_Main_inquiry_Btn_Img"></div>
            <p className="MyPage_Main_inquiry_Btn_Text">문의 이력</p>
            </button>
        </span>
    </div>
    <div className="MyPage_Notice">
        <p className="MyPage_Notice_Title">추천 게시판</p>
        <div className="MyPage_Notice_Main">
            <div className="MyPage_Notice_Main_Group">
            <div className="MyPage_Notice_Main_Img">
                <img className="MyPage_Notice_Main_Img_I" alt='현재 사진이 없음'/>
            </div>
            
            <div className="MyPage_Notice_Main_Text">
                <p className="MyPage_Notice_Main_Text_Title">게시판 제목</p>
                <p className="MyPage_Notice_Main_Text_Content">게시판 내용</p>
            </div>
           
            </div>
            <div className="MyPage_Notice_Main_Group">
            <div className="MyPage_Notice_Main_Img">
                <img className="MyPage_Notice_Main_Img_I" alt='현재 사진이 없음'/>
            </div>
            <div className="MyPage_Notice_Main_Text">
            <p className="MyPage_Notice_Main_Text_Title">게시판 제목</p>
            <p className="MyPage_Notice_Main_Text_Content">게시판 내용</p>
            </div>
            </div>
            <div className="MyPage_Notice_Main_Group">
            <div className="MyPage_Notice_Main_Img">
                <img className="MyPage_Notice_Main_Img_I" alt='현재 사진이 없음'/>
            </div>
            <div className="MyPage_Notice_Main_Text">
            <p className="MyPage_Notice_Main_Text_Title">게시판 제목</p>
            <p className="MyPage_Notice_Main_Text_Content">게시판 내용</p>
            </div>
            </div>
        </div>
    </div>
    <div className="MyPage_News" >
    <div className="MyPage_News_Message">
            <p className="MyPage_News_Title">RAKU'S 뉴스</p>
            <div className="MyPage_News_Btn_Area">
                <button className="MyPage_News_Btn" onClick={goToAnnouncement}>더 보기</button>
            </div>
            
        </div>
        <div className="MyPage_News_Content" onClick={goToAnnouncement}>
            <p className="MyPage_News_Content_Day">
                2024-10-16
            </p>
            <p className="MyPage_News_Content_Title">
                UI 새로 개편
            </p>
        </div>
    </div>
    </div>


    </>
}

export default MyPage;