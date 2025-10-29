import React from 'react';
import './Header.css';
import TypingAnimation from './TypingAnimation';

const Header = () => {
  return (
    <header className="header">
      <h1>CatBot</h1>
      <TypingAnimation text="chat with me for help" />
    </header>
  );
};

export default Header;
