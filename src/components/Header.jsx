import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const color = useContext(ThemeContext)

  return (
    <header className="Header">
      <h1 style={{ color }} >Holanda Mundo de React Hooks</h1>
      <button type="button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
      <p>Dark Mode: {`${darkMode}`}</p>
    </header>
  );
};

export default Header;
