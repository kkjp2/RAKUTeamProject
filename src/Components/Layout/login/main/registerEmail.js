// ./Components/Layout/login/main/registerEmail.js

import { useState } from 'react';
import './css/registerEmail.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterEmail = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const reEmailPage = () => {
        //입력 값 정합성 체크 후 login API 요청
            if (id === "" || pwd === "") {
              window.alert("이메일와 비밀번호를 입력해주세요.");
            }else{
              emailCheck(id);
            }
          };
     async function emailCheck(id) {
            try {
              const response = await axios.get('http://localhost:8080/api/users/checkemail', 
                {
                params:{id : id}
              });
              // 성공 시
              console.log(response.data); // 응답 데이터 확인
              goToAuth();
            } catch (error) {
              // 실패 시
              console.error(error);
              window.alert("이메일이 중복됩니다.")
            }
          };
          const goToAuth = () => {
            navigate('/login/register_auth', {
                state: {
                    id: id,
                    pwd: pwd,
                },
            });
        };
    return<>
    <div className='login_main'>
    <p className="title">신규 가입</p>
    <section className="Register_Email_Form">
                <form className="Register_Email" >
                    <p className="Register_Id__Write" >이메일</p>
                    <input type='text' className="Register_Id__Input"
                    onChange={(e) => {
                        setId(e.target.value);
                    }}></input>
                    <p className="Register_Pass__Write">비밀번호</p>
                    <input type="password" className="Register_Pass__Input"
                    onChange={(e) => {
                        setPwd(e.target.value);
                    }}></input>
                    <input type="checkbox" className="Register_Email_checkbox" id='Register_Email_checkbox' />
                    <label for="Register_Email_checkbox"><span>이메일 알람 허용</span></label>
                    <button className="Register_Email__Btn" type="button" onClick={reEmailPage}>이메일 등록</button>
                </form>
            </section>
    </div>
    </>
}

export default RegisterEmail;