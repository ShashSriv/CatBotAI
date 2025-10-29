import React from 'react';
import './Chatbot.css';

const Chatbot = () => {
  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        <div className="message received">
          <p>Hello! I'm CatBot. Ask me anything, if you dare.</p>
        </div>
        <div className="message sent">
          <p>How do I learn React?</p>
        </div>
        <div className="message received">
          <p>Just read the docs. It's not that hard. Now, ask me something interesting.</p>
        </div>
      </div>
      <div className="chatbot-input">
        <input type="text" placeholder="Type your message here..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
