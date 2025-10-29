import React from 'react';
import './App.css';
import Header from './Header';
import Chatbot from './Chatbot';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Chatbot />
      </main>
    </div>
  );
}

export default App;