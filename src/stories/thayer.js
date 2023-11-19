import "./stories.css";

function Thayer() {
  return (
    <div className="page-container-small">
      <div className="story-container">
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vT9h4FRvoyLKZj41D7X4SJvq2wDRuEEM_eP7IN_kFre9UP1VH4PmpGecWI1TfIZf_h3LelxZTuqoRKR/pub?embedded=true"
        className="embed"></iframe>
        <div className="return">
          <a href="#/Stories">
            <button className="button">Return to Stories</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Thayer;
