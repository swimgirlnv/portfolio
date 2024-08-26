import "./routes.css";
import { HashLink as Link } from "react-router-hash-link";

function RevDealRoom() {
  return (
    <div className="explainer-page">
      <div className="content-container">
        <div className="content">
          <h1 className="title">Revolear Virtual Deal Room Chat</h1>
          <hr className="hr"></hr>
          <div className="part">
            <p>
            My role focused on rendering chat bubbles that dynamically display user messages, 
            along with reactions, suggestions, and various other types of feedback. 
            </p>
            <br></br>
            <p>
            This development improved the user experience by ensuring clear, real-time 
            communication and facilitating smoother negotiations and collaboration 
            within the virtual deal room.
            </p>
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

export default RevDealRoom;
