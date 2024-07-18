import "./stories.css";

function Thayer() {
  return (
    <div className="page-container-small">
      <div className="story-container">
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vR5kBO3--DqRgEWOdcBBgvRgt58XS1MzVBVrp1j92R15SjaO31d2zPO_ENszEZwBALvwk1KPWp9s7CZ/pub?embedded=true"
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
