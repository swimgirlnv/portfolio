import "./routes.css";
import { HashLink as Link } from "react-router-hash-link";

function Judge() {
  return (
    <div className="explainer-page">
      <div className="content-container">
        <div className="content">
          <h1 className="title">AI Diving Judge</h1>
          <hr className="hr"></hr>
          <div className="part">
            <p>
            Alongside two Brown Women's Swim and Dive members, re-implemented an AI model 
            that can score dives through video analysis. The problem we were trying to solve 
            was removing bias from judging. There are multiple ways in which bias can present 
            itself in diving, for example, if a diver has a good reputation judges are more 
            likely to score them higher, similarly if they compete for a reputable team. An 
            AI judge would allow for a neutral scoring method that is solely determined by 
            the quality of the dive performed than by outside variables that may affect the score.
            </p>
            <br></br>
            <img className="poster" src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/884/875/datas/gallery.jpg" alt="Screenshot of AI Diving Judge"></img>
          </div>
        </div>

        <div className="return">
          <a href="https://devpost.com/software/ai-diving-judge" target="blank">
            <button className="button">Explore Dev Post</button>
          </a>
          <Link to="/#Projects">
            <button className="button">Return to Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Judge;
