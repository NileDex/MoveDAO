import './css/header.css';
import favicon from '../assets/favicon.png';
import { useState, useCallback } from 'react';

const Header = () => {
  const [isHeadinfoVisible, setIsHeadinfoVisible] = useState(false);

  const toggleHeadinfo = useCallback(() => {
    setIsHeadinfoVisible((prev) => !prev);
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <img src={favicon} alt="logo" />
      </div>
      <div className="headinfob">
        <p>Home</p>
        <p>Working</p>
        <p>Team</p>
        <p>Tokenomics</p>
      </div>
      <div className="headerspecial">
        <p className="prior">Launch Dapp</p>
      </div>
      <button
        className="menu-toggle"
        onClick={toggleHeadinfo}
        aria-expanded={isHeadinfoVisible}
        aria-controls="mobile-menu"
      >
        ☰
      </button>
      <div
        id="mobile-menu"
        className={`headinfo ${isHeadinfoVisible ? 'visible' : ''}`}
      >
        <p>Home</p>
        <p>Working</p>
        <p>Team</p>
        <p>Tokenomics</p>
        <p className="prior">Launch Dapp</p>
      </div>
    </div>
  );
};

export default Header;
