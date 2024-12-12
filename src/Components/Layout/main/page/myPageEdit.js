import './css/myPageEdit.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const MyPageEdit =() => {
    const navigate = useNavigate();
    const [nick, setNick] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState(""); 
    const goToMainPage = () => {
        navigate(`/main`);
    }
    const goToMyPage = () => {
        navigate(`/mypage`);
    }
    const goToMypageEditNick = () => {
        navigate(`/mypage/edit/nickname`);
    }
    const goToMypageEditEmail = () => {
        navigate(`/mypage/edit/email`);
    }
    const goToMypageEditPassword = () => {
        navigate(`/mypage/edit/password`);
    }
    const goToMypageEditArea = () => {
        navigate(`/mypage/edit/area`);
    }
    const goToMypageDelete = () => {
        navigate(`/mypage/delete`);
    }
    async function userIo() {
        const accessToken = window.localStorage.getItem('accesstoken');
        try {
            const response = await axios.get('http://localhost:8080/api/mypage', { 
              headers : {
                Authorization: `Bearer ${accessToken}`
              }
            });
            // 성공 시
            console.log(response.data); // 응답 데이터 확인
            setNick(response.data.nick);
            setEmail(response.data.id);
            setAddress(response.data.address);
          } catch (error) {
            // 실패 시
            console.error(error);
          }
    }

    const whatAdress = () => {
        if(address === 1){
            return "큐슈";
        } else if(address === 2){
            return "주코쿠";
        }else if(address === 3){
            return "시코쿠";
        }else if(address === 4){
            return "주부";
        }else if(address === 5){
            return "간사이";
        }else if(address === 6){
            return "간토";
        }else if(address === 7){
            return "도호쿠";
        }else if(address === 8){
            return "훗카이도";
        }
    }

    useEffect(() => {
        userIo();
    }, []); // 빈 배열 []은 컴포넌트 마운트 시 한 번만 실행됨
    return<>
    <div className="MyPage_Edit">
        <div className="MyPage_Edit_Title">
            <p>사용자 수정</p></div>
        <div className="MyPage_Edit_Data">
            <div className="MyPage_Edit_Data_Title">
                <p>사용자 정보</p>
            </div>
            <div className="MyPage_Edit_Data_Main">
                <div className="MyPage_Edit_Data_Main">
                    <p className="MyPage_Edit_Data_Main_Title">닉네임</p>
                    <div className="MyPage_Edit_Data_Main_Main">
                        <span className="MyPage_Edit_Data_Main_Main_Content">
                            <p>{nick}</p>
                        </span>
                        <span className="MyPage_Edit_Data_Main_Main_Btn">
                            <button onClick={goToMypageEditNick}>변경</button>
                        </span>
                    </div>
                <div className="MyPage_Edit_Data_Main">
                <p className="MyPage_Edit_Data_Main_Title">이메일</p>
                    <div className="MyPage_Edit_Data_Main_Main">
                        <span className="MyPage_Edit_Data_Main_Main_Content">
                            <p>{email}</p>
                        </span>
                        <span className="MyPage_Edit_Data_Main_Main_Btn">
                            <button onClick={goToMypageEditEmail}>변경</button>
                        </span>
                    </div>
                </div>
                <div className="MyPage_Edit_Data_Main">
                <p className="MyPage_Edit_Data_Main_Title">비밀번호</p>
                    <div className="MyPage_Edit_Data_Main_Main">
                        <span className="MyPage_Edit_Data_Main_Main_Content">
                            <p>*********</p>
                        </span>
                        <span className="MyPage_Edit_Data_Main_Main_Btn">
                            <button onClick={goToMypageEditPassword}>변경</button>
                        </span>
                    </div>
                </div>
                <div className="MyPage_Edit_Data_Main">
                <p className="MyPage_Edit_Data_Main_Title">지역</p>
                    <div className="MyPage_Edit_Data_Main_Main">
                        <span className="MyPage_Edit_Data_Main_Main_Content">
                            <p>{whatAdress()}</p>
                        </span>
                        <span className="MyPage_Edit_Data_Main_Main_Btn">
                            <button onClick={goToMypageEditArea}>변경</button>
                        </span>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="MyPage_Edit_MainPageBtn">
            <button className="MyPage_Edit_MainPageBtn_Btn" onClick={goToMyPage}>마이페이지 돌아가기</button>
        </div>
        <div className="MyPage_Edit_Delete">
            <div className="MyPage_Edit_Data_Title">
                <p>계정 삭제</p>
            </div>
            <div className="MyPage_Edit_Delete_Main">
                <p className="MyPage_Edit_Delete_Content">계정을 삭제하면 저장된 데이터 등이 사라지고 일부 기능을 사용할 수 없게 됩니다. 삭제한 데이터는 되돌릴 수 없습니다.</p>
                <p className="MyPage_Edit_Delete_Click" onClick={goToMypageDelete}>계정 삭제</p>
            </div>
        </div>
    </div>
    </>
}

export default MyPageEdit;