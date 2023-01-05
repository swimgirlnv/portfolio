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
         </Routes>
     </>
    );
}

export default App;