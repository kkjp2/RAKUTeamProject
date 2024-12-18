import { useNavigate, useLocation } from 'react-router-dom';
import './css/myPageEmailEditAuth.css'
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const MyPageEmailEditAuth =() => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state || {};
    const [authNum, setAuthNum] = useState("");
    const goToMypageEdit = () => {
        navigate(`/mypage/edit`)
    }
    const goToMainpage = () => {
        navigate(`/main`)
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
            handleCheckCode(id,authNum);
          }
    }
    async function handleCheckCode(id ,authNum) {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/mailauthcheck', { 
              id: id,
              authNum: authNum
            });
            // 성공 시
            console.log(response.data); // 응답 데이터 확인
            EmailEdit(id);
          } catch (error) {
            // 실패 시
            console.error(error);
            window.alert("코드가 틀립니다.");
          }
        
    }
    async function EmailEdit(id) {
        const accessToken = window.sessionStorage.getItem('accesstoken');
        try {
            const response = await axios.post('http://localhost:8080/api/mypage/idedit', { 
                id: id,
                
              },
            {
                headers: { // 요청 헤더
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });
              console.log(response.data); // 응답 데이터 확인
              window.alert("변경이 완료되었습니다. 다시 로그인해주시기 바랍니다");
              window.sessionStorage.removeItem('accesstoken');
              window.sessionStorage.removeItem('refreshtoken');
              goToMainpage();
            } catch (error) {
              // 실패 시
              console.error(error);
              window.alert("이메일 변경에 오류가 생겼습니다");
            }
        } 
    return<>
    <div className="EmailEditAuth">
    <p className="EmailEditAuth_Title">인증 코드 입력</p>
    <p className="EmailEditAuth_Content">새 이메일 주소에 인증코드를 
    보내드렸습니다.<br/>인증 코드를 입력해주세요.</p>
    <form className="EmailEditAuth_Form">
    <p className="EmailEditAuth_Write">인증코드(6자리)</p>
    <input type='text' className="EmailEditAuth_Input"
    onChange={(e) => {
        setAuthNum(e.target.value);
    }}></input>
    <button className="EmailEditAuth_Btn" type='button' onClick={checkCode}>인증 코드 확인</button>
    <button className="EmailEditAuth_Btn_cancel" onClick={goToMypageEdit}>뒤로</button>
    <p className="EmailEditAuth_Resend_Write" onClick={authId}>인증코드 재발송</p>
    </form>
    </div>
    </>
}

export default MyPageEmailEditAuth;