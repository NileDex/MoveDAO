
// import './App.css'
// import Footer from './component/footer'
// import Header from './component/header'
// import Hero from './component/hero'
// import Offer from './component/offer'
// import PartnershipLogos from './component/patnership'
// import Team from './component/team'
// import Working from './component/working'

// function App() {


//   return (
//     <>
//       <Header/>
//       <Hero/>
//       <PartnershipLogos/>
//       <Working/>
//       <Offer/>
//       <Team/>
//       <Footer/>
//     </>
//   )
// }

// export default App
import './App.css';
import Footer from './component/footer';
import Header from './component/header';
import Hero from './component/hero';
import Offer from './component/offer';
import PartnershipLogos from './component/patnership';
import Team from './component/team';
import Working from './component/working';
import { useRef } from 'react';

function App() {
  // Create refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const partnershipRef = useRef<HTMLDivElement>(null);
  const workingRef = useRef<HTMLDivElement>(null);
  const offerRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a specific section
  const scrollToSection = (section: string) => {
    const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      hero: heroRef,
      partnership: partnershipRef,
      working: workingRef,
      offer: offerRef,
      team: teamRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Pass the scrollToSection function to Header */}
      <Header scrollToSection={scrollToSection} />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={partnershipRef}>
        <PartnershipLogos />
      </div>
      <div ref={workingRef}>
        <Working />
      </div>
      <div ref={offerRef}>
        <Offer />
      </div>
      <div ref={teamRef}>
        <Team />
      </div>
      <Footer />
    </>
  );
}

export default App;
