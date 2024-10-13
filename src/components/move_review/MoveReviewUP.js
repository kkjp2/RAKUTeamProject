import React, { useState } from 'react';
import './MovereviewUP.css';

function ProductReview() {
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Rating:', rating);
    console.log('Selected Tags:', tags);
  };

  const toggleTag = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter(t => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  return (
    <div className="reviewUP_product-review">
      <div className="reviewUP_rating">
        <h3>総合評価</h3>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? 'reviewUP_on' : 'reviewUP_off'}
              onClick={() => setRating(index)}
            >
              <span className="reviewUP_star">&#9733;</span>
            </button>
          );
        })}
      </div>
      <div className="reviewUP_tags">
        <h3>サービスの態度</h3>
        {['親切', '迅速', 'プロフェッショナル', '丁寧'].map(tag => (
          <button
            key={tag}
            className={tags.includes(tag) ? 'reviewUP_tag-selected' : 'reviewUP_tag'}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div>
      <textarea className="reviewUP_textarea"></textarea>
      </div>
      <button onClick={handleSubmit} className="reviewUP_submit-button">提出</button>
    </div>
  );
}

export default ProductReview;
