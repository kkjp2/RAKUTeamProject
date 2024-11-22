import React, { useState } from 'react';
import './MoveReviewUP.css';

const UploadReview = () => {
  const [review, setReview] = useState({
    companyName: '',
    serviceRating: '',
    cost: '',
    region: '',
    serviceDate: '',
    comment: '',
  });

  const handleChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以加上提交逻辑，比如将评论上传到服务器
    console.log('评论提交:', review);
  };

  return (
    <div className="upload-review-container">
      <h2>レビューを投稿</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>会社名</label>
          <input
            type="text"
            name="companyName"
            value={review.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>サービス評価</label>
          <input
            type="number"
            name="serviceRating"
            value={review.serviceRating}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>

        <div className="form-group">
          <label>引越し費用</label>
          <input
            type="text"
            name="cost"
            value={review.cost}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>引越し地域</label>
          <input
            type="text"
            name="region"
            value={review.region}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>サービス利用日</label>
          <input
            type="date"
            name="serviceDate"
            value={review.serviceDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>コメント</label>
          <textarea
            name="comment"
            value={review.comment}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>

        <button type="submit" className="submit-btn">投稿する</button>
      </form>
    </div>
  );
};

export default UploadReview;
