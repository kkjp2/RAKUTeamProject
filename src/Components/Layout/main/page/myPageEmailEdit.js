import { Link, useNavigate } from 'react-router-dom';
import './css/myPageEmailEdit.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const MyPageEmailEdit =() => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const goToMypageEdit =() => {
        navigate(`/mypage/edit`);
    }

    const EdEmailPage = () => {
        //입력 값 정합성 체크 후 login API 요청
            if (id === "") {
              window.alert("이메일을 입력해주세요.");
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
              goToEditEmailAuth();
            } catch (error) {
              // 실패 시
              console.error(error);
              window.alert("이메일이 중복됩니다.")
            }
          };
          const goToEditEmailAuth = () => {
            navigate('/mypage/edit/email/auth', {
                state: {
                    id: id
                },
            });
        };
    return<>
    <div className="EmailEdit">
    <div className="EmailEdit_Title">이메일 주소 변경</div>
    <div className="EmailEdit_Content">새 이메일 주소를 입력하세요.<br/>변경용 인증 코드를 보내드립니다.</div>
    <form>
    <div className="EmailEdit_Content">
        <p className="EmailEdit_Content_Title">새 이메일 주소</p>
        <input type='text' className='EmailEdit_Content_Text'
        onChange={(e) => {
            setId(e.target.value);
        }}></input>
    </div>
    <div className="EmailEdit_Btn">
        <button className="EmailEdit_Btn_submit" type='button' onClick={EdEmailPage}>변경용 이메일 보내기</button>
        <button className="EmailEdit_Btn_cancel" onClick={goToMypageEdit}>뒤로</button>
        <div className="EmailEdit_Btn_Content">
        입력된 이메일 주소로 등록을 위한 인증 코드를 보냅니다. 다음 페이지에서 입력하십시오.
        </div>
    </div>
    
    </form>
    </div>
    </>
}

export default MyPageEmailEdit;