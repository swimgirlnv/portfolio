import React from 'react';
import { BrowserRouter as Router,
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
     <Router>
         <Routes>
           <Route path="/portfolio/" element={<Home />} />
           <Route path="/portfolio/Personas" element={<Personas />} />
           <Route path="/portfolio/Responsive" element={<Responsive />} />
           <Route path="/portfolio/Iterative" element={<Iterative /> } />
           <Route path="/portfolio/Development" element={<Development />} />
           <Route path="/portfolio/Arcana" element={<Arcana />} />
           <Route path="/portfolio/Location" element={<Location />} />
           <Route path="/portfolio/List" element={<List />} />
         </Routes>
     </Router>
     </>
    );
}

export default App;