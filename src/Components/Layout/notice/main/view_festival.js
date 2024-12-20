import React, { useState,useEffect } from 'react';
import './view_festival.css';
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewFestival = () => {
  const { id }=useParams();
  const [post,setPost]=useState({});
  const [comment, setComment]=useState([]);
  const [newComment, setNewComment] = useState(""); // 새 댓글 입력 상태
  
  useEffect(()=>{
    const fetchPostAndComments=async ()=>{
      try{
        const postResponse=await axios.get(`http://localhost:8080/festival/${id}`);
        setPost(postResponse.data);
        const commentsResponse=await axios.get(`http://localhost:8080/festivals/${id}`);
        setComment(commentsResponse.data);
        console.log(commentsResponse.data)
      }catch(error){
        console.error('게시글 또는 댓글 조회 중 오류 발생:', error);
      }
    };
    fetchPostAndComments();
  }, [id]);
  const token = window.sessionStorage.getItem('accesstoken'); // 액세스 토큰을 세션에서 가져오기

  // const handleCommentSubmit=async(e)=>{
  //   e.preventDefault();
  //   try {
  //     await axios.post(
  //       `http://localhost:8080/festivals/${id}/comments`, 
  //       { commentText: newComment }, // 요청 바디에 댓글 내용만
  //       { headers: { Authorization: `Bearer ${token}` } } // Authorization 헤더 추가
  //     );
  //     setNewComment(""); // 댓글 입력 초기화


  //   } catch (error) {
  //     console.error('댓글 등록 중 오류 발생:', error);
  //   }
    
  // };
  return (
    <div className="festival-post-container">
      <header className="post-header">
        <div className="region-tag">도호쿠 지방</div>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-date">{post.createdDate}</div>
      </header>

      <div className="post-reactions">
        <div className="reaction-icons">
          <span className="reaction-item"><FaEye />
          {post.viewCnt}</span>
          
        </div>
      </div>

      <div className="post-content">
        <img
          className="post-image"
          src="img/festival.png"
          alt="네부타 축제"
        />
        <p>
          {post.content}
        </p>
      </div>

      <div className="post-actions">
        <button className="action-btn"><FaStar  color='yellow'/>추천: {post.likeCnt}</button>
        <button className="action-btn">즐겨찾기</button>
      </div>

      <div className="comment-section">
        <div className="comment-input">
          <input type="text" placeholder="여기에 댓글을 입력하세요..." />
          <button className="submit-btn">등록</button>
        </div>

        <div className="comment-list">
          <div className="comment-item">
            <span className="comment-author">a</span>
            <span className="comment-text">재밌겠당~</span>
            <span className="comment-date">2024-05-28</span>
          </div>
          <div className="comment-item">
            <span className="comment-author">d</span>
            <span className="comment-text">우와</span>
            <span className="comment-date">2024-05-28</span>
          </div>
          <div className="comment-item">
            <span className="comment-author">PPP</span>
            <span className="comment-text">가보고 싶다!</span>
            <span className="comment-date">2024-05-28</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFestival;