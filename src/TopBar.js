import { HashLink as Link } from 'react-router-hash-link';
import './App.css'

function TopBar () {
  return (
    <div className="top-bar" id="navbar">
      <div className="navbar-first">
      <Link to="/"><strong>Becca's Portfolio</strong></Link>
      </div>
      <div className="navbar-rest">
        <Link to="/#About">About</Link>
        <div className="separator"></div>
        <Link to="/#Projects">Projects</Link>
        <div className='separator'></div>
        {/* <Link to="/Games">Games</Link> */}
        {/* <div className="separator"></div> */}
        <Link to="/Stories">Stories</Link>
      </div>
        
    </div>
  );
}

export default TopBar;