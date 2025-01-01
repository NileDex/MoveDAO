import './App.css';
import { useRef } from 'react';
import Footer from './component/footer';
import Header from './component/header';
import Hero from './component/hero';
import Offer from './component/offer';
import PartnershipLogos from './component/patnership';
import Team from './component/team';
import Working from './component/working';

function App() {
  const homeRef = useRef<HTMLDivElement>(null); // Add type
  const workingRef = useRef<HTMLDivElement>(null); // Add type
  const teamRef = useRef<HTMLDivElement>(null); // Add type
  const tokenomicsRef = useRef<HTMLDivElement>(null); // Add type

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header
        onScroll={(section) => {
          if (section === 'home') scrollToSection(homeRef);
          if (section === 'working') scrollToSection(workingRef);
          if (section === 'team') scrollToSection(teamRef);
          if (section === 'tokenomics') scrollToSection(tokenomicsRef);
        }}
      />
      <div ref={homeRef}>
        <Hero />
        <PartnershipLogos />
      </div>
      <div ref={workingRef}>
        <Working />
      </div>
      <div ref={tokenomicsRef}>
        <Offer /> {/* Assuming Tokenomics is here */}
      </div>
      <div ref={teamRef}>
        <Team />
      </div>
      <Footer />
    </>
  );
}

export default App;
