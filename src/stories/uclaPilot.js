import "./stories.css";

function UCLAPilot() {
  return (
    <div className="page-container-big">
      <div className="story-container">
        <div className="story">
          <iframe 
          className="embed"
          src="https://docs.google.com/document/d/e/2PACX-1vQ1yOtLBGUcX69EAcn5qRm2rOCCfiluzmmB56LeHdVQmeawl7Aw5_ljAJ-XZLzpcw-y-nM97Oi7U3Ug/pub?embedded=true"></iframe>
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

export default UCLAPilot;
