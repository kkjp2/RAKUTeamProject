// ./Components/Layout/login/main/login.js
import './css/login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const navigate = useNavigate();
    const goToDormant = () => {
        navigate('/login/dormant_auth');
      };
    const goTORegister = () => {
        navigate('/login/register_email')
    }
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const LoginPage = () => {
        //입력 값 정합성 체크 후 login API 요청
            if (id === "" || pwd === "") {
              window.alert("아이디와 비밀번호를 입력해주세요.");
            }else{
              handleLogin(id, pwd);
            }
          };

    async function handleLogin(id, pwd) {
            try {
              const response = await axios.post('http://localhost:8080/api/users/companyusers', {
                id: id,
                pwd: pwd,
              });
              // 성공 시
              console.log(response.data); // 응답 데이터 확인
              window.alert("로그인성공!");
              document.location.href = "/main";
            } catch (error) {
              // 실패 시
              console.error(error);
              window.alert("로그인 정보가 틀립니다.");
            }
          };     

    return<>
    <div className="login_main">
    <p className="login_title">로그인</p>
        <div className="Signin__Inner">
            <section className="Signin__Form">
                <form className="Signin">
                    <p className="Id__Write" >이메일</p>
                    <input type='text' className="Id__Input" onChange={(e) => {
                        setId(e.target.value);
                    }}></input>
                    <p className="Pass__Write" >비밀번호</p>
                    <input type="password" className="Pass__Input" onChange={(e) => {
                        setPwd(e.target.value);
                    }}></input>
                    <button className="Signin__Btn" type='button' onClick={LoginPage}>로그인</button>
                </form>
            </section>
            <div className="Register__Form">
            </div>
        </div>
    </div>
    </>
    
}



export default Login;