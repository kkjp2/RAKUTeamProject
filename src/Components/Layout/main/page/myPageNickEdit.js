import './css/myPageNickEdit.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const MyPageNickEdit =() => {
    const navigate = useNavigate();
    const [nick, setNick] = useState("");
    const goToMypageEdit = () => {
        navigate(`/mypage/edit`);
    }
    const NickEdit = () => {
        //입력 값 정합성 체크 후 login API 요청
            if (nick === "" ) {
              window.alert("닉네임을 입력해주세요");
            }else{
              EditNick(nick);
            }
          };

    async function EditNick(nick) {
        const accessToken = window.localStorage.getItem('accesstoken');
        console.log(nick);
        console.log(accessToken);
            try {
              await axios.post('http://localhost:8080/api/mypage/nickedit',  {
                nick: nick // 요청 본문
            }, 
            {
                headers: { // 요청 헤더
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });
              // 성공 시
              navigate(`/mypage/edit`);
            } catch (error) {
              // 실패 시
              console.error(error);
            }
          };   

    return<>
    <div className="NicknameEdit">
    <div className="NicknameEdit_Title">사용자 정보 변경</div>
    <form>
    <div className="NicknameEdit_Content">
        <p className="NicknameEdit_Content_Title">닉네임</p>
        <input type='text' className='NicknameEdit_Content_Text' onChange={(e) => {
                        setNick(e.target.value);
                    }}></input>
    </div>
    <div className="NicknameEdit_Btn">
        <button className="NicknameEdit_Btn_submit" type='button' onClick={NickEdit}>확인 페이지로 이동</button>
        <button className="NicknameEdit_Btn_cancel" onClick={goToMypageEdit}>뒤로</button>
    </div>
    </form>
    </div>
    </>
} 

export default MyPageNickEdit;