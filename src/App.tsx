import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MiniAudioPlayer from './components/MiniAudioPlayer';
import zatAudio from './assets/ZAT.mp3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      {/* Mini Audio Player */}
      <MiniAudioPlayer audioSrc={zatAudio} />
    </Router>
  );
}

export default App;