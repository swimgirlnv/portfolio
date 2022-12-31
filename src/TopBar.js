import './App.css'

function TopBar () {
  return (
    <div className="top-bar" id="navbar">
        <a className="navbar-first" href="/portfolio"><strong>Final Portfolio</strong></a>
        <a href="/portfolio/#About">About</a>
        <div className="separator"></div>
        <a className="navbar-last" href="/portfolio/#Projects">Projects</a>
    </div>
  );
}

export default TopBar;