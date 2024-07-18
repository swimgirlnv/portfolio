import "./Home.css";
import Bubbles from "./Bubbles";
import { Link } from "react-router-dom";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import RightSideBubble from "./components/Bubbles/RightSideBubble";
import AlligatorBubbles from "./components/AlligatorBubbles/AlligatorBubbles";
import LeftSideBubble from "./components/Bubbles/LeftSideBubble";
import ThreeBubbles from "./components/ThreeJsBubbles/ThreeJsBubbles";
import About from "./components/About/About";

function Home() {
  const alligatorDrawings = [
    { alt: 'Alligator sketch', src: 'https://i.imgur.com/4pXynPQ.png' },
    { alt: "Farmer alligator sketch standing next to tractor. Title 'Aint much but it is honest work'.", src: 'https://i.imgur.com/qjtfzgl.png' },
    { alt: 'Alligator sketch with pink water wings.', src: 'https://i.imgur.com/HzXbXMd.jpg' },
    { alt: 'Farmer alligator sketch sitting on a hay bale.', src: 'https://i.imgur.com/SfCdaAf.jpg' },
    { alt: 'Sketch of alligator on a surf board.', src: 'https://i.imgur.com/kqcOvtU.jpg' },
    { alt: 'Sketch of alligator sitting at table typing on computer.', src: 'https://i.imgur.com/TVW2iPf.jpg' }
  ];

  const alligatorDrawings1 = [
    [null, { alt: 'Alligator sketch', src: 'https://i.imgur.com/4pXynPQ.png' }],
    [{ alt: "Farmer alligator sketch standing next to tractor. Title 'Aint much but it is honest work'.", src: 'https://i.imgur.com/qjtfzgl.png' }, null]
  ];

  const alligatorDrawings2 = [
    [{ alt: 'Alligator sketch with pink water wings.', src: 'https://i.imgur.com/HzXbXMd.jpg' }, null],
    [null, { alt: 'Farmer alligator sketch sitting on a hay bale.', src: 'https://i.imgur.com/SfCdaAf.jpg' }]
  ];

  const alligatorDrawings3 = [
    [null, { alt: 'Sketch of alligator on a surf board.', src: 'https://i.imgur.com/kqcOvtU.jpg' }],
    [{ alt: 'Sketch of alligator sitting at table typing on computer.', src: 'https://i.imgur.com/TVW2iPf.jpg' }, null]
  ];

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
          <About />
        </div>

        <div className="grid-container" id="Projects">
          <div className="item1">
            {/* BEST TO SHOWCASE */}
            <ProjectItem
              title="Major Arcana"
              description="A playful exploration of using GPT3's text-davinci-003 to generate a reading based on the random tarot cards users uncover."
              image="https://i.imgur.com/5hzflr1.png"
              projectLink="/Arcana"
              alignRight={false}
              tags={["React", "OpenAI API", "Full Stack Development", "Java", "TypeScript"]}
            />
            <ProjectItem
              title="Pick My Dinner"
              description="After being plagued by indecisiveness about what to have for dinner, I decided to let the computer decide for me. 
              This application is designed to help others who struggle with the same problem. Features currently include getting suggestions for restaurants near the user or recipes generated through OpenAI, adding your own suggestions, and saving suggestions and restaurants to favorites."
              image='https://i.imgur.com/QGAwrz6.png'
              projectLink='https://pick-my-dinner.vercel.app/'
              alignRight={true}
              tags={["React", "OpenAI API", "GooglePlaces API", "Full Stack Development", "Vercel", "TypeScript"]}
            />
            <ProjectItem
              title="AI Diving Judge"
              description="Final project for CSCI 1470: Deep Learning. Re-implemented an AI model that can score dives through video analysis."
              image="https://i.imgur.com/NS82y9C.png"
              projectLink="/Judge"
              alignRight={false}
              tags={["Python", "PyTorch", "OpenCV", "Deep Learning"]}
            />
            <ProjectItem
              title="Public Utilities Comissions Letters Analysis"
              description="Final project for CSCI 1951a: Data Science. Analyzed letters sent to Public Utilities Commissions to determine the sentiment of the letters."
              image="https://upload.wikimedia.org/wikipedia/commons/0/0b/Arizona_Corporation_Commission_Seal.png"
              projectLink="/Utilities"
              alignRight={true}
              tags={["Python", "Pandas", "Scikit-learn", "Data Analysis"]}
            />
            <ProjectItem
              title="Hypertext & Hypermedia Course Website"
              description="Designed and built the class website for the Hypertext & Hypermedia course at Brown University."
              image="https://i.imgur.com/OHedLbC.png"
              projectLink="https://cs1951v-2023.vercel.app/"
              alignRight={false}
              tags={["React", "Next.js", "Vercel"]}
            />
          </div>
          <div className="item2">
            {/* FIGMA PROJECTS */}
            <ProjectItem
              title="Location Mythos"
              description="In wanting to create an interactive writing piece, I put some of my budding GitHub Pages skills to the test to create a set of stories for readers to explore."
              image="https://i.imgur.com/Spo00wU.jpg"
              projectLink="https://swimgirlnv.github.io/litr-210-final/"
              alignRight={true}
              tags={["GitHub Pages", "Storytelling"]}
            />
          </div>
          <div className="item3">
            <ProjectItem
              title="List Project"
              description="A Literary Arts project that used Figma to allow users to interact with the story and piece it together as they read."
              image="https://i.imgur.com/6Ge9YBY.png"
              projectLink="https://www.figma.com/proto/zmMDkJBsth7OFl1DPsHjMq/LITR-List-project?scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A1545&node-id=5%3A1545"
              alignRight={false}
              tags={["Figma", "Storytelling"]}
            />
            <ProjectItem
              title="Thayer Tarot"
              description="A Literary Arts project that used Figma to create a choose-your-own-adventure game."
              image="https://i.etsystatic.com/6083130/r/il/08ce07/3773221434/il_fullxfull.3773221434_p2vu.jpg"
              projectLink="https://www.figma.com/proto/0cPuuSeKmbJJbKmMJ4fNw5/Thayer-Tarot?type=design&node-id=1-2&t=cRoH0cmRKml7Exvj-1&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design"
              alignRight={true}
              tags={["Figma", "Storytelling"]}
            />
          </div>
          <div className="item3-5">
            {/* CLASS PROJECTS */}
            <ProjectItem
              title="Development"
              description="Built an application in React to filter, sort, and aggregate a menu of Club Penguin foods."
              image="https://www.pngitem.com/pimgs/m/433-4339408_club-penguin-rewritten-wiki-club-penguin-pizza-chef.png"
              projectLink="/Development"
              alignRight={false}
              tags={["React", "JavaScript"]}
            />
            <ProjectItem
              title="Responsive Redesign"
              description="Showcases the workflow of redesigning a simple website."
              image="https://i.imgur.com/GqtZ1KJ.png"
              projectLink="/Responsive"
              alignRight={true}
              tags={["Figma", "Responsive Design"]}
            />
            <ProjectItem
              title="Personas & Story Boarding"
              description="Created two personas based on laundry experiences and illustrated storyboards for the personas."
              image="https://i.imgur.com/5yV8LAU.png"
              projectLink="/Personas"
              alignRight={false}
              tags={["Figma", "Storytelling"]}
            />
            <ProjectItem
              title="Iterative Design"
              description="Worked through the entire design process by mocking up a solution to a chosen startup's content."
              image="https://bookface-images.s3.amazonaws.com/small_logos/d32db90d7196c1ce3567ce75271b6314a38a8b22.png"
              projectLink="/Iterative"
              alignRight={true}
              tags={["Figma", "Design Process"]}
            />
          </div>
        </div>
        <div className="item4">
          {/* IMAGE GALLERY */}
          <AlligatorBubbles images={alligatorDrawings1} />
          <AlligatorBubbles images={alligatorDrawings2} />
          <AlligatorBubbles images={alligatorDrawings3} />
        </div>
      </div>
    </div>
  );
}

export default Home;
