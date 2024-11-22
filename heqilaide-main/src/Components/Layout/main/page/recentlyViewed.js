import './css/recentlyViewed.css';
import { IoIosStarOutline } from "react-icons/io";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";   
import { AiOutlinePicture } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import RecComponents from './components/favRecnent.js';
import { LuClock5 } from "react-icons/lu";

const RecentlyViewed = () => {
    const navigate = useNavigate();
    const goToMyPage = () => {
        navigate(`/mypage`);
    }
    const todos = [
        {
          id: 1,
          name: "윈디아 야마모토 201",
          money: 4.4,
          address: "마쓰모토시 오자리 산변",
          content: "3DK"
        },
        {
          id: 2,
          name: "웨스트민스터 고쇼니시 402",
          money: 7,
          address: "요나고시 히가시후쿠하라 2가 14-21",
          content: "2LDK"
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
    <div className="RecentlyViewed">
    <div className="RecentlyViewed_Header">
        <div className="RecentlyViewed_Header_Channel">
            <p className="RecentlyViewed_Header_Channel_MyPage">내페이지</p>
            <p> &gt;</p>
            <p>최근 본 물건</p>
        </div>
        <div className="RecentlyViewed_Header_Title">
            <div className="RecentlyViewed_Header_Title_1">
                <LuClock5 className='RecentlyViewed_Header_Title_1_Img' />
                <p className="RecentlyViewed_Header_Title_1_Text">최근 본 물건</p>
            </div>
        </div>
    </div>
    <div className="RecentlyViewed_Type">
        <div className="RecentlyViewed_Type_1">
            <div className="RecentlyViewed_Type_1_con">
                <p className="RecentlyViewed_Type_1_con_1">월세(8)</p>
                <p className="RecentlyViewed_Type_1_con_2">매매(0)</p>
            </div>
            <div className="RecentlyViewed_Type_1_Text">
                <p >최대 20건</p>
            </div>
        </div>
        <div className="RecentlyViewed_Type_2">
            <div className="RecentlyViewed_Type_2_Checkbox">
                <div className="RecentlyViewed_Type_2_Checkbox_1">
                <input type="checkbox" className="RecentlyViewed_Type_2_Checkbox_Chx" id='RecentlyViewed_Type_2_Checkbox_1'/>
                <label for="RecentlyViewed_Type_2_Checkbox_1"><span>아파트</span></label>
                </div>
                <div className="RecentlyViewed_Type_2_Checkbox_2">
                <input type="checkbox" className="RecentlyViewed_Type_2_Checkbox_Chx" id='RecentlyViewed_Type_2_Checkbox_2'/>
                <label for="RecentlyViewed_Type_2_Checkbox_2"><span>빌라</span></label>
                </div>
            </div>
        </div>
    </div>
    <div className="RecentlyViewed_Main">
        <div className="RecentlyViewed_Main_Btn">
        <div className="RecentlyViewed_Main_Btn_1">
        <input type="checkbox" className="RecentlyViewed_Main_Btn_Chx" id='RecentlyViewed_Main_Btn_Chx' />
        <label for="RecentlyViewed_Main_Btn_Chx"><span>All Check</span></label>
        </div>
        <div className="RecentlyViewed_Main_Btn_2">
        <select name="area" className="RecentlyViewed_Main_Btn_2_select" >
            <option value="Order" className="RecentlyViewed_Main_Btn_2_option" selected>등록된 순서</option>
            <option value="Cheap" className="RecentlyViewed_Main_Btn_2_option">싼 순서</option>
            <option value="Expensive" className="RecentlyViewed_Main_Btn_2_option">비싼 순서</option>
        </select>
        </div>
        </div>
        <div className="RecentlyViewed_Main_Content">
        {todos.map((v)=> {
                return(
                    <RecComponents
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
    <div className="RecentlyViewed_Number">
       <div>
            <p className="RecentlyViewed_Number_1">1</p>
            <p className="RecentlyViewed_Number_2">2</p>
        </div>
    </div>
    </div>
    </>
}

function BtnClick() {
    const star1 = document.getElementById('RecentlyViewed_Main_Content_1_Star1');
    const star2 = document.getElementById('RecentlyViewed_Main_Content_1_Star2');

    if(star2.style.display === 'none') {
        star2.style.display = 'block';
        star1.style.display = 'none';
    }else{
        star2.style.display = 'none';
        star1.style.display = 'block';
    }
}

export default RecentlyViewed;