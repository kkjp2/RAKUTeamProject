import React, { useEffect, useState } from 'react';
import './region_board_list.css';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const RegionBoardList = () => {
  const { region } = useParams(); // URL에서 카테고리 번호를 가져옴
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]); 
  console.log(region); // 여기서 값이 제대로 출력되는지 확인
  

  // API 호출로 카테고리별 게시글 가져오기
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log(region);
        const response = await axios.get(`http://localhost:8080/board/category/${region}`);
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
  }, [region]);

  return (
    <div className="festival-board">
      {/* 툴바 */}
      <div className="toolbar">
        <button className="blue-btn">{region}카테고리</button>
        <input type="text" placeholder="키워드를 입력하세요" className="search-bar" />
        <button className='search'>검색</button>
        <button
          className="purple-btn"
          onClick={() => navigate(`/notice/festival/board/list/${region}`)}
        >
          지역 축제 게시판 보러가기
        </button>
      </div>

      {/* 글쓰기 버튼 */}
      <div className='toolbar1'>
        <button
          className='write'
          onClick={() => navigate(`/notice/writingpage/${region}`)} // 카테고리와 함께 글쓰기 페이지 이동
        >
          글쓰기
        </button>
      </div>

      {/* 게시판 테이블 */}
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
                <td onClick={() => navigate(`/notice/view/board/${post.n_id}`)}>
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
        {/* 추가 페이지 버튼 필요 시 여기에 추가 */}
      </div>

      {/* 사이드 섹션 */}
      <div className="side-section">
        <div className="popular-posts">
          <h3>우리 지역 인기 게시글</h3>
          <ol>
            {posts.slice(0, 5).map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
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
