import React, { useState } from 'react';
import './rental_chat.css';

const RentalChat = () => {
  const [messages, setMessages] = useState([
    { sender: 'host', text: '그럼입니다. 그 외에 더 궁금한 것이 있나요?' },
    { sender: 'guest', text: '이 주택은 입항됩니까?' },
    { sender: 'host', text: '감사합니다! 떠나실 때 놓고 가는 물건이 없는지 잘 확인하시길 바랍니다. 좋은 추억이 되시길.' }
  ]);

  const [newMessage, setNewMessage] = useState('');

  // 메시지 전송 함수
  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { sender: 'guest', text: newMessage }]);
      setNewMessage(''); // 입력창 초기화
    }
  };

  return (
    <div className="chat-container">
      <h2 className='chath2'>호스트와 대화를 시작해 보세요!</h2>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'host' ? 'host' : 'guest'}`}>
            <div className="message-info">
              {message.sender === 'host' ? (
                <img src="/img/a2.png" alt="Host" className="profile-img" />
              ) : (
                <img src="/img/a1.png" alt="Guest" className="profile-img" />
              )}
              <p className="sender-name">
                {message.sender === 'host' ? '호스트' : '아도니스 그레이엄'}
              </p>
            </div>
            <div className="message-text">
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="message-input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="message-input"
          placeholder="메시지 입력..."
        />
        <button onClick={sendMessage} className="send-button">
          전송
        </button>
      </div>
    </div>
  );
};

export default RentalChat;
