import React from 'react';
import './festival_board_list.css';
import { useNavigate ,useParams } from "react-router-dom";

const RegionFestivalBoard = () => {
  const navigate = useNavigate();
  const { region } = useParams();  

  
  return (
    <div className="festival-board">
      {/* 상단 툴바 */}
      <div className="toolbar">
        <button className="blue-btn">{region}</button>
        <input type="text" placeholder="키워드를 입력하세요" className="search-bar" />
        <button className="search">검색</button>
        <button className="purple-btn"
          onClick={()=>{
            navigate(`/region_board_list/${region}`);  // 해당 지역으로 이동
          }}>지역 커뮤니티 게시판 보러가기</button>
      </div>

      {/* 키워드 섹션 */}
      <div className="keyword-section">
        <p>사용자들이 많이 검색한 키워드</p>
        <div className="keywords">
          <span>#야오모리 시</span>
          <span>#네부타 축제</span>
          <span>#센다이 시</span>
          <span>#식당</span>
          <span>#숙소</span>
        </div>
      </div>

      {/* 테이블 섹션 */}
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
              <td onClick={()=>{
                navigate(`/view_festival`)
              }}>센다이 네부타 축제</td>
              <td>관리자</td>
              <td>2024-05-22</td>
              <td>44</td>
              <td>4</td>
            </tr>
            <tr>
              <td>14</td>
              <td>아오모리 시의 네부타 축제</td>
              <td>관리자</td>
              <td>2024-05-21</td>
              <td>97</td>
              <td>50</td>
            </tr>
            <tr>
              <td>13</td>
              <td>아키타의 큰 불 축제</td>
              <td>관리자</td>
              <td>2024-05-21</td>
              <td>66</td>
              <td>25</td>
            </tr>
            <tr>
              <td>12</td>
              <td>가을 불 축제</td>
              <td>관리자</td>
              <td>2024-05-21</td>
              <td>77</td>
              <td>40</td>
            </tr>
            <tr>
              <td>11</td>
              <td>여름 춤 축제</td>
              <td>관리자</td>
              <td>2024-05-21</td>
              <td>111</td>
              <td>111</td>
            </tr>
          </tbody>
        </table>
      </div>
            {/* 페이지네이션 */}
            <div className="pagination">
        <button className="page-btn">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
      </div>

      {/* 사이드 섹션 */}
      <div className="side-section">
        <div className="popular-posts">
          <h3>우리 지역 인기 게시글</h3>
          <ol>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
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

export default RegionFestivalBoard;
