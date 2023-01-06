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
import Location from './routes/Location';
import List from './routes/List';
import Stories from './routes/Stories';

import BearMaiden from './stories/bearmaiden';
import Dual from './stories/dual';
import Landscape from './stories/landscape';
import Clark from './stories/clark';

function App () {
  return (
    <>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Personas" element={<Personas />} />
           <Route path="/Responsive" element={<Responsive />} />
           <Route path="/Iterative" element={<Iterative /> } />
           <Route path="/Development" element={<Development />} />
           <Route path="/Arcana" element={<Arcana />} />
           <Route path="/Location" element={<Location />} />
           <Route path="/List" element={<List />} />
           <Route path="/Stories" element={<Stories />} />

           <Route path="/BearMaiden" element={<BearMaiden />} />
           <Route path="/Dual" element={<Dual />} />
           <Route path='/Landscape' element={<Landscape />} />
           <Route path='/Clark' element={<Clark />} />
         </Routes>
     </>
    );
}

export default App;