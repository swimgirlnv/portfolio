import "./stories.css";

function Hillel() {
  return (
    <div className="page-container-small">
      <div className="story-container">
      <iframe 
      className="embed"
      src="https://docs.google.com/document/d/e/2PACX-1vS5r9b57BxyiLLQepWnhhmJVV27YOENmRTbCPBxhbiGFVohXtnoTeyKJCfY9Swal1CeBiuK_vmfxVZJ/pub?embedded=true"></iframe>
        <div className="return">
          <a href="#/Stories">
            <button className="button">Return to Stories</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hillel;
