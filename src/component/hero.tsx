import { useState, useEffect } from 'react';
import './css/hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const words = ['Move DAO', 'Governance ON-Chain'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    let typeTimeout: string | number | NodeJS.Timeout | undefined;
    let deleteTimeout: string | number | NodeJS.Timeout | undefined;

    if (isTyping) {
      if (text.length < words[currentWordIndex].length) {
        typeTimeout = setTimeout(() => {
          setText(words[currentWordIndex].slice(0, text.length + 1));
        }, 100);
      } else {
        deleteTimeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      if (text.length > 0) {
        deleteTimeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => {
      clearTimeout(typeTimeout);
      clearTimeout(deleteTimeout);
    };
  }, [text, isTyping, currentWordIndex]);

  return (
    <div className="hero-wrapper">
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="text">
          <p>Welcome to</p>
          <h1>
            {currentWordIndex === 0 ? (
              <>
                {text}
                {text === 'Move DAO' && (
                  <span className="highlight"> ⚡</span>
                )}
              </>
            ) : (
              text
            )}
          </h1>
        </div>
      </div>
      <div className="hero-app-card">
      </div>
      <div className='razor'></div>
      <div className='wallets'></div>
    </div>
  );
};

export default Hero;
