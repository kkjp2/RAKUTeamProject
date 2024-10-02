import './css/InquiryDetail.css';
import { IoIosStarOutline } from "react-icons/io";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";   
import { AiOutlinePicture } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';

const InquiryDetail = () => {
    return<>
    <div className="InquiryDetail">
    <div className="InquiryDetail_Header">
        <div className="InquiryDetail_Header_Channel">
        <Link to="/MyPage">
            <p className="InquiryDetail_Header_Channel_MyPage">내페이지</p>
        </Link>
            <p> &gt;</p>
            <p>문의 이력</p>
        </div>
        <div className="InquiryDetail_Header_Title">
            <div className="InquiryDetail_Header_Title_1">
                <p className="InquiryDetail_Header_Title_1_Text">문의 이력</p>
            </div>
            {/* <div className="InquiryDetail_Header_Title_2">
                <button className="InquiryDetail_Header_Title_2_Btn">
                    <HiOutlineClipboardDocumentList className="InquiryDetail_Header_Title_2_Btn_Img" />
                    <p className="InquiryDetail_Header_Title_2_Btn_Text">비교표에서 보기</p>
                </button>
            </div> */}
        </div>
    </div>
    {/* <div className="InquiryDetail_Type">
        <div className="InquiryDetail_Type_1">
            <div className="InquiryDetail_Type_1_con">
                <p className="InquiryDetail_Type_1_con_1">월세(8)</p>
                <p className="InquiryDetail_Type_1_con_2">매매(0)</p>
            </div>
            <div className="InquiryDetail_Type_1_Text">
                <p >최대 20건</p>
            </div>
        </div>
        <div className="InquiryDetail_Type_2">
            <div className="InquiryDetail_Type_2_Checkbox">
                <div className="InquiryDetail_Type_2_Checkbox_1">
                <input type="checkbox" className="InquiryDetail_Type_2_Checkbox_Chx" id='InquiryDetail_Type_2_Checkbox_1' checked />
                <label for="InquiryDetail_Type_2_Checkbox_1"><span>아파트</span></label>
                </div>
                <div className="InquiryDetail_Type_2_Checkbox_2">
                <input type="checkbox" className="InquiryDetail_Type_2_Checkbox_Chx" id='InquiryDetail_Type_2_Checkbox_2' checked />
                <label for="InquiryDetail_Type_2_Checkbox_2"><span>빌라</span></label>
                </div>
            </div>
        </div>
    </div> */}
    <div className="InquiryDetail_Main">
        {/* <div className="InquiryDetail_Main_Btn">
         <div className="InquiryDetail_Main_Btn_1">
        <input type="checkbox" className="InquiryDetail_Main_Btn_Chx" id='InquiryDetail_Main_Btn_Chx' />
        <label for="InquiryDetail_Main_Btn_Chx"><span>All Check</span></label>
        </div> 
        <div className="InquiryDetail_Main_Btn_2">
        <select name="area" className="InquiryDetail_Main_Btn_2_select" >
            <option value="Order" className="InquiryDetail_Main_Btn_2_option" selected>등록된 순서</option>
            <option value="Cheap" className="InquiryDetail_Main_Btn_2_option">싼 순서</option>
            <option value="Expensive" className="InquiryDetail_Main_Btn_2_option">비싼 순서</option>
        </select>
        </div>
        </div> */}
        <div className="InquiryDetail_Main_Content">
            <div className="InquiryDetail_Main_Content_1">
                <div className="InquiryDetail_Main_Content_1_Box">
                    {/* <div className="InquiryDetail_Main_Content_1_Star">
                    <IoIosStarOutline className='InquiryDetail_Main_Content_1_Star1' id='InquiryDetail_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='InquiryDetail_Main_Content_1_Star2' id='InquiryDetail_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div> */}
                    {/* <div className="InquiryDetail_Main_Content_1_Checkbox">
                        <input type="checkbox" className="InquiryDetail_Main_Content_1_Checkbox_Chx" id='InquiryDetail_Main_Content_1_Checkbox_Chx' />
                        <label for="InquiryDetail_Main_Content_1_Checkbox_Chx"/>
                    </div> */}
                    <div className="InquiryDetail_Main_Content_1_Main">
                        <p className="InquiryDetail_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="InquiryDetail_Main_Content_1_Main_Title_2">플래티 센본지 노우치 북쪽 302</p>
                        {/* <img className="InquiryDetail_Main_Content_1_Main_Img"/>
                         */}
                         {<AiOutlinePicture  className="InquiryDetail_Main_Content_1_Main_Img"/>}

                        <p className="InquiryDetail_Main_Content_1_Main_Rent">**만엔</p>
                        <p className="InquiryDetail_Main_Content_1_Main_Location">교토시 카미쿄구 엔마마에초</p>
                    </div>
                    <div className="InquiryDetail_Main_Content_1_Text">
                        <p className="InquiryDetail_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Arrangement_2">1K</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Width_1">너비</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="InquiryDetail_Main_Content_1_Btn">
                        <p className="InquiryDetail_Main_Content_1_Btn1"><IoIosMail className="InquiryDetail_Main_Content_1_Btn1_Img" />메일문의</p>
                    </div>
                </div>
            </div>
            <div className="InquiryDetail_Main_Content_1">
            <div className="InquiryDetail_Main_Content_1_Box">
                    {/* <div className="InquiryDetail_Main_Content_1_Star">
                    <IoIosStarOutline className='InquiryDetail_Main_Content_1_Star1' id='InquiryDetail_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='InquiryDetail_Main_Content_1_Star2' id='InquiryDetail_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div> */}
                    {/* <div className="InquiryDetail_Main_Content_1_Checkbox">
                        <input type="checkbox" className="InquiryDetail_Main_Content_1_Checkbox_Chx" id='InquiryDetail_Main_Content_1_Checkbox_Chx' />
                        <label for="InquiryDetail_Main_Content_1_Checkbox_Chx"/>
                    </div> */}
                    <div className="InquiryDetail_Main_Content_1_Main">
                        <p className="InquiryDetail_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="InquiryDetail_Main_Content_1_Main_Title_2">플래티 센본지 노우치 북쪽 302</p>
                        {/* <img className="InquiryDetail_Main_Content_1_Main_Img"/>
                         */}
                         {<AiOutlinePicture  className="InquiryDetail_Main_Content_1_Main_Img"/>}

                        <p className="InquiryDetail_Main_Content_1_Main_Rent">**만엔</p>
                        <p className="InquiryDetail_Main_Content_1_Main_Location">교토시 카미쿄구 엔마마에초</p>
                    </div>
                    <div className="InquiryDetail_Main_Content_1_Text">
                        <p className="InquiryDetail_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Arrangement_2">1K</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Width_1">너비</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="InquiryDetail_Main_Content_1_Btn">
                        <p className="InquiryDetail_Main_Content_1_Btn1"><IoIosMail className="InquiryDetail_Main_Content_1_Btn1_Img" />메일문의</p>
                    </div>
                </div>
            </div>
            <div className="InquiryDetail_Main_Content_1">
            <div className="InquiryDetail_Main_Content_1_Box">
                    {/* <div className="InquiryDetail_Main_Content_1_Star">
                    <IoIosStarOutline className='InquiryDetail_Main_Content_1_Star1' id='InquiryDetail_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='InquiryDetail_Main_Content_1_Star2' id='InquiryDetail_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div> */}
                    {/* <div className="InquiryDetail_Main_Content_1_Checkbox">
                        <input type="checkbox" className="InquiryDetail_Main_Content_1_Checkbox_Chx" id='InquiryDetail_Main_Content_1_Checkbox_Chx' />
                        <label for="InquiryDetail_Main_Content_1_Checkbox_Chx"/>
                    </div> */}
                    <div className="InquiryDetail_Main_Content_1_Main">
                        <p className="InquiryDetail_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="InquiryDetail_Main_Content_1_Main_Title_2">플래티 센본지 노우치 북쪽 302</p>
                        {/* <img className="InquiryDetail_Main_Content_1_Main_Img"/>
                         */}
                         {<AiOutlinePicture  className="InquiryDetail_Main_Content_1_Main_Img"/>}

                        <p className="InquiryDetail_Main_Content_1_Main_Rent">**만엔</p>
                        <p className="InquiryDetail_Main_Content_1_Main_Location">교토시 카미쿄구 엔마마에초</p>
                    </div>
                    <div className="InquiryDetail_Main_Content_1_Text">
                        <p className="InquiryDetail_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Arrangement_2">1K</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Width_1">너비</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="InquiryDetail_Main_Content_1_Btn">
                        <p className="InquiryDetail_Main_Content_1_Btn1"><IoIosMail className="InquiryDetail_Main_Content_1_Btn1_Img" />메일문의</p>
                    </div>
                </div>
            </div>
            <div className="InquiryDetail_Main_Content_1">
            <div className="InquiryDetail_Main_Content_1_Box">
                    {/* <div className="InquiryDetail_Main_Content_1_Star">
                    <IoIosStarOutline className='InquiryDetail_Main_Content_1_Star1' id='InquiryDetail_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='InquiryDetail_Main_Content_1_Star2' id='InquiryDetail_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div> */}
                    {/* <div className="InquiryDetail_Main_Content_1_Checkbox">
                        <input type="checkbox" className="InquiryDetail_Main_Content_1_Checkbox_Chx" id='InquiryDetail_Main_Content_1_Checkbox_Chx' />
                        <label for="InquiryDetail_Main_Content_1_Checkbox_Chx"/>
                    </div> */}
                    <div className="InquiryDetail_Main_Content_1_Main">
                        <p className="InquiryDetail_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="InquiryDetail_Main_Content_1_Main_Title_2">플래티 센본지 노우치 북쪽 302</p>
                        {/* <img className="InquiryDetail_Main_Content_1_Main_Img"/>
                         */}
                         {<AiOutlinePicture  className="InquiryDetail_Main_Content_1_Main_Img"/>}

                        <p className="InquiryDetail_Main_Content_1_Main_Rent">**만엔</p>
                        <p className="InquiryDetail_Main_Content_1_Main_Location">교토시 카미쿄구 엔마마에초</p>
                    </div>
                    <div className="InquiryDetail_Main_Content_1_Text">
                        <p className="InquiryDetail_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Arrangement_2">1K</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Width_1">너비</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="InquiryDetail_Main_Content_1_Btn">
                        <p className="InquiryDetail_Main_Content_1_Btn1"><IoIosMail className="InquiryDetail_Main_Content_1_Btn1_Img" />메일문의</p>
                    </div>
                </div>
            </div>
            <div className="InquiryDetail_Main_Content_1">
            <div className="InquiryDetail_Main_Content_1_Box">
                    {/* <div className="InquiryDetail_Main_Content_1_Star">
                    <IoIosStarOutline className='InquiryDetail_Main_Content_1_Star1' id='InquiryDetail_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='InquiryDetail_Main_Content_1_Star2' id='InquiryDetail_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div> */}
                    {/* <div className="InquiryDetail_Main_Content_1_Checkbox">
                        <input type="checkbox" className="InquiryDetail_Main_Content_1_Checkbox_Chx" id='InquiryDetail_Main_Content_1_Checkbox_Chx' />
                        <label for="InquiryDetail_Main_Content_1_Checkbox_Chx"/>
                    </div> */}
                    <div className="InquiryDetail_Main_Content_1_Main">
                        <p className="InquiryDetail_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="InquiryDetail_Main_Content_1_Main_Title_2">플래티 센본지 노우치 북쪽 302</p>
                        {/* <img className="InquiryDetail_Main_Content_1_Main_Img"/>
                         */}
                         {<AiOutlinePicture  className="InquiryDetail_Main_Content_1_Main_Img"/>}

                        <p className="InquiryDetail_Main_Content_1_Main_Rent">**만엔</p>
                        <p className="InquiryDetail_Main_Content_1_Main_Location">교토시 카미쿄구 엔마마에초</p>
                    </div>
                    <div className="InquiryDetail_Main_Content_1_Text">
                        <p className="InquiryDetail_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Arrangement_2">1K</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Width_1">너비</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="InquiryDetail_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="InquiryDetail_Main_Content_1_Btn">
                        <p className="InquiryDetail_Main_Content_1_Btn1"><IoIosMail className="InquiryDetail_Main_Content_1_Btn1_Img" />메일문의</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="InquiryDetail_Number">
       <div>
            <p className="InquiryDetail_Number_1">1</p>
            <p className="InquiryDetail_Number_2">2</p>
        </div>
    </div>
    </div>
    </>
}

function BtnClick() {
    const star1 = document.getElementById('InquiryDetail_Main_Content_1_Star1');
    const star2 = document.getElementById('InquiryDetail_Main_Content_1_Star2');

    if(star2.style.display === 'none') {
        star2.style.display = 'block';
        star1.style.display = 'none';
    }else{
        star2.style.display = 'none';
        star1.style.display = 'block';
    }
}

export default InquiryDetail;