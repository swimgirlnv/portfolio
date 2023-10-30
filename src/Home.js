import "./Home.css";
import Bubbles from "./Bubbles";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="page-content" id="Intro">
        <div className="intro">
          <div className="left-side-intro">
            <h2>
              <b>Becca Waterson</b>
            </h2>
            <br></br>
            <div>
              <p className="andale">Hello World!</p>
              <br></br>
              <p>
                I am currently a Junior at Brown University and pursuing a
                double concentration in Computer Science and Literary Arts. I am
                also a coder, storyteller, doodler, and D1 college swimmer.
              </p>
              <br></br>
              <p>
                I've spent the last thirteen years with my head in the water,
                swimming and thinking and dreaming through countless practices.
              </p>
              <br></br>
              <p>Join me underwater and explore what I've been up to!</p>
            </div>
          </div>
          <div className="right-side-intro">
            <img
              className="dolphin"
              src="https://images.emojiterra.com/google/android-11/512px/1f42c.png"
              alt="Emoticon of dolphin"
            ></img>
          </div>
          <Bubbles />
        </div>

        <div className="about" id="About">
          <div className="about-content">
            <h3>
              <b>About</b>
            </h3>
            <br></br>
            <p>
              Through my undergraduate experience at Brown University I have
              sought to explore new or non-traditional ways of telling and
              expressing stories both fictional and real.
            </p>
            <br></br>
            <p>
              With courses in the Literary Arts and Computer Science
              departments, I feel like I've had the chance to expand my
              knowledge and tool kit for creating these types of stories.
            </p>
            <br></br>
            <p>
              Especially in the CSCI 1300 course for UI/UX (where this portfolio
              was born as my final project, check out the OG{" "}
              <a
                href="https://drowningdolphin123.github.io/final-portfolio/"
                target="blank"
              >
                here
              </a>
              !), I feel I've learned more about creating a narrative and
              mapping out a user experience as one might read a story.
            </p>
            <br></br>
            <div className="icons">
              <div className="icon">
                <a
                  href="https://www.linkedin.com/in/rebecca-waterson-b3b95b21a/"
                  target="blank"
                >
                  <img src="https://i.imgur.com/LzinyKk.png" width="20px"></img>
                </a>
              </div>
              <div className="icon">
                <a
                  href="https://www.instagram.com/thesketchy.sketches/"
                  target="blank"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                    width="20px"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-container" id="Projects">
          <div className="item1">
            <div className="left-side-item1">
              <div className="card">
                <Link to="/Arcana">
                  <img
                    className="screenshots"
                    src="https://i.imgur.com/5hzflr1.png"
                    alt="Major Arcana Logo"
                  ></img>
                </Link>
              </div>
            </div>
            <div className="center-item1">
              <div className="text-left" style={{ textAlign: "left" }}>
                <h3><b>Major Arcana</b></h3>
                <hr></hr>
                <div className="descriptions" style={{ textAlign: "justify" }}>
                  <p>
                    A playful exploration of using GPT3's text-davinci-003 to
                    generate a reading based on the random tarot cards users
                    uncover.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-side-item1">
              <div className="bubbles">
                <table>
                  <tr>
                    <td></td>
                    <td>
                      <img
                        className="bubble"
                        alt="Alligator sketch"
                        src="https://i.imgur.com/4pXynPQ.png"
                      ></img>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="bubble"
                        alt="Farmer alligator sketch standing next to tractor. Title 'Aint much but it is honest work'."
                        src="https://i.imgur.com/qjtfzgl.png"
                      ></img>
                    </td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="item2">
            <div className="left-side-item2" id="ResponsiveRedesign">
              <div className="bubbles">
                <table>
                  <tr>
                    <td>
                      <img
                        className="bubble"
                        alt="Alligator sketch with pink water wings."
                        src="https://i.imgur.com/HzXbXMd.jpg"
                      ></img>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <img
                        className="bubble"
                        alt="Farmer alligator sketch sitting on a hay bale."
                        src="https://i.imgur.com/SfCdaAf.jpg"
                      ></img>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="needthisreactive">
              <div className="center-item2">
                <div className="text" style={{ textAlign: "right" }}>
                  <h3>
                    <b>Location Mythos</b>
                  </h3>
                  <hr></hr>
                  <div className="descriptions">
                    <p>
                      A Literary Arts project that aimed to allow readers to
                      follow the links on the maps to read a single "myth"
                      attached to a specific location.
                    </p>
                  </div>
                </div>
              </div>
              <div className="right-side-item2">
                <div className="card">
                  <a
                    href="https://swimgirlnv.github.io/litr-210-final/"
                    target="blank"
                  >
                    <img
                      className="screenshots"
                      src="https://i.imgur.com/Spo00wU.jpg"
                      alt="Simple image of a compass."
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="item3">
            <div className="left-side-item3">
              <div className="card">
                <a
                  href="https://www.figma.com/proto/zmMDkJBsth7OFl1DPsHjMq/LITR-List-project?scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A1545&node-id=5%3A1545"
                  target="blank"
                >
                  <img
                    className="screenshots"
                    src="https://i.imgur.com/6Ge9YBY.png"
                    alt="Screenshot of part of the Figma page from the Lists Project"
                  ></img>
                </a>
              </div>
            </div>
            <div className="center-item3">
              <div className="text" style={{ textAlign: "left" }}>
                <h3>
                  <b>List Project</b>
                </h3>
                <hr></hr>
                <div className="descriptions" style={{ textAlign: "justify" }}>
                  <p>
                    A Literary Arts project that used Figma to allow users to
                      interact with the story and piece it together as they
                      read.
                  </p>
                </div> 
               
              </div>
            </div>
            <div className="right-side-item3">
              <div className="bubbles">
                <table>
                  <tr>
                    <td></td>
                    <td>
                      <img
                        className="bubble"
                        alt="Sketch of alligator on a surf board."
                        src="https://i.imgur.com/kqcOvtU.jpg"
                      ></img>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="bubble"
                        alt="Sketch of alligator sitting at table typing on computer."
                        src="https://i.imgur.com/TVW2iPf.jpg"
                      ></img>
                    </td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="left-side-item3">
              <div className="card">
                <a
                  href="https://www.figma.com/proto/0cPuuSeKmbJJbKmMJ4fNw5/Thayer-Tarot?type=design&node-id=1-2&t=cRoH0cmRKml7Exvj-1&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design"
                  target="blank"
                >
                  <img
                    className="screenshots"
                    src="https://i.etsystatic.com/6083130/r/il/08ce07/3773221434/il_fullxfull.3773221434_p2vu.jpg"
                    alt="Screenshot of part of the Figma page from the Lists Project"
                  ></img>
                </a>
              </div>
              <div className="center-item3">
                <div className="text" style={{ textAlign: "left" }}>
                  <h3>
                    <b>Thayer Tarot</b>
                  </h3>
                  <hr></hr>
                  <div className="descriptions" style={{ textAlign: "justify" }}>
                    <p>
                      A Literary Arts project that used Figma to create a
                      choose-your-own-adventure game.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item4">
          <div className="top-item4" id="AdditionalProjects">
            <h3>
              <b>Projects from CS 1300 UI/UX</b>
            </h3>
          </div>
          <div className="bottom-item4">
            <div className="outer">
              <div className="left-item4">
                <div className="top-item4">
                  <div className="card">
                    <Link to="/Development">
                      <img
                        className="screenshots"
                        src="https://www.pngitem.com/pimgs/m/433-4339408_club-penguin-rewritten-wiki-club-penguin-pizza-chef.png"
                        alt="Club penguin mascot holding a pizza."
                      ></img>
                    </Link>
                  </div>
                  <div className="item4-content">
                    <h3>
                      <b>Development</b>
                    </h3>
                    <hr></hr>
                    <p>
                      Built an application in React to filter, sort, and
                      aggregate a menu of Club Penguin foods.
                    </p>
                  </div>
                </div>
                <div className="bot-item4">
                  <div className="item4-content">
                    <h3>
                      <b>Responsive Redesign</b>
                    </h3>
                    <hr></hr>
                    <p>
                      Showcases the workflow of redesigning a simple website.
                    </p>
                  </div>
                  <div className="card">
                    <Link to="/Responsive">
                      <img
                        className="screenshots"
                        src="https://i.imgur.com/GqtZ1KJ.png"
                        alt="Washoe County Library System logo"
                      ></img>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="right-item4">
                <div className="top-item4">
                  <div className="card">
                    <Link to="/Personas">
                      <img
                        className="screenshots"
                        alt="Sketch of user holding dirty laundry."
                        src="https://i.imgur.com/5yV8LAU.png"
                      ></img>
                    </Link>
                  </div>
                  <div className="item4-content">
                    <h3>
                    <b style={{hypens: 'auto'}}>Personas & Story Boarding</b>
                    </h3>
                    <hr></hr>
                      <p>
                        Created two
                        personas based on laundry experiences and illustrated
                        storyboards for the personas.
                      </p>
                  </div>
                </div>
                <div className="bot-item4">
                  <div className="item4-content">
                    <h3>
                    <b>Iterative Design</b>
                    </h3>
                    <hr></hr>
                    <p>
                        Worked through the entire design process by mocking up a solution to a
                        chosen startup's content.
                    </p>
                  </div>
                  <div className="card">
                  <Link to="/Iterative">
                    <img
                      className="screenshots"
                      src="https://bookface-images.s3.amazonaws.com/small_logos/d32db90d7196c1ce3567ce75271b6314a38a8b22.png"
                      alt="Dr. Treat logo"
                    ></img>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
