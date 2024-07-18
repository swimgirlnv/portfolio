import "./stories.css";

function Clark() {
  return (
    <div className="page-container-big">
      <div className="anothaone">
        <div className="story-container">
          <div className="story">
            <div className="imgs">
              <img src="https://i.imgur.com/sIb0gaZ.jpg" width="100%"></img>
            </div>
            <iframe 
            className="embed"
            src="https://docs.google.com/document/d/e/2PACX-1vTZIEwlZdjYzYNkItO2Uen7cdkvmkre93rhNTbHSIwCELAGzNd2Mhfa_YqdLd9HSaAEZfcr30qNMSq0/pub?embedded=true"></iframe>
          </div>
          <div className="return">
            <a href="#/Stories">
              <button className="button">Return to Stories</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clark;
