import './css/recentlyViewed.css';
import { IoIosStarOutline } from "react-icons/io";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";   
import { AiOutlinePicture } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';

const RecentlyViewed = () => {
    return<>
    <div className="RecentlyViewed">
    <div className="RecentlyViewed_Header">
        <div className="RecentlyViewed_Header_Channel">
        <Link to="/MyPage">
            <p className="RecentlyViewed_Header_Channel_MyPage">내페이지</p>
        </Link>
            <p> &gt;</p>
            <p>최근 본 물건</p>
        </div>
        <div className="RecentlyViewed_Header_Title">
            <div className="RecentlyViewed_Header_Title_1">
                <IoIosStarOutline className='RecentlyViewed_Header_Title_1_Img' />
                <p className="RecentlyViewed_Header_Title_1_Text">최근 본 물건</p>
            </div>
            {/* <div className="RecentlyViewed_Header_Title_2">
                <button className="RecentlyViewed_Header_Title_2_Btn">
                    <HiOutlineClipboardDocumentList className="RecentlyViewed_Header_Title_2_Btn_Img" />
                    <p className="RecentlyViewed_Header_Title_2_Btn_Text">비교표에서 보기</p>
                </button>
            </div> */}
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
                <input type="checkbox" className="RecentlyViewed_Type_2_Checkbox_Chx" id='RecentlyViewed_Type_2_Checkbox_1' checked />
                <label for="RecentlyViewed_Type_2_Checkbox_1"><span>아파트</span></label>
                </div>
                <div className="RecentlyViewed_Type_2_Checkbox_2">
                <input type="checkbox" className="RecentlyViewed_Type_2_Checkbox_Chx" id='RecentlyViewed_Type_2_Checkbox_2' checked />
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
            <div className="RecentlyViewed_Main_Content_1">
                <div className="RecentlyViewed_Main_Content_1_Box">
                    <div className="RecentlyViewed_Main_Content_1_Star">
                    <IoIosStarOutline className='RecentlyViewed_Main_Content_1_Star1' id='RecentlyViewed_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='RecentlyViewed_Main_Content_1_Star2' id='RecentlyViewed_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Checkbox">
                        <input type="checkbox" className="RecentlyViewed_Main_Content_1_Checkbox_Chx" id='RecentlyViewed_Main_Content_1_Checkbox_Chx' />
                        <label for="RecentlyViewed_Main_Content_1_Checkbox_Chx"/>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Main">
                        <p className="RecentlyViewed_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="RecentlyViewed_Main_Content_1_Main_Title_2">플래티 센본지 노우치 북쪽 302</p>
                        {/* <img className="RecentlyViewed_Main_Content_1_Main_Img"/>
                         */}
                         {<AiOutlinePicture  className="RecentlyViewed_Main_Content_1_Main_Img"/>}

                        <p className="RecentlyViewed_Main_Content_1_Main_Rent">**만엔</p>
                        <p className="RecentlyViewed_Main_Content_1_Main_Location">교토시 카미쿄구 엔마마에초</p>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Text">
                        <p className="RecentlyViewed_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Arrangement_2">1K</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Width_1">너비</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Btn">
                        <button className="RecentlyViewed_Main_Content_1_Btn1"><IoIosMail className="RecentlyViewed_Main_Content_1_Btn1_Img" />메일문의</button>
                    </div>
                </div>
            </div>
            <div className="RecentlyViewed_Main_Content_1">
            <div className="RecentlyViewed_Main_Content_1_Box">
                    <div className="RecentlyViewed_Main_Content_1_Star">
                    <IoIosStarOutline className='RecentlyViewed_Main_Content_1_Star1' id='RecentlyViewed_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='RecentlyViewed_Main_Content_1_Star2' id='RecentlyViewed_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Checkbox">
                        <input type="checkbox" className="RecentlyViewed_Main_Content_1_Checkbox_Chx" id='RecentlyViewed_Main_Content_1_Checkbox_Chx' />
                        <label for="RecentlyViewed_Main_Content_1_Checkbox_Chx"/>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Main">
                        <p className="RecentlyViewed_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="RecentlyViewed_Main_Content_1_Main_Title_2">플래티 센본지 노우치 북쪽 302</p>
                        {/* <img className="RecentlyViewed_Main_Content_1_Main_Img"/>
                         */}
                         {<AiOutlinePicture  className="RecentlyViewed_Main_Content_1_Main_Img"/>}

                        <p className="RecentlyViewed_Main_Content_1_Main_Rent">**만엔</p>
                        <p className="RecentlyViewed_Main_Content_1_Main_Location">교토시 카미쿄구 엔마마에초</p>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Text">
                        <p className="RecentlyViewed_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Arrangement_2">1K</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Width_1">너비</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Btn">
                        <button className="RecentlyViewed_Main_Content_1_Btn1"><IoIosMail className="RecentlyViewed_Main_Content_1_Btn1_Img" />메일문의</button>
                    </div>
                </div>
            </div>
            <div className="RecentlyViewed_Main_Content_1">
            <div className="RecentlyViewed_Main_Content_1_Box">
                    <div className="RecentlyViewed_Main_Content_1_Star">
                    <IoIosStarOutline className='RecentlyViewed_Main_Content_1_Star1' id='RecentlyViewed_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='RecentlyViewed_Main_Content_1_Star2' id='RecentlyViewed_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Checkbox">
                        <input type="checkbox" className="RecentlyViewed_Main_Content_1_Checkbox_Chx" id='RecentlyViewed_Main_Content_1_Checkbox_Chx' />
                        <label for="RecentlyViewed_Main_Content_1_Checkbox_Chx"/>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Main">
                        <p className="RecentlyViewed_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="RecentlyViewed_Main_Content_1_Main_Title_2">플래티 센본지 노우치 북쪽 302</p>
                        {/* <img className="RecentlyViewed_Main_Content_1_Main_Img"/>
                         */}
                         {<AiOutlinePicture  className="RecentlyViewed_Main_Content_1_Main_Img"/>}

                        <p className="RecentlyViewed_Main_Content_1_Main_Rent">**만엔</p>
                        <p className="RecentlyViewed_Main_Content_1_Main_Location">교토시 카미쿄구 엔마마에초</p>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Text">
                        <p className="RecentlyViewed_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Arrangement_2">1K</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Width_1">너비</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Btn">
                        <button className="RecentlyViewed_Main_Content_1_Btn1"><IoIosMail className="RecentlyViewed_Main_Content_1_Btn1_Img" />메일문의</button>
                    </div>
                </div>
            </div>
            <div className="RecentlyViewed_Main_Content_1">
            <div className="RecentlyViewed_Main_Content_1_Box">
                    <div className="RecentlyViewed_Main_Content_1_Star">
                    <IoIosStarOutline className='RecentlyViewed_Main_Content_1_Star1' id='RecentlyViewed_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='RecentlyViewed_Main_Content_1_Star2' id='RecentlyViewed_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Checkbox">
                        <input type="checkbox" className="RecentlyViewed_Main_Content_1_Checkbox_Chx" id='RecentlyViewed_Main_Content_1_Checkbox_Chx' />
                        <label for="RecentlyViewed_Main_Content_1_Checkbox_Chx"/>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Main">
                        <p className="RecentlyViewed_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="RecentlyViewed_Main_Content_1_Main_Title_2">플래티 센본지 노우치 북쪽 302</p>
                        {/* <img className="RecentlyViewed_Main_Content_1_Main_Img"/>
                         */}
                         {<AiOutlinePicture  className="RecentlyViewed_Main_Content_1_Main_Img"/>}

                        <p className="RecentlyViewed_Main_Content_1_Main_Rent">**만엔</p>
                        <p className="RecentlyViewed_Main_Content_1_Main_Location">교토시 카미쿄구 엔마마에초</p>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Text">
                        <p className="RecentlyViewed_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Arrangement_2">1K</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Width_1">너비</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Btn">
                        <button className="RecentlyViewed_Main_Content_1_Btn1"><IoIosMail className="RecentlyViewed_Main_Content_1_Btn1_Img" />메일문의</button>
                    </div>
                </div>
            </div>
            <div className="RecentlyViewed_Main_Content_1">
            <div className="RecentlyViewed_Main_Content_1_Box">
                    <div className="RecentlyViewed_Main_Content_1_Star">
                    <IoIosStarOutline className='RecentlyViewed_Main_Content_1_Star1' id='RecentlyViewed_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='RecentlyViewed_Main_Content_1_Star2' id='RecentlyViewed_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Checkbox">
                        <input type="checkbox" className="RecentlyViewed_Main_Content_1_Checkbox_Chx" id='RecentlyViewed_Main_Content_1_Checkbox_Chx' />
                        <label for="RecentlyViewed_Main_Content_1_Checkbox_Chx"/>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Main">
                        <p className="RecentlyViewed_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="RecentlyViewed_Main_Content_1_Main_Title_2">플래티 센본지 노우치 북쪽 302</p>
                        {/* <img className="RecentlyViewed_Main_Content_1_Main_Img"/>
                         */}
                         {<AiOutlinePicture  className="RecentlyViewed_Main_Content_1_Main_Img"/>}

                        <p className="RecentlyViewed_Main_Content_1_Main_Rent">**만엔</p>
                        <p className="RecentlyViewed_Main_Content_1_Main_Location">교토시 카미쿄구 엔마마에초</p>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Text">
                        <p className="RecentlyViewed_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Arrangement_2">1K</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Width_1">너비</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="RecentlyViewed_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="RecentlyViewed_Main_Content_1_Btn">
                        <button className="RecentlyViewed_Main_Content_1_Btn1"><IoIosMail className="RecentlyViewed_Main_Content_1_Btn1_Img" />메일문의</button>
                    </div>
                </div>
            </div>
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