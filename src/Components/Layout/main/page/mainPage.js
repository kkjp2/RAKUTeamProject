import { Navigate, useNavigate } from 'react-router-dom';
import'./css/mainPage.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const MainPage =() => {
    const navigate = useNavigate();
    const [ann, setAnn] = useState([]);
    async function AnnInfo() {
        try {
            const response = await axios.get('http://localhost:8080/api/ann/view');
            // 성공 시
            console.log(response.data); // 응답 데이터 확인
            setAnn(response.data.announcements);
            console.log(ann);
          } catch (error) {
            // 실패 시
            console.error(error);
          }
    }
    useEffect(() => {
        const input = document.getElementById('myInput');
        const form = document.getElementById('myForm');
        AnnInfo();
        // input이 focus되면 form에 클래스 추가
        const handleFocus = () => {
            form.classList.add('focused');
        };

        // input이 focus 해제되면 form에서 클래스 제거
        const handleBlur = () => {
            form.classList.remove('focused');
        };

        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur);

        // 컴포넌트 언마운트 시 이벤트 제거
        return () => {
            input.removeEventListener('focus', handleFocus);
            input.removeEventListener('blur', handleBlur);
        };
    }, []);
        const goToMove = () => {
            navigate('/MoveMain');
        }
        const goToNotice = () => {
            navigate('/notice');
        }
        const goToRental = () => {
            navigate('/rental');
        }
        const goToAnn =() => {
            navigate('/main/announcement');
        }
        const goToMap = () => {
            navigate('/realty/main/regions');
        }
        const goToCategory = () => {
            navigate('/realty/main/categoriFilter');
        }

    return<>
    <div className="Mainpage_Realty">
    <div className="Mainpage_filiter">
    <div className="Mainpage_Main">
    <div className="Search_Main">
        <form className="Search_Form" id="myForm">
            <div className="Search_Img"/>
            <input className="Search_Text" type="text" name="" placeholder='검색하기' id="myInput"></input>
        </form>
    </div>
    <div className="Realty_Main">
        <div className="Realty_Main_Message">
            <div className="Realty_Main_Message_1">
                <p className="Realty_Main_Message_1_Title">
                    RAKU
                </p>
                <p className="Realty_Main_Message_1_Subtitle">
                    당신의 집을 찾아보세요
                </p>
            </div>
            <div className="Realty_Main_Message_2">
            </div>
        </div>
        <div className="Realty_Main_Menu">
            <div className="Realty_Main_Menu_Choice">
                <button className="Realty_Main_Menu_Choice_MapImg" onClick={goToMap}></button>
                <p className="Realty_Main_Menu_Choice_MapM">
                    지도로 간편하게!<br/>
                    원하는 지역으로 정확하게!
                </p>
                <button className="Realty_Main_Menu_Choice_TagImg" onClick={goToCategory}></button>
                <p className="Realty_Main_Menu_Choice_TagM">
                검색 키워드로 <br/>
                원하는 매물을 다양하게!
                </p>
            </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="Various_Main">
        <p className="Various_Main_Title">다양한 서비스</p>
        <div className="Various_Main_Menu">
            <div className="Various_Main_Menu_Move">
                <div className="Various_Main_Menu_Zone"  onClick={goToMove}>
                    <div className="Various_Main_Menu_1">
                        <p className="Various_Main_Menu_1_Title">
                            이사 도우미
                        </p>
                    </div>
                    <div className="Various_Main_Menu_2">
                        <div className="Various_Main_Menu_Move_2_Img"></div>
                        <p className="Various_Main_Menu_2_Title">
                            RAKU
                        </p>
                    </div>
                    <div className="Various_Main_Menu_3">
                        <p className="Various_Main_Menu_3_Title">
                        복수의 이사업자로부터 견적을 취할 수 있는 서비스. Web상에서 비교해 그대로 이사를 예약하는 일도 가능합니다!
                        </p>
                    </div>
                </div>
            </div>
            <div className="Various_Main_Menu_Area" >
            <div className="Various_Main_Menu_Zone" onClick={goToNotice}>
                    <div className="Various_Main_Menu_1">
                    <p className="Various_Main_Menu_1_Title">
                            지역 게시판
                        </p>
                    </div>
                    <div className="Various_Main_Menu_2">
                    <div className="Various_Main_Menu_Area_2_Img"></div>
                    <p className="Various_Main_Menu_2_Title">
                            RAKU
                        </p>
                    </div>
                    <div className="Various_Main_Menu_3">
                    <p className="Various_Main_Menu_3_Title">
                    다양한 생활 방식을 소개하는 콘텐츠를 게시판을 통해 구경 하거나 자신이 살고 있는 생활방식을 홍보해 보세요!
                        </p>
                    </div>
                </div>

            </div>
            <div className="Various_Main_Menu_Rental">
            <div className="Various_Main_Menu_Zone" onClick={goToRental}>
                    <div className="Various_Main_Menu_1">
                    <p className="Various_Main_Menu_1_Title">
                            렌탈 게시판
                        </p>
                    </div>
                    <div className="Various_Main_Menu_2">
                    <div className="Various_Main_Menu_Rental_2_Img"></div>
                    <p className="Various_Main_Menu_2_Title">
                            RAKU
                        </p>
                    </div>
                    <div className="Various_Main_Menu_3">
                    <p className="Various_Main_Menu_3_Title">
                    여행으로 비운 당신의 집을 남에게 빌려줘 용돈 벌이를 하거나 여행 때 좀더 저렴한 가격에 숙소를 구해보세요!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="News_Main">
        <div className="News_Main_Message">
            <p className="News_Main_Title">RAKU'S 뉴스</p>
            <div className="News_Main_Btn_Area">
                <button className="News_Main_Btn" onClick={goToAnn}>더 보기</button>
            </div>
            
        </div>
        <div className="News_Main_Content" onClick={goToAnn}>
            <p className="News_Main_Content_Day">
                {ann[ann.length - 1]?.borndate || "No date available"}
            </p>
            <p className="News_Main_Content_Title">
                {ann[ann.length-1]?.title || "No title available"}
            </p>

        </div>
    </div>
    
    </>
}

export default MainPage