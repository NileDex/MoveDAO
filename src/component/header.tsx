import "./css/header.css";
import favicon from "../assets/favicon.png";
import { useState, useCallback } from "react";

type HeaderProps = {
  onScroll: (section: string) => void; // Explicitly define the type for onScroll
};

const Header: React.FC<HeaderProps> = ({ onScroll }) => {
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
        <p onClick={() => onScroll('home')}>Home</p>
        <p onClick={() => onScroll('working')}>Working</p>
        <p onClick={() => onScroll('team')}>Team</p>
        <p onClick={() => onScroll('tokenomics')}>Tokenomics</p>
      </div>
      <div className="headerspecial">
        <p className="prior" onClick={() => onScroll('tokenomics')}>
          Launch Dapp
        </p>
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
        className={`headinfo ${isHeadinfoVisible ? "visible" : ""}`}
      >
        <p onClick={() => onScroll('home')}>Home</p>
        <p onClick={() => onScroll('working')}>Working</p>
        <p onClick={() => onScroll('team')}>Team</p>
        <p onClick={() => onScroll('tokenomics')}>Tokenomics</p>
        <p className="prior" onClick={() => onScroll('tokenomics')}>
          Launch Dapp
        </p>
      </div>
    </div>
  );
};

export default Header;
