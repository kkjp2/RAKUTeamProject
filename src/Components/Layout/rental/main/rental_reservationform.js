import React, { useState } from "react";
import './rental_reservationform.css'; // CSS 파일을 import 합니다.
import { useNavigate } from "react-router-dom";
import { FaAlipay } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";

const RentalReservationForm = () => {
  const navigate=useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedDate && selectedPayment) {
      alert(`날짜: ${selectedDate}\n결제 수단: ${selectedPayment}`);
    } else {
      alert("날짜와 결제 수단을 선택해 주세요.");
    }
  };

  return (
    <div className="reservation-form">
      <div className="content">
        <button className="reservation-btn2">예약하기</button>
        <h2>날짜를 확인 하셨나요?</h2>

        {/* 달력 (가상 달력) */}
        <div className="calendar">          
          <input type="date" onChange={setSelectedDate}  />
          <input type="date" onChange={setSelectedDate}  />
        </div>

        {/* 결제 수단 */}
        <div className="payment-section">
          <p>결제</p>
          <div className="payment-options">
            <label>
            <FaAlipay color="skyblue" />알리페이
              <input type="radio" name="payment" value="알리페이" onChange={handlePaymentChange} />              
            </label>

            <label>
            <FaLine color="green" />라인페이
              <input type="radio" name="payment" value="라인페이" onChange={handlePaymentChange} />              
            </label>
            <label>
            <FaPaypal color="blue" />페이팔
              <input type="radio" name="payment" value="페이팔" onChange={handlePaymentChange} />              
            </label>
            <label>
            <FaApplePay />애플페이
              <input type="radio" name="payment" value="애플페이" onChange={handlePaymentChange} />              
            </label>
          </div>
        </div>

        <div className="buttons">
          <button onClick={handleSubmit} className="submit-btn">신청</button>
          <button className="cancel-btn" onClick={()=>{
            navigate(-1)
          }}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default RentalReservationForm;
