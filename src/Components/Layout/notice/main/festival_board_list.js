import React, { useEffect,useState } from 'react';
import './festival_board_list.css';
import { useNavigate ,useParams } from "react-router-dom";
import axios from 'axios';

const RegionFestivalBoard = () => {
  const navigate = useNavigate();
  const { region } = useParams();  
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    const fetchPosts=async ()=>{
      try{
        const response=await axios.get(`http://localhost:8080/festival/category/${region}`);
         if (response.data.length === 0) {
          console.log('No posts found for this region');
        } else {
          setPosts(response.data);
        }
      } catch (error) {
        console.error('게시글 데이터를 가져오는 중 에러 발생:', error);
      }
      };
      fetchPosts();
    },[region]);


  
  return (
    <div className="festival-board">
      {/* 상단 툴바 */}
      <div className="toolbar">
        <button className="blue-btn">{region}</button>
        <input type="text" placeholder="키워드를 입력하세요" className="search-bar" />
        <button className="search">검색</button>
        <button className="purple-btn"
          onClick={()=>{
            navigate(`/notice/region/board/list/${region}`);  // 해당 지역으로 이동
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
          {posts.map((post, index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td onClick={() => navigate(`/notice/view/festival/${post.n_id}`)}>
                {post.title}
              </td>
                <td>{post.userKey}</td>
                <td>{post.createdDate}</td>
                <td>{post.viewCnt}</td>
                <td>{post.likeCnt}</td>
              </tr>
            ))}
       
          </tbody>
        </table>
      </div>
            {/* 페이지네이션 */}
            <div className="pagination">
        <button className="page-btn">1</button>
        {/* <button className="page-btn">2</button>
        <button className="page-btn">3</button> */}
      </div>

      {/* 사이드 섹션 */}
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

export default RegionFestivalBoard;
