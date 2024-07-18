import "./stories.css";

function Dual() {
  return (
    <div className="page-container-big">
      <div className="story-container">
        <div className="story">
        <iframe 
        className="embed"
        src="https://docs.google.com/document/d/e/2PACX-1vRf-bHZ6UG1FgaSRLNldHVZe_Orfj2zB5xyDKwevpSCfoJMg2Nn3Hp20H1aH4jXLxoeOPC2VaeJ8UN1/pub?embedded=true"></iframe>
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

export default Dual;
