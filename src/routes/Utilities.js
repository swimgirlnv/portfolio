import "./routes.css";
import { HashLink as Link } from "react-router-hash-link";

function Utilities() {
  return (
    <div className="explainer-page">
      <div className="content-container">
        <div className="content">
          <h1 className="title">AI Diving Judge</h1>
          <hr className="hr"></hr>
          <div className="part">
            <p>
            Alongside two classmates in the cs1951a Data Science course, we analyzed public 
            utility commissions (PUCs). PUCs regulate state power grids, and during their 
            proceedings, state residents can provide opinions that PUCs must 
            consider; however, despite overwhelming and bipartisan support in these public 
            comments for the right of consumers to sell power from solar panels back to the 
            grid (called “net metering”), there are cases where PUCs have ruled to the 
            contrary. This is illegal, undemocratic, and hinders the renewable energy 
            transition, but it is difficult to evaluate the sentiment of public comments by 
            hand in real time due to their quantity (thousands per proceeding). Our goals 
            were seeing if we can create a model that will accurately classify the sentiment of 
            public comments toward net metering rights. Also, what correlations exist between 
            sentiment and the rhetorical framing of the comments?
            </p>
            
          </div>
        </div>

        <div className="return">
          <a href="https://www.linkedin.com/in/rebecca-waterson-b3b95b21a/details/projects/1717103769417/single-media-viewer/?profileId=ACoAADdQcZ8ByHNPULze1R4eddiuwjAYmFZMO-w" target="blank">
            <button className="button">Check out the Poster</button>
          </a>
          <Link to="/#Projects">
            <button className="button">Return to Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Utilities;
