import { HashLink as Link } from 'react-router-hash-link';
import './App.css'

function TopBar () {
  return (
    <div className="top-bar" id="navbar">
        <Link className="navbar-first" to="/"><strong>Becca's Portfolio</strong></Link>
        <Link to="/#About">About</Link>
        <div className="separator"></div>
        <Link to="/#Projects">Projects</Link>
        <div className="separator"></div>
        <Link className="navbar-last" to="/Stories">Stories</Link>
    </div>
  );
}

export default TopBar;