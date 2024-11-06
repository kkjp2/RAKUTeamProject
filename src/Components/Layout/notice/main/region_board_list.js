// region_board_list.js
import React from 'react';
import './region_board_list.css';
import { useNavigate,useParams } from "react-router-dom";

const RegionBoardList=()=>{
  // const move="지역 축제 게시판 보러가기";
  const { region } = useParams();  // URL에서 지역 정보를 받아옴
  const navigate = useNavigate();
//   const handleButtonClick = (festival) => {
//     setSelectedBoard(festival);  
// };
return (
  <div className="container">      
  <div className="toolbar">
    <button className="blue-btn">{region}</button>
    <input type="text" placeholder="키워드를 입력하세요" className="search-bar" />
    <button className='search'>검색</button>    
    <button className="purple-btn"
    onClick={()=>{
      navigate(`/notice/festival/board/list/${region}`);
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
  <button className='write'
   onClick={()=>{
      navigate("/notice/writingpage")
    }}
  >
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
          <td>5</td>
          <td>OO지역에 필수가 있나요?</td>
          <td>작성자1</td>
          <td>2024-05-22</td>
          <td>10</td>
          <td>1</td>
        </tr>
        <tr>
          <td>4</td>
          <td onClick={()=>{
            navigate(`/notice/view/board"`);
          }

          }>동네에서 같이 산책...</td>
          <td>작성자2</td>
          <td>2024-05-21</td>
          <td>8</td>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>주차시설이 마땅...</td>
          <td>작성자3</td>
          <td>2024-05-21</td>
          <td>15</td>
          <td>4</td>
        </tr>
        <tr>
          <td>2</td>
          <td>자녀 반려견이랑</td>
          <td>작성자4</td>
          <td>2024-05-21</td>
          <td>40</td>
          <td>5</td>
        </tr>
        <tr>
          <td>1</td>
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
        {/* <button className="page-btn">2</button>
        <button className="page-btn">3</button> */}
      </div>
    <div className="side-section">
      <div className="popular-posts">
        <h3>우리 지역 인기 게시글</h3>
        <ol>
          <li>자녀 반려견이랑...</li>
          <li>주차시설이 마땅...</li>
          <li>동네에서 같이 산책..</li>
          <li>00지역에 필수가 있나요?</li>
          <li>산책로 새로 생..</li>
        </ol>
      </div>
      <div className="festivals">
        <h3>우리 지역 축제</h3>
        <ol>
          <li>후쿠시마 와라지 축제</li>
          <li>모리오카 산사오도리 축제</li>
          <li>아오모리 네부타 축제</li>
          <li>히로사키 네부타 축제</li>
          <li>아키타 칸토 축제</li>
        </ol>
      </div>
    </div>       
</div>



);
};



export default RegionBoardList;
