import "./routes.css";
import { HashLink as Link } from "react-router-hash-link";

function BearNecessiteas() {
  return (
    <div className="explainer-page">
      <div className="content-container">
        <div className="content">
          <h1 className="title">Bear Necessiteas</h1>
          <hr className="hr"></hr>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/8trizQGcV9s?si=X5rD4eSNJyO-0fDu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <div className="part">
            <h3>Project Overview</h3>
            <p>
              This project was both challenging and rewarding, requiring
              significant effort and teamwork to bring to life. The story follows
              a mischievous bear cub who stumbles upon a magical tea party, hosted
              by a determined little girl named Emma. Their chaotic yet
              heartwarming interaction explores themes of curiosity, manners, and
              friendship, culminating in a bittersweet goodbye as the bear returns
              home.
            </p>
            <br></br>
            <h3>My Contributions</h3>
            <ul>
              <li>
                <b>Story Development:</b> I wrote and refined the story, breaking
                it into beats and scenes to create a strong narrative arc. The
                story focuses on visual storytelling, balancing humor, charm, and
                emotional depth.
              </li>
              <li>
                <b>3D Modeling:</b> I modeled key elements, including the food and
                stuffed animals, which played essential roles in the storytelling.
              </li>
              <img style={{maxWidth: '550px'}} src="https://i.imgur.com/Ty4wBPo.jpeg" alt="Modeled Props" />
              <li>
                <b>Lighting:</b> I set up stable environment lighting to enhance
                the whimsical and magical tone of the scenes.
              </li>
              <li>
                <b>Animation:</b> I animated <b>Scene 4, Shots 5-10</b>, ensuring
                the bear's character movements conveyed emotion and intent.
              </li>
              <li>
                <b>Sound Design:</b> I added foley sounds for my animated shots to
                enhance realism and immersion, bringing the environment to life.
              </li>
            </ul>
            <br></br>
            <h3>Outcome</h3>
            <p>
              This project allowed me to explore the full animation pipeline—from
              storytelling and modeling to animation and sound design—while
              developing new skills in Adobe Premiere Pro for post-production. I
              am incredibly proud of what our team—Tiffany, Hannah, Jess, Amelie,
              Vivian, and I—achieved. The final piece showcases our creativity,
              teamwork, and dedication to crafting a compelling animated story. I
              am excited to include this work in my portfolio as a testament to
              both my storytelling and technical skills.
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

export default BearNecessiteas;
