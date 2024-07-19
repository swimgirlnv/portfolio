import { HashLink as Link } from "react-router-hash-link";
import "./topbar.css";

function TopBar() {
  return (
    <div className="top-bar dark-text" id="navbar">
      <div className="navbar-first">
        <Link to="/#Intro">
          <strong>Becca's Portfolio</strong>
        </Link>
      </div>
      <div className="navbar-rest">
        <Link to="/#About">About</Link>
        <Link to="/#Projects">Projects</Link>
        <Link to="/Stories">Stories</Link>
        <Link to="/Gallery">Gallery</Link>
      </div>
    </div>
  );
}

export default TopBar;
