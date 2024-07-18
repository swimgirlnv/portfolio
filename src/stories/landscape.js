import "./stories.css";

function Landscape() {
  return (
    <div className="page-container-small">
      <div className="story-container">
        <div className="story">
        <iframe
        className="embed"
        src="https://docs.google.com/document/d/e/2PACX-1vRTC3dxRhiovyiB6tc1P9hotbl4qhkYCxjF_wQVfKhfdrcTHbUAdYPQAE7MCiJRZc5GHOR35xaQ1s-_/pub?embedded=true"></iframe>
        </div>
        <div className="return">
          <a href="#/Stories">
            <button className="button">Return to Stories</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landscape;
