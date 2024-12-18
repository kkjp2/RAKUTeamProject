// ./Components/Layout/login/main/registerAuth.js

import './css/registerAuth.css';
import { useLocation ,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const RegisterAuth =() => {
    const navigate = useNavigate();
    const location = useLocation();
    const [authNum, setAuthNum] = useState("");
    const { id, pwd } = location.state || {};
    const goTOArea = () => {
        navigate('/login/register_area', {
            state: {
                id: id,
                pwd: pwd,
            },
        })
    }
    async function authId() {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/mailsend', { 
              id: id
            });
            // 성공 시
            console.log(response.data); // 응답 데이터 확인
          } catch (error) {
            // 실패 시
            console.error(error);
          }
    }
    const hasExecuted = useRef(false);

    useEffect(() => {
        if (!hasExecuted.current) {
            authId(); // 원하는 함수 실행
            hasExecuted.current = true;
        }
    }, []);

    const checkCode = () => {
        if (authNum === "") {
            window.alert("코드를 입력해주세요");
          }else{
            handleCheckCode(authNum);
          }
    }
    async function handleCheckCode(authNum) {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/mailauthcheck', { 
              id: id,
              authNum: authNum
            });
            // 성공 시
            console.log(response.data); // 응답 데이터 확인
            goTOArea();
          } catch (error) {
            // 실패 시
            console.error(error);
            window.alert("코드가 틀립니다.");
          }
        
    }

    return <>
    <p className="title">인증 코드 입력</p>
    <p className="Auth_Message">이메일로 받은 인증 코드를 입력하세요.</p>
    <form className="Auth_Form">
    <p className="Auth_Write">인증코드(6자리)</p>
    <input type='text' className="Auth_Input"
    onChange={(e) => {
        setAuthNum(e.target.value);
    }}></input>
    <button className="Register_Auth__Btn" type='button' onClick={checkCode}>인증 코드 확인</button>
    <p className="Auth_Resend_Write" onClick={authId}>인증코드 재발송</p>
    </form>
    </>
}

export default RegisterAuth;