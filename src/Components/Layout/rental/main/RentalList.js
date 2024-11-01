import React from 'react';
import './RentalList.css';
import { useNavigate,useParams } from 'react-router-dom';
import { BsPeopleFill } from "react-icons/bs";
import { RiArrowUpDownLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

const RentalList = () => {
    const { region } = useParams();  // URL에서 지역 정보를 받아옴
    const navigate = useNavigate();
  return (
    <div className="rental-container">
      {/* 상단 검색 섹션 */}
      <header className="rental-header">
        <h1 className="rental-title">{region}</h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="키워드를 입력해주세요"
            className="search-input"
          />
          <button className="search-btn">검색</button>
        </div>        
      </header>

      {/* 필터 버튼 섹션 */}
      
      <div className="rental-filters">
       
        <button className="filter-btn"><BsPeopleFill color='green'/>조회 순</button>
        <button className="filter-btn"><RiArrowUpDownLine color='blue'/>최신 순</button>
        <button className="write-btn"
        onClick={()=>{
          navigate("/rental/write/page");
        }}><TfiWrite/>글쓰기</button>
      </div>
      

      {/* 렌탈 리스트 및 최근 본 게시글 섹션 */}
      <div className="rental-content">
        {/* 렌탈 리스트 */}
        <div className="rental-list">
          <div className="rental-item">
            <img src="/img/daito1.png" alt="아파트 1" className="rental-image" />
            <div className="rental-info">
              <h3 className="rental-name" onClick={()=>{
                navigate(`/rental/details`);
              }}>도쿄 다이토 구 아파트</h3>
              <span><FaRegEye color='blue'/> 552</span>
              <p>위치: 도쿄도 00구 00</p>
              <p>날짜: 2024-05-01 ~ 2024-05-09</p>
              <p>가격: 100,000</p>
    
            </div>
          </div>

          <div className="rental-item">
            <img src="/img/daito2.png" alt="아파트 2" className="rental-image" />
            <div className="rental-info">
              <h3 className="rental-name">도쿄 다이토 구 아파트</h3>
              <span><FaRegEye color='blue'/> 444</span>
              <p>위치: 도쿄도 00구 00</p>
              <p>날짜: 2024-05-01 ~ 2024-05-03</p>
              <p>가격: 45,000</p>
        
            </div>
          </div>

          <div className="rental-item">
            <img src="/img/setagawa.png" alt="아파트 3" className="rental-image" />
            <div className="rental-info">
              <h3 className="rental-name">도쿄 세타가야 구 아파트</h3>
              <span><FaRegEye color='blue'/> 211</span>
              <p>위치: 도쿄도 00구 00</p>
              <p>날짜: 2024-06-01 ~ 2024-06-21</p>
              <p>가격: 299,000</p>
     
            </div>
          </div>
          <div className="rental-item">
            <img src="/img/daito4.png" alt="아파트 3" className="rental-image" />
            <div className="rental-info">
              <h3 className="rental-name">도쿄 다이토 구 아파트</h3>
              <span><FaRegEye color='blue'/> 155</span>
              <p>위치: 도쿄도 00구 00</p>
              <p>날짜: 2024-06-01 ~ 2024-06-11</p>
              <p>가격: 199,000</p>
          
            </div>
          </div>         
          <div className="rental-item">
            <img src="/img/shibuya.png" alt="아파트 3" className="rental-image" />
            <div className="rental-info">
              <h3 className="rental-name">도쿄 시부야 구 아파트</h3>
              <span><FaRegEye color='blue'/> 78</span>
              <p>위치: 도쿄도 00구 00</p>
              <p>날짜: 2024-06-01 ~ 2024-06-5</p>
              <p>가격: 100,000</p>
          
            </div>
          </div>              
        </div>

        {/* 최근 본 게시글 */}
        <aside className="recent-posts">
          <h2>최근 본 게시글</h2>
          <ul>
            <li>
              <img src="/img/daito1.png" alt="최근 게시글 1"/>     
              <div className='user-text'>
              <p>도쿄 다이토구 아파트</p>         
              </div>
            </li>
            <li>
              <img src="/img/daito2.png" alt="최근 게시글 2" />
              <div className='user-text'>
              <p>도쿄 다이토구 아파트</p>         
              </div>        
            </li>
            <li>
              <img src="/img/daito1.png" alt="최근 게시글 3" />
              <div className='user-text'>
              <p>도쿄 다이토구 아파트</p>         
              </div>       
            </li>          
          </ul>
        </aside>
      </div>

      {/* 페이지네이션 */}
      <div className="pagination">
        <button className="page-btn">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
      </div>
    </div>
  );
};

export default RentalList;
