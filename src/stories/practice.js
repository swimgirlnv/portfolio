import "./stories.css";

function Practice() {
  return (
    <div className="page-container-small">
      <div className="story-container">
      <iframe 
      className="embed"
      src="https://docs.google.com/document/d/e/2PACX-1vTFLvb9E13iDtwnEhV_fhGzw030YDPeGu7wC5ObhhQInNfCZyvlWg_52_8NSdcMBVGknRJQjCxpeMZ0/pub?embedded=true"></iframe>
        <div className="return">
          <a href="#/Stories">
            <button className="button">Return to Stories</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Practice;
