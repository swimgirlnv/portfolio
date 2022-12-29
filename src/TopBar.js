import './App.css'

function TopBar () {
  return (
    <div className="top-bar" id="navbar">
        <a className="navbar-first" href="/"><strong>Final Portfolio</strong></a>
        <a href="/#About">About</a>
        <div className="separator"></div>
        <a className="navbar-last" href="#Projects">Projects</a>
    </div>
  );
}

export default TopBar;