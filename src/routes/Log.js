import "./routes.css";
import { HashLink as Link } from "react-router-hash-link";

function Log() {
  return (
    <div className="explainer-page">
      <div className="content-container">
        <div className="content">
          <h1 className="title">Log: Graphics Final Project</h1>
          <hr className="hr"></hr>
          <div className="part">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FfKGDi_neUA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="return">
          <Link to="/#Projects">
            <button className="button">Return to Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Log;
