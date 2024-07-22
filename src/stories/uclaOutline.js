import "./stories.css";

function UCLAOutline() {
  return (
    <div className="page-container-big">
      <div className="story-container">
        <div className="story">
          <iframe 
          className="embed"
          src="https://docs.google.com/document/d/e/2PACX-1vRmeFz5cVv58r6rJjBFShelPRQNAKY74BpgxfSuc8CKviv4VOIKVdcKhyGkyMEQKP91EeFSnzvY8O-k/pub?embedded=true"></iframe>
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

export default UCLAOutline;
