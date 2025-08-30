import React from 'react';
import Threads from '../components/Threads';
import SimpleReveal from '../components/SimpleReveal';
import Header from '../components/Header';
import heroImage from '../assets/hero.png';
import faviconImage from '../assets/favicon-DF3inq3Z.png';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-white relative overflow-hidden">
      <Header currentPage="home" />

      {/* Hero Section with Threads */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Threads
            color={[1.0, 0.82, 0.11]} // #ffd11b converted to RGB
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                  Move DAO
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl lg:max-w-none leading-relaxed px-2 sm:px-0">
                  Empowering decentralized governance and innovation in the Move ecosystem. 
                  Build, govern, and shape the future of blockchain technology.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center px-4 sm:px-0">
                <a 
                  href="https://move-dao-app.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto p-0.5 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105"
                  style={{
                    background: 'linear-gradient(45deg, #ffc30d, #b80af7)',
                  }}
                >
                  <div className="bg-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white">
                    Explore the App
                  </div>
                </a>
                <a 
                  href="https://app.gitbook.com/o/nFUAH0ffI6Uqq0YRk5va/s/5O1XPSLoeJkFL4tBQ2Zt/guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto border border-white/20 hover:border-white/40 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:bg-white/5 inline-flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <img 
                    src={heroImage} 
                    alt="Move DAO Hero" 
                    className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle transition overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent z-5"></div>
      </section>

      {/* Main Content Section */}
      <div className="relative z-10 bg-dark-950">

        {/* Features Grid */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <SimpleReveal delay={0}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Decentralized Governance</h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base flex-1">
                  Participate in community-driven decision making. Vote on proposals, contribute to discussions, and help shape the future of the Move ecosystem.
                </p>
              </div>
            </SimpleReveal>

            <SimpleReveal delay={200}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Innovation Hub</h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base flex-1">
                  Foster innovation in the Move programming language. Support developers, fund research, and accelerate the adoption of Move technology.
                </p>
              </div>
            </SimpleReveal>

            <SimpleReveal delay={400}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 md:col-span-2 lg:col-span-1 h-full flex flex-col">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Global Community</h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base flex-1">
                  Join a vibrant community of developers, validators, and enthusiasts building the next generation of blockchain applications.
                </p>
              </div>
            </SimpleReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center border border-white/10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Ready to Shape the Future?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
              Join Move DAO today and become part of the decentralized governance revolution. Your voice matters in building tomorrow's blockchain infrastructure.
            </p>
            <a 
              href="https://move-dao-app.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block p-0.5 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105"
              style={{
                background: 'linear-gradient(45deg, #ffc30d, #b80af7)',
              }}
            >
              <div className="bg-gray-900 px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-white">
                Get Started Now
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 sm:px-6 py-8 sm:py-12 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden">
                  <img 
                    src={faviconImage} 
                    alt="Move DAO Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg sm:text-xl font-bold">Move DAO</span>
              </div>
              
              <div className="flex items-center space-x-4 sm:space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                  <span className="sr-only">Discord</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.5 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4.5C3 3.12 4.12 2 5.5 2h9C15.88 2 17 3.12 17 4.5v7C17 12.88 15.88 14 14.5 14H8l-5 4V4.5z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400 text-sm sm:text-base px-4 sm:px-0">&copy; 2024 Move DAO. Empowering decentralized governance in the Move ecosystem.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;