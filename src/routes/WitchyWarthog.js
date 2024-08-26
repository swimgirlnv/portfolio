import "./routes.css";
import { HashLink as Link } from "react-router-hash-link";

function WitchyWarthog() {
  return (
    <div className="explainer-page">
      <div className="content-container">
        <div className="content">
          <h1 className="title">Witchy Warthog</h1>
          <hr className="hr"></hr>
          <div className="part">
            <p>
            Built using Vite and Firebase, the game supports real-time interactions and seamless 
            multiplayer experiences. Players must strategically manage resources, harness 
            the power of spells, and explore dungeons to achieve victory. 
            </p>
            <br></br>
            <p>
            My work on this project included developing the game logic in TypeScript, integrating 
            Firebase for real-time data synchronization, and implementing a dynamic UI to enhance 
            the player experience.
            </p>
          </div>
        </div>

        <div className="return">
          <Link to="/#Projects">
            <button className="button">Return to Projects</button>
          </Link>
          <a href="https://github.com/swimgirlnv/witchywarthog" target="blank">
            <button className="button">Check out the Repository</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WitchyWarthog;
