import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = async () => {
    const response = await fetch('http://localhost:9002/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const botMessage = data.response;

    setMessages([...messages, { text: userInput, sender: 'user' }]);
    setMessages([...messages, { text: botMessage, sender: 'bot' }]);
    setUserInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== '') {
      sendMessage();
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded shadow p-8 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Buddy</h1>
        <div className="h-80 overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded ${message.sender === 'user' ? 'bg-gray-200 text-right' : 'bg-green-200'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your message"
            className="flex-grow border border-gray-300 rounded-l p-2 outline-none"
          />
          <button type="submit" className="bg-green-500 text-white px-4 rounded-r">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
