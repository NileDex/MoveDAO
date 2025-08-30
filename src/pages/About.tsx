import React from 'react';
import SimpleReveal from '../components/SimpleReveal';
import Header from '../components/Header';
import pengImage from '../assets/peng.png';
import faviconImage from '../assets/favicon-DF3inq3Z.png';
import { AiOutlineEye } from 'react-icons/ai';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { HiOutlineUsers } from 'react-icons/hi';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Header currentPage="about" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 lg:px-8 max-w-7xl mx-auto">
        <SimpleReveal delay={0}>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              About Move DAO
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of decentralized governance in the Move programming language ecosystem
            </p>
          </div>
        </SimpleReveal>

        {/* Mission Section */}
        <SimpleReveal delay={200}>
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Mission Text */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-left">Our Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed text-left">
                  Move DAO exists to foster innovation, education, and adoption of the Move programming language. 
                  We believe in the power of community-driven development and decentralized decision-making to 
                  shape the future of blockchain technology and smart contract development.
                </p>
              </div>
              
              {/* Peng Image */}
              <div className="flex justify-center lg:justify-end">
                <img 
                  src={pengImage} 
                  alt="Move DAO" 
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </SimpleReveal>

        {/* Battle of Olympus Section */}
        <SimpleReveal delay={400}>
          <div className="mb-16">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              In June, Move DAO launched on Battle of Olympus Hackathon. Hundreds of teams heeded our call, building on the Movement testnet. Participants built in AI and DeFi, NFTs and Gaming, using the speed, power, and security that Move DAO champions to power blockchain apps and infra across the vast crypto spectrum.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Today, the battlefield dust has settled for Move DAO's groundbreaking initiative.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              From 2,100 project submissions to Move DAO's hackathon, 85 finalists emerged.
              <a 
                href="https://movementlabs.notion.site/Olympus-Hackathon-Finalists-588d4533f53a4a32b0a67f7cb9846452" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors underline ml-1"
              >
                View the finalists here.
              </a>
            </p>
          </div>
        </SimpleReveal>


        {/* Values Section */}
        <SimpleReveal delay={800}>
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Values</h2>
            
            {/* Transparency */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Transparency</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  All decisions, funding, and operations are conducted in the open with full community visibility.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 w-48 h-48 flex items-center justify-center">
                    <AiOutlineEye className="w-20 h-20 text-white transform group-hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 w-48 h-48 flex items-center justify-center">
                    <HiOutlineLightBulb className="w-20 h-20 text-white transform group-hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
              </div>
              
              <div className="text-right order-1 lg:order-2">
                <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We constantly push boundaries and explore new possibilities in blockchain technology and smart contracts.
                </p>
              </div>
            </div>

            {/* Collaboration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Collaboration</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We believe the best solutions come from diverse minds working together toward common goals.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 w-48 h-48 flex items-center justify-center scale-x-[-1]">
                    <HiOutlineUsers className="w-20 h-20 text-white transform group-hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SimpleReveal>

        {/* CTA Section */}
        <SimpleReveal delay={1000}>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to help shape the future of the Move programming language ecosystem?
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
                Get Involved Today
              </div>
            </a>
          </div>
        </SimpleReveal>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-8 sm:py-12 lg:px-8 border-t border-white/10 mt-16">
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
  );
};

export default About;