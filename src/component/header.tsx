// import './css/header.css';
// import favicon from '../assets/favicon.png';
// import { useState, useEffect } from 'react';

// const Header = () => {
//   const [isHidden, setIsHidden] = useState(false);
//   let lastScrollY = 0;

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > lastScrollY && currentScrollY > 100) {
//       setIsHidden(true);
//     } else {
//       setIsHidden(false);
//     }

//     lastScrollY = currentScrollY;
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`header ${isHidden ? "hidden" : ""}`}>
//       <div className="logo">
//         <img src={favicon} alt="logo" />
//       </div>
//       <div className="headinfob">
//         <p>Home</p>
//         <p>Working</p>
//         <p>Team</p>
//         <p>Tokenomics</p>
//       </div>
//       <div className="headerspecial">
//         <p className="prior">Launch Dapp</p>
//       </div>
//     </div>
//   );
// };

// export default Header;
import './css/header.css';
import favicon from '../assets/favicon.png';
import { useState, useEffect } from 'react';

const Header = ({ scrollToSection }: { scrollToSection: (section: string) => void }) => {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isHidden ? "hidden" : ""}`}>
      <div className="logo">
        <img src={favicon} alt="logo" />
      </div>
      <div className="headinfob">
        <p onClick={() => scrollToSection('hero')}>Home</p>
        <p onClick={() => scrollToSection('working')}>Working</p>
        <p onClick={() => scrollToSection('team')}>Team</p>
        <p onClick={() => scrollToSection('offer')}>Offer</p>
      </div>
      <div className="headerspecial">
        <p className="prior">Launch Dapp</p>
      </div>
    </div>
  );
};

export default Header;
