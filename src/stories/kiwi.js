import "./stories.css";

function Kiwi() {
  return (
    <div className="page-container-small">
      <div className="story-container">
      <iframe 
      className="embed"
      src="https://docs.google.com/document/d/e/2PACX-1vRAlfhqD8ulfSKWkAxkni0SxzB5svMssjJdDlrv6VwA3ZaMK06vFyiUQ1Ui01A46_Kt4l2CFi_2Poeb/pub?embedded=true"></iframe>
        <div className="return">
          <a href="#/Stories">
            <button className="button">Return to Stories</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Kiwi;
