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
           <Route path="/" element={<Home />} />
           <Route path="personas" element={<Personas />} />
           <Route path="responsive" element={<Responsive />} />
           <Route path="iterative" element={<Iterative /> } />
           <Route path="development" element={<Development />} />
           <Route path="arcana" element={<Arcana />} />
           <Route path="location" element={<Location />} />
           <Route path="list" element={<List />} />
         </Routes>
     </Router>
     </>
    );
}

export default App;