import Footer from "../Footer";
import TopBar from "../TopBar";
import "./stories.css";

function Worm() {
  return (
    <div className="page-container-small">
      <div className="story-container">
        <div className="story">
        <iframe 
        className="embed"
        src="https://docs.google.com/document/d/e/2PACX-1vTFvFhbWIgRNXBUYF2MdO0CXuWRAKZbCnoceZRXMhlW7jwFSRYv3L61Zdx9yWHnJ2lLNSQEQLSKKiXK/pub?embedded=true"></iframe>
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

export default Worm;
