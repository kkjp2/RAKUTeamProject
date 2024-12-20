// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { AiOutlineLike } from "react-icons/ai";
// import { AiOutlineDislike } from "react-icons/ai";
// import { PiSirenFill } from "react-icons/pi";
// import './view_board.css';

// const ViewBoard = () => {
//   const { id } = useParams(); // 게시글 ID 받아오기
//   const [post, setPost] = useState({});
//   const [comments, setComments] = useState([]); // 댓글 상태
//   const [newComment, setNewComment] = useState(""); // 새 댓글 입력 상태
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };

//   const token = window.sessionStorage.getItem('accesstoken'); // 액세스 토큰을 세션에서 가져오기

//   // 게시글 및 댓글 조회
//   useEffect(() => {
//     const fetchPostAndComments = async () => {
//       try {
//         // 게시글 조회
//         const postResponse = await axios.get(`http://localhost:8080/board/${id}`);
//         setPost(postResponse.data);

//         // 댓글 조회
//         const commentsResponse = await axios.get(`http://localhost:8080/board/${id}/comments`);
//         setComments(commentsResponse.data);
//         console.log("댓글 데이터:", commentsResponse.data);
//       } catch (error) {
//         console.error('게시글 또는 댓글 조회 중 오류 발생:', error);
//       }
//     };

//     fetchPostAndComments();
//   }, [id]); // id가 변경될 때마다 실행되도록

//   // 댓글 등록 처리
//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();

//     if (!newComment) {
//       alert('댓글을 입력하세요');
//       return;
//     }

//     try {
//       await axios.post(
//         `http://localhost:8080/board/${id}/comments`, 
//         { commentText: newComment }, // 요청 바디에 댓글 내용만
//         { headers: { Authorization: `Bearer ${token}` } } // Authorization 헤더 추가
//       );
//       setNewComment(""); // 댓글 입력 초기화

//       // 댓글 등록 후 최신 댓글 목록을 다시 불러오기
//       const commentsResponse = await axios.get(`http://localhost:8080/board/${id}/comments`);
//       setComments(commentsResponse.data);
//     } catch (error) {
//       console.error('댓글 등록 중 오류 발생:', error);
//     }
//   };

//   // 좋아요 처리
//   const handleLike = async () => {
//     const userId = window.sessionStorage.getItem('accesstoken'); // 세션에서 userId 가져오기
//     if (!userId) {
//       alert("로그인이 필요합니다!");
//       return;
//     }
//     try {
//       await axios.post(
//         `http://localhost:8080/board/${id}/like`, 
//         { likeCnt: userId }, // userId 전달
//         { headers: { Authorization: `Bearer ${userId}` } } // 토큰 헤더 추가
//       );
//       alert("좋아요를 눌렀습니다!");
//       // 좋아요 카운트를 업데이트
//       setPost((prevPost) => ({ ...prevPost, likeCnt: prevPost.likeCnt + 1 }));
//     } catch (error) {
//       console.error("좋아요 처리 중 오류 발생:", error);
//     }
//   };

//   return (
//     <div className="post-detail-container">
//       <header className="post-header">
//         <h1 className="post-title">{post.title}</h1>
//         <div className="post-info">
//           <span className="post-author">작성자 {post.member}</span>
//           <span className="post-date">{post.createdDate}</span>
//         </div>
//       </header>

//       <div className="post-content">
//         <p>{post.content}</p>
//       </div>

//       <div className="post-reactions">
//         <div className="reaction-icons">
//           <span className="reaction-item">조회수: {post.viewCnt}</span>
//         </div>
//       </div>

//       <div className="post-actions">
//         <button className="action-btn" onClick={handleLike}>
//           <AiOutlineLike color="blue" />
//           좋아요 {post.likeCnt}
//         </button>
//         <button className="action-btn">
//           <AiOutlineDislike color="red" />
//           싫어요
//         </button>
//         <button className="review-btn" onClick={toggleModal}>
//           <PiSirenFill />
//           신고하기
//         </button>
//         {isOpen && (
//           <div className="modal-overlay">
//             <div className="modal-content">
//               <h2 className="modal-title">신고 하기</h2>
//               <button onClick={toggleModal} className="close-modal-btn">
//                 닫기
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="comment-section">
//         <div className="comment-input">
//           <input
//             type="text"
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="댓글을 입력하세요"
//           />
//           <button className="submit-btn" onClick={handleCommentSubmit}>
//             등록
//           </button>
//         </div>

//         <div className="comment-list">
//           {comments.map((comment) => (
//             <div key={comment.comm_id} className="comment-item">
//               <span className="comment-author">{comment.member}</span>
//               <span className="comment-text">{comment.commentText}</span>
//               <span className="comment-date">{comment.createdDate}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewBoard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiSirenFill } from "react-icons/pi";
import './view_board.css';

const ViewBoard = () => {
  const { id } = useParams(); // 게시글 ID 받아오기
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]); // 댓글 상태
  const [newComment, setNewComment] = useState(""); // 새 댓글 입력 상태
  const [isOpen, setIsOpen] = useState(false);
  const [liked, setLiked] = useState(false); // 좋아요 눌렀는지 확인하는 상태

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const token = window.sessionStorage.getItem('accesstoken'); // 액세스 토큰을 세션에서 가져오기

  // 게시글 및 댓글 조회
  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        // 게시글 조회
        const postResponse = await axios.get(`http://localhost:8080/board/${id}`);
        setPost(postResponse.data);

        // 댓글 조회
        const commentsResponse = await axios.get(`http://localhost:8080/board/${id}/comments`);
        setComments(commentsResponse.data);
        console.log("댓글 데이터:", commentsResponse.data);
      } catch (error) {
        console.error('게시글 또는 댓글 조회 중 오류 발생:', error);
      }
    };

    fetchPostAndComments();
  }, [id]); // id가 변경될 때마다 실행되도록

  // 댓글 등록 처리
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!newComment) {
      alert('댓글을 입력하세요');
      return;
    }

    try {
      await axios.post(
        `http://localhost:8080/board/${id}/comments`, 
        { commentText: newComment }, // 요청 바디에 댓글 내용만
        { headers: { Authorization: `Bearer ${token}` } } // Authorization 헤더 추가
      );
      setNewComment(""); // 댓글 입력 초기화

      // 댓글 등록 후 최신 댓글 목록을 다시 불러오기
      const commentsResponse = await axios.get(`http://localhost:8080/board/${id}/comments`);
      setComments(commentsResponse.data);
    } catch (error) {
      console.error('댓글 등록 중 오류 발생:', error);
    }
  };

  // 좋아요 처리
  const handleLike = async () => {
    if (!token) {
      alert("로그인이 필요합니다!");
      return;
    }

    try {
      if (!liked) {
        await axios.post(
          `http://localhost:8080/board/${id}/like`, 
          {},
          { headers: { Authorization: `Bearer ${token}` } } // 토큰 헤더 추가
        );

        // 좋아요를 눌렀으면 상태 갱신
        setLiked(true);
        alert("좋아요를 눌렀습니다!");

        // 게시글의 좋아요 수를 서버에서 다시 받아와서 갱신
        const postResponse = await axios.get(`http://localhost:8080/board/${id}`);
        setPost(postResponse.data);
      } else {
        alert("이미 좋아요를 눌렀습니다.");
      }
    } catch (error) {
      console.error("좋아요 처리 중 오류 발생:", error);
    }
  };

  return (
    <div className="post-detail-container">
      <header className="post-header">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-info">
          <span className="post-author">작성자 {post.member}</span>
          <span className="post-date">{post.createdDate}</span>
        </div>
      </header>

      <div className="post-content">
        <p>{post.content}</p>
      </div>

      <div className="post-reactions">
        <div className="reaction-icons">
          <span className="reaction-item">조회수: {post.viewCnt}</span>
        </div>
      </div>

      <div className="post-actions">
        <button className="action-btn" onClick={handleLike}>
          <AiOutlineLike color={liked ? "green" : "blue"} />
          좋아요 {post.likeCnt}
        </button>
        <button className="action-btn">
          <AiOutlineDislike color="red" />
          싫어요
        </button>
        <button className="review-btn" onClick={toggleModal}>
          <PiSirenFill />
          신고하기
        </button>
        {isOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2 className="modal-title">신고 하기</h2>
              <button onClick={toggleModal} className="close-modal-btn">
                닫기
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="comment-section">
        <div className="comment-input">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 입력하세요"
          />
          <button className="submit-btn" onClick={handleCommentSubmit}>
            등록
          </button>
        </div>

        <div className="comment-list">
          {comments.map((comment) => (
            <div key={comment.comm_id} className="comment-item">
              <span className="comment-author">{comment.member}</span>
              <span className="comment-text">{comment.commentText}</span>
              <span className="comment-date">{comment.createdDate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewBoard;



