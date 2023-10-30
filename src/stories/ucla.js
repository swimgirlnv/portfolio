import "./stories.css";

function UCLA() {
  return (
    <div className="page-container-big">
      <div className="story-container">
        <div className="story">
          <div className="link">
            <a href="/NARPs-Act1.pdf" download>
              Act One Script
            </a>
          </div>

          <div className="link">
            <a href="/Pitch.pdf" download>
              Pitch Script
            </a>
          </div>

          <div className="link">
            <a href="NARPs-Outline.pdf" download>
              Outline
            </a>
          </div>
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
