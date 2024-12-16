import './css/myPagePasswordEdit.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const MyPagePasswordEdit = () => {
    const navigate = useNavigate();
    const [pwd, setPwd] = useState("");
    const goToMypageEdit =() => {
        navigate(`/mypage/edit`);
    }
    const PwdEdit = () => {
        //입력 값 정합성 체크 후 login API 요청
            if (pwd === "" ) {
              window.alert("비밀번호를 입력해주세요");
            }else{
              EditPwd(pwd);
            }
          };

    async function EditPwd(pwd) {
        const accessToken = window.sessionStorage.getItem('accesstoken');
        console.log(accessToken);
            try {
              await axios.post('http://localhost:8080/api/mypage/pwdedit',  {
                pwd: pwd // 요청 본문
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
    <div className="PasswordEdit">
    <div className="PasswordEdit_Title">새 비밀번호 입력</div>
    <form>
    <div className="PasswordEdit_Content">
        <p className="PasswordEdit_Content_Title">새로운 비밀번호</p>
        <input type='password' className='PasswordEdit_Content_Text' onChange={(e) => {
                        setPwd(e.target.value);
                    }}></input>
        <p className="PasswordEdit_Content_p">8자 이상의 숫자, 영문자(대문자와 소문자)를 포함한다.<br/>전각이나 기호는 사용할 수 없습니다.</p>
    </div>
    <div className="PasswordEdit_Btn">
        <button className="PasswordEdit_Btn_submit" type="button" onClick={PwdEdit}>비밀번호 재설정</button>
        <button className="PasswordEdit_Btn_cancel" onClick={goToMypageEdit}>뒤로</button>
    </div>
    </form>
    </div>
    </>
}

export default MyPagePasswordEdit;