import React, { useState, useEffect } from 'react';
import '../../main/styles/PriceCalculation.css';

function PriceCalculation() {
  const [rent, setRent] = useState(0); // 기본 월세
  const [additionalCost, setAdditionalCost] = useState(0); // 기본 관리비 3000엔
  const [finalCost, setFinalCost] = useState(rent + additionalCost);

  // 월세 또는 관리비 값이 변경될 때마다 최종 비용을 계산
  useEffect(() => {
    setFinalCost(Number(rent) + Number(additionalCost)); // 덧셈 방식으로 계산
  }, [additionalCost, rent]);

  // 관리비 입력값 처리
  const handleAdditionalCostChange = (e) => {
    setAdditionalCost(e.target.value);
  };

  // 월세 입력값 처리
  const handleRentChange = (e) => {
    setRent(e.target.value);
  };

  // 새 창을 열어 계산기를 표시하는 함수
  const handleCalculate = () => {
    const newWindow = window.open('', '_blank', 'width=400,height=400');
    
    const calculatorContent = `
      <html>
        <head>
          <title>계산기</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            input { width: 100px; margin-right: 10px; }
            button { margin-top: 10px; padding: 5px 10px; }
          </style>
        </head>
        <body>
          <h2>초기 견적 계산기</h2>
          <label for="rent">월세: </label>
          <input type="number" id="rent" value="${rent}" readonly /><br/>

          <label for="additionalCost">관리비: </label>
          <input type="number" id="additionalCost" value="${additionalCost}" /><br/>

          <h3>초기 견적 계산하기</h3>
          <button onclick="calculateTotal()" className='price-calculation-button'>계산하기</button>
          <p id="totalCost">초기 견적: </p>

          <script>
            function calculateTotal() {
              const rent = document.getElementById('rent').value;
              const additionalCost = document.getElementById('additionalCost').value || 3000;
              const total = parseInt(rent) + parseInt(additionalCost);
              document.getElementById('totalCost').innerText = '초기 견적: ' + total + ' 엔';
            }
          </script>
        </body>
      </html>
    `;

    // 새 창에 내용을 작성하고 닫음
    newWindow.document.write(calculatorContent);
    newWindow.document.close();
  };

  return (
    <div className="price-calculation">
      <div>
        <label>월세: </label>
        <input 
          type="number" 
          value={rent} 
          onChange={handleRentChange} 
        />
      </div>
      
      <div>
        <label>관리비: </label>
        <input 
          type="number" 
          value={additionalCost} 
          onChange={handleAdditionalCostChange}
        />
      </div>

      <div>
        <p>최종 비용: {finalCost} 엔</p>
      </div>

      <button onClick={handleCalculate} className='price-calculation-button'>
        계산하기
      </button>
    </div>
  );
}

export default PriceCalculation;
