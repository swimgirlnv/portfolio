import { Link } from 'react-router-dom';
import './App.css'

function TopBar () {
  return (
    <div className="top-bar" id="navbar">
        <Link className="navbar-first" to="/"><strong>Final Portfolio</strong></Link>
        <Link to="#About">About</Link>
        <div className="separator"></div>
        <Link className="navbar-last" to="#Projects">Projects</Link>
    </div>
  );
}

export default TopBar;