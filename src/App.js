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
           <Route path="/portfolio/personas" element={<Personas />} />
           <Route path="/portfolio/responsive" element={<Responsive />} />
           <Route path="/portfolio/iterative" element={<Iterative /> } />
           <Route path="/portfolio/development" element={<Development />} />
           <Route path="/portfolio/arcana" element={<Arcana />} />
           <Route path="/portfolio/location" element={<Location />} />
           <Route path="/portfolio/list" element={<List />} />
         </Routes>
     </Router>
     </>
    );
}

export default App;