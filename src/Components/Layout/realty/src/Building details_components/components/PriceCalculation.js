import React, { useState, useEffect } from 'react';
import './styles/PriceCalculation.css';

function PriceCalculation() {
  const [rent, setRent] = useState(49000); // 기본 월세
  const [additionalCost, setAdditionalCost] = useState(3000); // 기본 관리비 3000엔
  const [finalCost, setFinalCost] = useState(rent + additionalCost);

  // 관리비 값이 변경되면 최종 비용을 업데이트
  useEffect(() => {
    setFinalCost(rent + (additionalCost || 3000)); // 관리비가 없으면 3000엔 기본값
  }, [additionalCost, rent]);

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
          <button onclick="calculateTotal()">계산하기</button>
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
      
      <button onClick={handleCalculate}>계산하기</button>
    </div>
  );
}

export default PriceCalculation;
