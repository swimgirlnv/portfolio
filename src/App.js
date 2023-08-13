import React from 'react';
import { HashRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './Home';
import Personas from './routes/Personas';
import Responsive from './routes/Responsive';
import Iterative from './routes/Iterative';
import Development from './routes/Development';
import Arcana from './routes/Arcana';
import Stories from './routes/Stories';

import BearMaiden from './stories/bearmaiden';
import Dual from './stories/dual';
import Landscape from './stories/landscape';
import Clark from './stories/clark';
import Butterfly from './stories/butterfly';
import Kin from './stories/kin';
import Worm from './stories/worm';
import Games from './routes/Games';
import UCLA from './stories/ucla';

import './App.css';
import Footer from './Footer';
import TopBar from './TopBar';

function App () {
  return (
    <div className="page">
    <div className="top-of-page">
      <TopBar />
    </div>
    <div className="meat-of-page">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Personas" element={<Personas />} />
          <Route path="/Responsive" element={<Responsive />} />
          <Route path="/Iterative" element={<Iterative /> } />
          <Route path="/Development" element={<Development />} />
          <Route path="/Arcana" element={<Arcana />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/Games" element={<Games />} />

          <Route path="/BearMaiden" element={<BearMaiden />} />
          <Route path="/Dual" element={<Dual />} />
          <Route path='/Landscape' element={<Landscape />} />
          <Route path='/Clark' element={<Clark />} />
          <Route path='/Butterfly' element={<Butterfly />} />
          <Route path='/Kin' element={<Kin />} />
          <Route path='/Worm' element={<Worm />} />     
          <Route path='/UCLA' element={<UCLA />} />     
        </Routes>
    </div>
    <div className="bottom-of-page">
      <Footer />
    </div>
    </div>
    );
}

export default App;