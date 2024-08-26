import "./routes.css";
import { HashLink as Link } from "react-router-hash-link";

function RevAI() {
  return (
    <div className="explainer-page">
      <div className="content-container">
        <div className="content">
          <h1 className="title">Revolear AI Assistant UI</h1>
          <hr className="hr"></hr>
          <div className="part">
            <p>
            I worked extensively with React and Redux to create an intuitive assistant tab 
            for the setup page. This feature allows users to create multiple distinct OpenAI 
            assistants, personalize them with profile pictures, names, and system prompts, 
            and upload various URLs, links, and files to a vector store. 
            </p>
            <br></br>
            <p>
            Users can then interact with these assistants to ask specific questions related to the uploaded 
            content, enhancing their workflow and decision-making process.
            </p>
          </div>
        </div>

        <div className="return">
          {/* <a href="https://github.com/swimgirlnv/witchywarthog" target="blank">
            <button className="button">Check out the Repository</button>
          </a> */}
          <Link to="/#Projects">
            <button className="button">Return to Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RevAI;
