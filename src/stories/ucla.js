import "./stories.css";

function UCLA() {
  return (
    <div className="page-container-big">
      <div className="story-container">
        <div className="story">
          <iframe 
          className="embed"
          src="https://docs.google.com/document/d/e/2PACX-1vQ1yOtLBGUcX69EAcn5qRm2rOCCfiluzmmB56LeHdVQmeawl7Aw5_ljAJ-XZLzpcw-y-nM97Oi7U3Ug/pub?embedded=true"></iframe>

          <iframe 
          className="embed"
          src="https://docs.google.com/document/d/e/2PACX-1vRN8WsOtQOo-cp21KnDi5hnEMgf0fKEFrLZ4YZDyO3LYEE4fBjL2uP9qK0yvwsJ6oFF_VCsqP8sfYJI/pub?embedded=true"></iframe>

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

export default UCLA;
