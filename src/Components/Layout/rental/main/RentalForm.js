import React, { useState } from 'react';
import './RentalForm.css';
import { useNavigate } from 'react-router-dom';

const RentalForm = () => {
  const navigate=useNavigate();
  const [selectedResidence, setSelectedResidence] = useState('맨션');
  const [address, setAddress] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rentPrice, setRentPrice] = useState('');

  const handleResidenceChange = (event) => {
    setSelectedResidence(event.target.value);
  };

  return (
    <div className="rental-form">


      <h2>미나토구의 아파트</h2>

      <form>
        <div className="form-group">
          <label>거주 유형:</label>
          <div className="residence-types">
            {['맨션', '주택', '별장', '원룸', '전통 주택'].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="residence"
                  value={type}
                  checked={selectedResidence === type}
                  onChange={handleResidenceChange}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>주소:</label>
          <div className="address-input">
            <span className="location-icon">📍</span>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="도로 도, 이바라키 현, 도쿄시..."
            />
          </div>
        </div>

        <div className="form-group">
          <label>렌탈 날짜:</label>
          <div className="date-input">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span>~</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>렌탈 가격:</label>
          <div className="price-input">
            <span className="currency-icon">¥</span>
            <input
              type="text"
              value={rentPrice}
              onChange={(e) => setRentPrice(e.target.value)}
              placeholder="10,000"
            />
          </div>
        </div>

        <div className="form-buttons">
          <button type='button' onClick={()=>{
            navigate(-1);            
          }}>뒤로가기</button>
          <button type="button">임시 저장</button>
          <button type="submit">등록</button>
        </div>
      </form>
    </div>
  );
};

export default RentalForm;
