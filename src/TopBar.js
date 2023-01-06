import { Link } from 'react-router-dom';
import './App.css'

function TopBar () {
  return (
    <div className="top-bar" id="navbar">
        <Link className="navbar-first" to="/"><strong>Final Portfolio</strong></Link>
        <a href="#About">About</a>
        <div className="separator"></div>
        <a href="#Projects">Projects</a>
        <div className="separator"></div>
        <Link className="navbar-last" to="/Stories">Stories</Link>
    </div>
  );
}

export default TopBar;