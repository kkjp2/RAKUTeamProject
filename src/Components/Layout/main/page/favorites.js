import './css/favorites.css';
import FavoritesImg from '../png/Favorite_50.png';
import { IoIosStarOutline } from "react-icons/io";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";   
import { AiOutlinePicture } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import FavComponents from './components/favRecnent.js';
const Favorites = () => {
    const navigate = useNavigate();
    const gotoMyPage = () => {
        navigate(`/mypage`);
    }
    const todos = [
        {
          id: 1,
          name: "플래티 센본지 노우치 북쪽 302",
          money: 6.1,
          address: "교토시 카미쿄구 엔마마에초",
          content: "1K"
        },
        {
          id: 2,
          name: "하루코 이즈미 101",
          money: 4.35,
          address: "쿠라요시시 후쿠야마 1082-1",
          content: "1LDK"
        },
        {
          id: 3,
          name: "가다다",
          money: 200,
          address: "훗카이도",
          content: "내용 3"
        }, 
        {
          id: 4,
          name: "플래티 센본지 노우치 북쪽 302",
          money: 400,
          address: "교토시 카미쿄구 엔마마에초",
          content: "1K"
        },
        {
            id: 5,
          name: "플래티 센본지 노우치 북쪽 302",
          money: 400,
          address: "교토시 카미쿄구 엔마마에초",
          content: "1K"
        },
      ];
    return<>
    <div className="Favorites">
    <div className="Favorites_Header">
        <div className="Favorites_Header_Channel">
            <p className="Favoites_Header_Channel_MyPage" onClick={gotoMyPage}>내페이지</p>
            <p> &gt;</p>
            <p>즐겨찾기</p>
        </div>
        <div className="Favorites_Header_Title">
            <div className="Favorites_Header_Title_1">
                <IoIosStarOutline className='Favorites_Header_Title_1_Img' />
                <p className="Favorites_Header_Title_1_Text">즐겨찾기</p>
            </div>
        </div>
    </div>
    <div className="Favorites_Type">
        <div className="Favorite_Type_1">
            <div className="Favorite_Type_1_con">
                <p className="Favorite_Type_1_con_1">월세(8)</p>
                <p className="Favorite_Type_1_con_2">매매(0)</p>
            </div>
            <div className="Favorite_Type_1_Text">
                <p >최대 20건</p>
            </div>
        </div>
        <div className="Favorite_Type_2">
            <div className="Favorite_Type_2_Checkbox">
                <div className="Favorite_Type_2_Checkbox_1">
                <input type="checkbox" className="Favorite_Type_2_Checkbox_Chx" id='Favorite_Type_2_Checkbox_1' />
                <label for="Favorite_Type_2_Checkbox_1"><span>아파트</span></label>
                </div>
                <div className="Favorite_Type_2_Checkbox_2">
                <input type="checkbox" className="Favorite_Type_2_Checkbox_Chx" id='Favorite_Type_2_Checkbox_2' />
                <label for="Favorite_Type_2_Checkbox_2"><span>빌라</span></label>
                </div>
            </div>
        </div>
    </div>
    <div className="Favorites_Main">
        <div className="Favorites_Main_Btn">
        <div className="Favorites_Main_Btn_1">
        <input type="checkbox" className="Favorites_Main_Btn_Chx" id='Favorites_Main_Btn_Chx' />
        <label for="Favorites_Main_Btn_Chx"><span>All Check</span></label>
        </div>
        <div className="Favorites_Main_Btn_2">
        <select name="area" className="Favorites_Main_Btn_2_select" >
            <option value="Order" className="Favorites_Main_Btn_2_option" selected>등록된 순서</option>
            <option value="Cheap" className="Favorites_Main_Btn_2_option">싼 순서</option>
            <option value="Expensive" className="Favorites_Main_Btn_2_option">비싼 순서</option>
        </select>
        </div>
        </div>
        <div className="Favorites_Main_Content">
            {todos.map((v)=> {
                return(
                    <FavComponents
                        id={v.id}
                        name={v.name}
                        money={v.money}
                        address={v.address}
                        content={v.content}
                    />
                )
            })
            }    
        </div>
    </div>
    <div className="Favorites_Number">
       <div>
            <p className="Favorites_Number_1">1</p>
            <p className="Favorites_Number_2">2</p>
        </div>
    </div>
    </div>
    </>
}

function BtnClick() {
    const star1 = document.getElementById('Favorites_Main_Content_1_Star1');
    const star2 = document.getElementById('Favorites_Main_Content_1_Star2');

    if(star2.style.display === 'none') {
        star2.style.display = 'block';
        star1.style.display = 'none';
    }else{
        star2.style.display = 'none';
        star1.style.display = 'block';
    }
}

export default Favorites;