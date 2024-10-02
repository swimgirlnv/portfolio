
import "./stories.css";

function DogYard() {
  return (
    <div className="page-container-small">
      <div className="story-container">
        <div className="story">
        <iframe 
        className="embed"
        src="https://docs.google.com/document/d/e/2PACX-1vQo4zq8BG1HnlgD7fPZ0iTj4umRwmpE8stIZ8JJOw1i9YUTJyxytUP7VdrJTx82QYAAHD_w7W7gInJJ/pub?embedded=true"></iframe>
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

export default DogYard;
