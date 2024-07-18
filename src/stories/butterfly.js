import "./stories.css";

function Butterfly() {
  return (
    <div className="page-container-big">
      <div className="story-container">
        <div className="story">
        <iframe 
        className="embed"
        src="https://docs.google.com/document/d/e/2PACX-1vTC6G9SnRGH8eooGq5OumL20MHxFF_8SFIxqm-NpHu5Jvu4q6iDRh_9d1lW1AfiY5vEh0rcLGq2F5UN/pub?embedded=true"></iframe>
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

export default Butterfly;
