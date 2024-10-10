import './css/comparison.css';
import { IoIosStarOutline } from "react-icons/io";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";   
import { AiOutlinePicture } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';

const Comparison = (item) => {
    return<>
    <div className="Comparison">
    <div className="Comparison_Header">
        <div className="Comparison_Header_Channel">
        <Link to="/MyPage">
            <p className="Comparison_Header_Channel_MyPage">내페이지</p>
        </Link>
            <p> &gt;</p>
            <p>비교표</p>
        </div>
        <div className="Comparison_Header_Title">
            <div className="Comparison_Header_Title_1">
                <IoIosStarOutline className='Comparison_Header_Title_1_Img' />
                <p className="Comparison_Header_Title_1_Text">비교표</p>
            </div>
        </div>
    </div>
    <div className="Comparison_Main">
        <div className="Comparison_Main_Content1">
            <table className="Comparison_Main_Content1_table">
                <tr className="Comparison_Main_Content1_table">
                    <th >즐겨찾기 상품</th>
                </tr>
                <tr className="Comparison_Main_Content1_table">
                    <td>부동산</td>
                </tr>
                <tr>
                    <th>정보</th>
                </tr>
                <tr>
                    <td>위치</td>
                    <td>축년수</td>
                </tr>
            </table>
        </div>
        <div className="Comparison_Main_Content">
            
            <div className="Comparison_Main_Content_1">
                <div className="Comparison_Main_Content_1_Box">
                    <div className="Comparison_Main_Content_1_Star">
                    <IoIosStarOutline className='Comparison_Main_Content_1_Star1' id='Comparison_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='Comparison_Main_Content_1_Star2' id='Comparison_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div>
                    <div className="Comparison_Main_Content_1_Checkbox">
                        <input type="checkbox" className="Comparison_Main_Content_1_Checkbox_Chx" id='Comparison_Main_Content_1_Checkbox_Chx' />
                        <label for="Comparison_Main_Content_1_Checkbox_Chx"/>
                    </div>
                    <div className="Comparison_Main_Content_1_Main">
                        <p className="Comparison_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="Comparison_Main_Content_1_Main_Title_2">플래티 센본지 노우치 북쪽 302</p>
                         {<AiOutlinePicture  className="Comparison_Main_Content_1_Main_Img"/>}

                        <p className="Comparison_Main_Content_1_Main_Rent">**만엔</p>
                        <p className="Comparison_Main_Content_1_Main_Location">교토시 카미쿄구 엔마마에초</p>
                    </div>
                    <div className="Comparison_Main_Content_1_Text">
                        <p className="Comparison_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="Comparison_Main_Content_1_Text_Arrangement_2">1K</p>
                        <p className="Comparison_Main_Content_1_Text_Width_1">너비</p>
                        <p className="Comparison_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="Comparison_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="Comparison_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="Comparison_Main_Content_1_Btn">
                        <button className="Comparison_Main_Content_1_Btn1"><IoIosMail className="Comparison_Main_Content_1_Btn1_Img" />메일문의</button>
                    </div>
                </div>
            </div>
            <div className="Comparison_Main_Content_1">
            <div className="Comparison_Main_Content_1_Box">
                    <div className="Comparison_Main_Content_1_Star">
                    <IoIosStarOutline className='Comparison_Main_Content_1_Star1' id='Comparison_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='Comparison_Main_Content_1_Star2' id='Comparison_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div>
                    <div className="Comparison_Main_Content_1_Checkbox">
                        <input type="checkbox" className="Comparison_Main_Content_1_Checkbox_Chx" id='Comparison_Main_Content_1_Checkbox_Chx' />
                        <label for="Comparison_Main_Content_1_Checkbox_Chx"/>
                    </div>
                    <div className="Comparison_Main_Content_1_Main">
                        <p className="Comparison_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="Comparison_Main_Content_1_Main_Title_2"></p>
                         {<AiOutlinePicture  className="Comparison_Main_Content_1_Main_Img"/>}

                        <p className="Comparison_Main_Content_1_Main_Rent"></p>
                        <p className="Comparison_Main_Content_1_Main_Location"></p>
                    </div>
                    <div className="Comparison_Main_Content_1_Text">
                        <p className="Comparison_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="Comparison_Main_Content_1_Text_Arrangement_2"></p>
                        <p className="Comparison_Main_Content_1_Text_Width_1">너비</p>
                        <p className="Comparison_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="Comparison_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="Comparison_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="Comparison_Main_Content_1_Btn">
                        <button className="Comparison_Main_Content_1_Btn1"><IoIosMail className="Comparison_Main_Content_1_Btn1_Img" />메일문의</button>
                    </div>
                </div>
            </div>
            <div className="Comparison_Main_Content_1">
            <div className="Comparison_Main_Content_1_Box">
                    <div className="Comparison_Main_Content_1_Star">
                    <IoIosStarOutline className='Comparison_Main_Content_1_Star1' id='Comparison_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='Comparison_Main_Content_1_Star2' id='Comparison_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div>
                    <div className="Comparison_Main_Content_1_Checkbox">
                        <input type="checkbox" className="Comparison_Main_Content_1_Checkbox_Chx" id='Comparison_Main_Content_1_Checkbox_Chx' />
                        <label for="Comparison_Main_Content_1_Checkbox_Chx"/>
                    </div>
                    <div className="Comparison_Main_Content_1_Main">
                        <p className="Comparison_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="Comparison_Main_Content_1_Main_Title_2">플래티 센본지 노우치 북쪽 302</p>
                        {/* <img className="Comparison_Main_Content_1_Main_Img"/>
                         */}
                         {<AiOutlinePicture  className="Comparison_Main_Content_1_Main_Img"/>}

                        <p className="Comparison_Main_Content_1_Main_Rent">**만엔</p>
                        <p className="Comparison_Main_Content_1_Main_Location">교토시 카미쿄구 엔마마에초</p>
                    </div>
                    <div className="Comparison_Main_Content_1_Text">
                        <p className="Comparison_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="Comparison_Main_Content_1_Text_Arrangement_2">1K</p>
                        <p className="Comparison_Main_Content_1_Text_Width_1">너비</p>
                        <p className="Comparison_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="Comparison_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="Comparison_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="Comparison_Main_Content_1_Btn">
                        <button className="Comparison_Main_Content_1_Btn1"><IoIosMail className="Comparison_Main_Content_1_Btn1_Img" />메일문의</button>
                    </div>
                </div>
            </div>
            <div className="Comparison_Main_Content_1">
            <div className="Comparison_Main_Content_1_Box">
                    <div className="Comparison_Main_Content_1_Star">
                    <IoIosStarOutline className='Comparison_Main_Content_1_Star1' id='Comparison_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='Comparison_Main_Content_1_Star2' id='Comparison_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div>
                    <div className="Comparison_Main_Content_1_Checkbox">
                        <input type="checkbox" className="Comparison_Main_Content_1_Checkbox_Chx" id='Comparison_Main_Content_1_Checkbox_Chx' />
                        <label for="Comparison_Main_Content_1_Checkbox_Chx"/>
                    </div>
                    <div className="Comparison_Main_Content_1_Main">
                        <p className="Comparison_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="Comparison_Main_Content_1_Main_Title_2">플래티 센본지 노우치 북쪽 302</p>
                        {/* <img className="Comparison_Main_Content_1_Main_Img"/>
                         */}
                         {<AiOutlinePicture  className="Comparison_Main_Content_1_Main_Img"/>}

                        <p className="Comparison_Main_Content_1_Main_Rent">**만엔</p>
                        <p className="Comparison_Main_Content_1_Main_Location">교토시 카미쿄구 엔마마에초</p>
                    </div>
                    <div className="Comparison_Main_Content_1_Text">
                        <p className="Comparison_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="Comparison_Main_Content_1_Text_Arrangement_2">1K</p>
                        <p className="Comparison_Main_Content_1_Text_Width_1">너비</p>
                        <p className="Comparison_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="Comparison_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="Comparison_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="Comparison_Main_Content_1_Btn">
                        <button className="Comparison_Main_Content_1_Btn1"><IoIosMail className="Comparison_Main_Content_1_Btn1_Img" />메일문의</button>
                    </div>
                </div>
            </div>
            <div className="Comparison_Main_Content_1">
            <div className="Comparison_Main_Content_1_Box">
                    <div className="Comparison_Main_Content_1_Star">
                    <IoIosStarOutline className='Comparison_Main_Content_1_Star1' id='Comparison_Main_Content_1_Star1' onClick={BtnClick} />
                    <IoStar className='Comparison_Main_Content_1_Star2' id='Comparison_Main_Content_1_Star2' onClick={BtnClick}/>
                    </div>
                    <div className="Comparison_Main_Content_1_Checkbox">
                        <input type="checkbox" className="Comparison_Main_Content_1_Checkbox_Chx" id='Comparison_Main_Content_1_Checkbox_Chx' />
                        <label for="Comparison_Main_Content_1_Checkbox_Chx"/>
                    </div>
                    <div className="Comparison_Main_Content_1_Main">
                        <p className="Comparison_Main_Content_1_Main_Title_1">아파트</p>
                        <p className="Comparison_Main_Content_1_Main_Title_2">플래티 센본지 노우치 북쪽 302</p>
                        {/* <img className="Comparison_Main_Content_1_Main_Img"/>
                         */}
                         {<AiOutlinePicture  className="Comparison_Main_Content_1_Main_Img"/>}

                        <p className="Comparison_Main_Content_1_Main_Rent">**만엔</p>
                        <p className="Comparison_Main_Content_1_Main_Location">교토시 카미쿄구 엔마마에초</p>
                    </div>
                    <div className="Comparison_Main_Content_1_Text">
                        <p className="Comparison_Main_Content_1_Text_Arrangement_1">배치</p>
                        <p className="Comparison_Main_Content_1_Text_Arrangement_2">1K</p>
                        <p className="Comparison_Main_Content_1_Text_Width_1">너비</p>
                        <p className="Comparison_Main_Content_1_Text_Width_2">24.9m</p>
                        <p className="Comparison_Main_Content_1_Text_Years_1">축년수</p>
                        <p className="Comparison_Main_Content_1_Text_Years_1">신축</p>
                    </div>
                    <div className="Comparison_Main_Content_1_Btn">
                        <button className="Comparison_Main_Content_1_Btn1"><IoIosMail className="Comparison_Main_Content_1_Btn1_Img" />메일문의</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="Comparison_Number">
       <div>
            <p className="Comparison_Number_1">1</p>
            <p className="Comparison_Number_2">2</p>
        </div>
    </div>
    </div>
    </>
}

function BtnClick() {
    const star1 = document.getElementById('Comparison_Main_Content_1_Star1');
    const star2 = document.getElementById('Comparison_Main_Content_1_Star2');

    if(star2.style.display === 'none') {
        star2.style.display = 'block';
        star1.style.display = 'none';
    }else{
        star2.style.display = 'none';
        star1.style.display = 'block';
    }
}

export default Comparison;