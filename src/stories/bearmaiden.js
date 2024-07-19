
import "./stories.css";

function BearMaiden() {
  return (
    <div className="page-container-big">
      <div className="story-container">
        <div className="story">
          <h3>The Bear and the Maiden Fair</h3>
          <br></br>
          <div className="imgs">
            <img src="https://i.imgur.com/AtaJVOv.png" width="100%"></img>
          </div>
          <br></br>
          <iframe 
          className="embed"
          src="https://docs.google.com/document/d/e/2PACX-1vSASnrBleTO5ddxolZZGbjQaWnSU5SxpbuHyyEnwglMEjE1qTpMbQlxCFBGiOR6ann3Z76A5LHgbXX3/pub?embedded=true"></iframe>
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

export default BearMaiden;
