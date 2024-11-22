import React,{useState} from 'react';
import { GiCharacter } from "react-icons/gi";
import {useNavigate } from 'react-router-dom';


const RentalReview=()=>{
    const navigate=useNavigate();

    return(
        
        <div className='review_container'>
            <h1>리뷰폼입니다.</h1>
        <h3><GiCharacter />아도니스 그레이엄</h3>
        <p>나는 이곳에서 좋은 추억을 만들었습니다. 그것은... 내게 좋은 추억을 안겼습니다.</p>
        <h3><GiCharacter />압둘 알리 아샤드 무함마드 유세프</h3>
        <p>알함두릴라!</p>
        <h3><GiCharacter />후쿠자와 유키치</h3>
        <p>도쿄에서의 좋은 서비스를 얻어옵니다.</p>        
        <h3><GiCharacter />빌리 아이리쉬</h3>
        <p>추천 하는!</p>            
        <h3><GiCharacter />코비 브라이언트</h3>
        <p>제 키가 너무커서 층고가 맞지 않는 불편함을 겪습니다.</p>      
        <h3><GiCharacter />크리스티아누 호날두</h3>
        <p>siuuuuuuuuuuuuuuuuuuu</p>                         
        <h3><GiCharacter />이재한</h3>
        <p>그러니까 제가 오사카에서 갓을때의 일입니다.저는 오사카에서 유니버셜 스튜디오를 갔는데,
            갑자기 군대에서의 멧돼지를 만났던 기억이 생각났습니다.저는 이전에 일본에서 대학교를 
            다닐때 심리학을 공부했습니다.</p>      
        <h3><GiCharacter />응우옌 크리스틴</h3>
        <p>나는 도쿄에서 일을 해야만 했습니다.3개월동안 신세를 지다.감사를 보내다.</p>
        <h3><GiCharacter />알렉스 페레이라</h3>
        <p>일본에서 전지훈련을 할때 굳 서비스를 제개 주었습니다.감사</p>        
        <h3><GiCharacter />두아 리파</h3>
        <p>일본 문화를 사랑</p>                
        <h3><GiCharacter />링 샤오유</h3>
        <p>좋은 경험을 전송받습니다</p>        
        <h3><GiCharacter />마셜 티치</h3>
        <p>하하하 좋은경험</p>        
        <button className='back-button' onClick={()=>{
            navigate(-1)
        }}>
            뒤로가기
        </button>
        </div>
        
        
    )

    
}
export default RentalReview;