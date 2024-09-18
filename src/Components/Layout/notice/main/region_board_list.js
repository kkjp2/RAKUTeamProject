// region_board_list.js
import React from 'react';
import './region_board_list.css';
import { useNavigate } from "react-router-dom";

const RegionBoardList=()=>{
  const move="지역 축제 게시판 보러가기";
  const navigate = useNavigate();
//   const handleButtonClick = (festival) => {
//     setSelectedBoard(festival);  
// };
return (
  <div className="container">      
  <div className="toolbar">
    <button className="blue-btn">도호쿠</button>
    <input type="text" placeholder="키워드를 입력하세요" className="search-bar" />
    <button className='search'>검색</button>    
    <button className="purple-btn"
    onClick={()=>{
      navigate("/festival_board_list")
    }}
    >지역 축제 게시판 보러가기</button>
  </div>

  <div className="keyword-section">
    <p>사용자들이 많이 검색한 키워드</p>
    <div className="keywords">
      <span>#인테리어</span>
      <span>#반려견</span>
      <span>#직장</span>
      <span>#요리</span>
      <span>#주차 가능함</span>
      <span>#운동</span>
    </div>
  </div>
  <div className='toolbar1'>
  <button className='write'>
    글쓰기
  </button>
  </div>
  


  <div className="table-section">
    <table className="board-table">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성시간</th>
          <th>조회수</th>
          <th>좋아요</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>15</td>
          <td>OO지역에 필수가 있나요?</td>
          <td>작성자1</td>
          <td>2024-05-22</td>
          <td>10</td>
          <td>1</td>
        </tr>
        <tr>
          <td>14</td>
          <td>자녀와 함께 갈만한...</td>
          <td>작성자2</td>
          <td>2024-05-21</td>
          <td>8</td>
          <td>2</td>
        </tr>
        <tr>
          <td>13</td>
          <td>주차시설이 마땅...</td>
          <td>작성자3</td>
          <td>2024-05-21</td>
          <td>15</td>
          <td>4</td>
        </tr>
        <tr>
          <td>12</td>
          <td>자녀 반려견이랑</td>
          <td>작성자4</td>
          <td>2024-05-21</td>
          <td>40</td>
          <td>5</td>
        </tr>
        <tr>
          <td>11</td>
          <td>산책로 새로 생...</td>
          <td>작성자5</td>
          <td>2024-05-21</td>
          <td>12</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
    </div>
      
      <div className="pagination">
        <button className="page-btn">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
      </div>
    <div className="side-section">
      <div className="popular-posts">
        <h3>우리 지역 인기 게시글</h3>
        <ol>
          <li>와우!</li>
          <li>예이~</li>
          <li>나는 정말</li>
          <li>좋다</li>
          <li>5</li>
        </ol>
      </div>
      <div className="festivals">
        <h3>우리 지역 축제</h3>
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ol>
      </div>
    </div>       
</div>



);
};



export default RegionBoardList;
