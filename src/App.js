  import "./App.css";

  function App() {
    
    return (
      <div className="App">
        <div className="top-bar" id="navbar">
          <a className="navbar-first" href="#Intro"><strong>Final Portfolio</strong></a>
          <a href="#About">About</a>
          <div className="separator"></div>
          <a className="navbar-last" href="#Projects">Projects</a>

        </div>

          <div className="page-content" id="Intro">
       
          <div className="intro">
            <div className="left-side-intro" >
              <h2><b>Drowning Dolphin</b></h2>
              <br></br>
              <div>
                <p className="andale">Hello World!</p> 
                <br></br>
                <p>I am a student of Brown University and member of the Fall 2022 CSCI 1300 UI/UX course.</p>
                <br></br>
                <p>Scroll to learn more about me and to explore what I've created this semester! (Including my collection of alligator drawings :D)</p>
              </div>
            </div>
            <div className="right-side-intro">
              <img className="dolphin" 
              src="https://images.emojiterra.com/google/android-11/512px/1f42c.png"
              alt="Emoticon of dolphin"></img>
            </div>
            <div className="wrapper">
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
            </div>
          </div>

          <div className="about" id="About">
            <div className="about-content">
              <h3><b>About</b></h3>
              <br></br>
              <p>
                Through my undergraduate experience at Brown University I have sought to explore new or non-traditional ways of 
                telling and expressing stories both fictional and real. 
              </p>
              <br></br>
              <p>  
                With courses in the Literary Arts and Computer Science departments, I feel
                like I've had the chance to expand my knowledge and tool kit for creating these types of stories. 
              </p>
              <br></br>
              <p> 
                Especially with this
                UI/UX course, I've learned more about creating a narrative and mapping out a user experience as one might read a story.
              </p>
            </div>
            <div className="wrapper">
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
            </div>
          </div>

          <div className="grid-container" id="Projects">
            <div className="item1">
            <div className="left-side-item1">
              <div className="card">
                <a href="https://drowningdolphin123.github.io/p-and-s2/index.html"
                target="blank">
                  <img className="screenshots"
                  alt="Sketch of user holding dirty laundry." 
                  src="https://i.imgur.com/5yV8LAU.png">
                  </img>
                </a>
              </div>
            </div>
            <div className="center-item1">
              <div className="text-left" style={{textAlign: "left"}}>
                <h3><b>Personas & Storyboarding</b></h3>
                <hr></hr>
                <div className="descriptions" style={{textAlign: "justify"}}>
                  <p>
                    Through observing and interviewing individuals interacting with the laundry machines in Hegeman Hall, I created
                    two personas based on their experiences and illustrated storyboards for the personas.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-side-item1">
              <div className="bubbles">
                  <table>
                    <tr>
                      <td></td>
                      <td><img className="bubble" 
                      alt="Alligator sketch"
                      src="https://i.imgur.com/4pXynPQ.png"></img></td>
                    </tr>
                    <tr>
                      <td><img className="bubble" 
                      alt="Farmer alligator sketch standing next to tractor. Title 'Aint much but it is honest work'."
                      src="https://i.imgur.com/qjtfzgl.png"></img></td>
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
                    <td><img className="bubble" 
                    alt="Alligator sketch with pink water wings."
                    src="https://i.imgur.com/HzXbXMd.jpg"></img></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><img className="bubble" 
                    alt="Farmer alligator sketch sitting on a hay bale."
                    src="https://i.imgur.com/SfCdaAf.jpg"></img></td>
                  </tr>
                </table>
              </div>   
            </div>
            <div className="needthisreactive">
              <div className="center-item2">
                <div className="text" style={{textAlign: "right"}}>
                    <h3><b>Responsive Redesign</b></h3>
                    <hr></hr>
                    <div className="descriptions" style={{textAlign: "justify"}}>
                      <p>
                      Showcases the workflow of redesigning a simple website. Identified Washoe County Library website as 
                      needing renovation by analyzing and identifying flaws in the existing interface.
                      </p>
                    </div>
                </div>
              </div>
              <div className="right-side-item2">
                <div className="card">
                  <a id="redesigned-website"
                    href="https://drowningdolphin123.github.io/responsive-redesign/index.html"
                    target="blank">
                      <img className="screenshots" 
                      src="https://i.imgur.com/GqtZ1KJ.png"
                      alt="Washoe County Library System logo"></img>
                  </a>
                </div>
              </div>
              </div>
            </div>
            <div className="item3">
            <div className="left-side-item3"  id="IterativeDesign">
              <div className="card">
                <a href="https://drowningdolphin123.github.io/iterativedesign/"
                target="blank">
                  <img className="screenshots" 
                  src="https://bookface-images.s3.amazonaws.com/small_logos/d32db90d7196c1ce3567ce75271b6314a38a8b22.png"
                  alt="Dr. Treat logo"></img>
                </a>
              </div>
            </div>
            <div className="center-item3">
              <div className="text" style={{textAlign: "left"}}>
              <h3><b>Iterative Design</b></h3>
              <hr></hr>
              <div className="descriptions" style={{textAlign: "justify"}}>
                <p>Worked through the process of mocking up a solution to a chosen startup's content 
                  beginning with sketching ideas for the interfaces, then creating
                  an interactive, high-fidelity prototype, then conducting user testing on a revised prototype, and finally contacting the
                  startup.
                </p>
              </div>
              </div>
            </div>
            <div className="right-side-item3">
              <div className="bubbles">
                  <table>
                    <tr>
                      <td></td>
                      <td><img className="bubble" 
                      alt="Sketch of alligator on a surf board."
                      src="https://i.imgur.com/kqcOvtU.jpg"></img></td>
                    </tr>
                    <tr>
                      <td><img className="bubble" 
                      alt="Sketch of alligator sitting at table typing on computer."
                      src="https://i.imgur.com/TVW2iPf.jpg"></img></td>
                      <td></td>
                    </tr>
                  </table>
              </div>
              
            </div>
            </div>
        </div>
        <div className="item4">

        <div className="top-item4" id="AdditionalProjects">
          <h3><b>Fun with React + HTML + Figma</b></h3>
        </div>
          <div className="bottom-item4">
            <div className="outer">
              <div className="left-item4">
                <div className="top-item4">
                  <div className="card">
                    <a href="https://drowningdolphin123.github.io/development/"
                    target="blank">
                      <img className="screenshots" 
                      src="https://www.pngitem.com/pimgs/m/433-4339408_club-penguin-rewritten-wiki-club-penguin-pizza-chef.png"
                      alt="Club penguin mascot holding a pizza."></img>
                    </a>
                  </div>
                  <div className="item4-content">
                    <h3><b>Development</b></h3>
                    <hr></hr>
                    <p>Built an application in React to filter, sort, and aggregate a menu of Club Penguin foods.</p>
                  </div>
                </div>
                <div className="bot-item4">
                  <div className="item4-content">
                    <h3><b>Location Mythos</b></h3>
                    <hr></hr>
                    <p>A Literary Arts project that aimed to allow readers to follow the links on the maps to read a single "myth" attached to a specific location.</p>
                  </div>
                  <div className="card">
                    <a href="https://swimgirlnv.github.io/litr-210-final/"
                    target="blank">
                      <img className="screenshots" src="https://i.imgur.com/Spo00wU.jpg"
                      alt="Simple image of a compass."></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-item4">
                <div className="top-item4">
                  <div className="card">
                    <a href="https://www.majorarcana.net/"
                    target="blank">
                      <img className="screenshots" src="https://i.imgur.com/5hzflr1.png"
                      alt="Major Arcana Logo"></img>
                    </a>
                  </div>
                  <div className="item4-content">
                    <h3><b>Major Arcana</b></h3>
                    <hr></hr>
                    <p>A playful exploration of using GPT3's text-davinci-003 to generate a reading based on the random tarot cards users uncover.</p>
                  </div>
                </div>
                <div className="bot-item4">
                  <div className="item4-content">
                    <h3><b>List Project</b></h3>
                    <hr></hr>
                    <p>A Literary Arts project that used Figma to allow users to interact with the story and piece it together as they read.</p>
                  </div>
                  <div className="card">
                    <a href="https://www.figma.com/proto/zmMDkJBsth7OFl1DPsHjMq/LITR-List-project?scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A1545&node-id=5%3A1545"
                    target="blank">
                      <img className="screenshots" 
                      src="https://i.imgur.com/6Ge9YBY.png"
                      alt="Screenshot of part of the Figma page from the Lists Project"></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>

        <div className="footer">
          <p>Made with love in Providence</p>
        </div>

      </div>
    )
  }

  export default App;

  