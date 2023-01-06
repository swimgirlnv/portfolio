import './routes.css';
import TopBar from '../TopBar';
import Footer from '../Footer';

function Personas () {
  return(
    <div className='explainer-page'>
      <TopBar />
      <br></br>
      <br></br>
      <br></br>
      
      <div className='content-container'>

      <div className='content'>
      <h1 className="title">Personas and Storyboarding</h1>

      <div className='part'>
        <h3>Preparation</h3>
        <hr className='hr'></hr>
        <p>
          As of September 22, 2022, the interface on Brown's campus that had caused me the most grief
          were the washing machines in Hegeman Hall. The new washing and drying machines had just been installed, along
          with plenty of new signs containing warnings and instructions. For this project, I wanted to focus on user's feelings 
          while they used the washing machines and what steps they took to wash their clothes.
        </p>
      </div>

      <div className='part'>
        <h3>Recording Observations</h3>
        <hr className='hr' ></hr>
        <p>
          In this step of the project, I watched five different residents of Hegeman Hall use the machines, and then interviewed
          them on their experience. Most users followed the same sequence of steps, which I compiled. There was some overlap in the issues
          users faced, which I then concentrated on for the personas.
        </p>
      </div>

      <div className='part'>
        <h3>Personas to Storyboarding</h3>
        <hr className='hr'></hr>
        <p>
          The two main issues users faced were overfilling the machines (persona A) and confusion on the new signs and warnings surrounding the machines (persona B).
          After realizing multiple users were facing this issue, I created two empathy maps for the different personas that tried to capture what the combined users facing
          the issue might think, feel, say, and do. Then, based on those maps, I created two storyboards depicting the journey of using Hegeman Hall's washing machines.
        </p>
      </div>

      <div className='conclusion'>
        <h3>In conclusion...</h3>
        <hr className='hr'></hr>
        <p>
          Through this project I had the opportunity to learn <a href="http://www.cs.cmu.edu/~jhm/Readings/Dillman,%20Chapter%204.pdf" target="blank">how to create good interview questions</a>,
          as well as create realistic personas and storyboards to discover flaws in an interface and brainstorm where improvements could be made.
        </p>
      </div>
    </div>
    
    <div className='return'>
        <a href='https://drowningdolphin123.github.io/p-and-s2/index.html' target='blank'>
          <button className='button'>Explore Project Website</button>
        </a>
        <a href='/'>
          <button className='button'>Return to Home Page</button>
        </a>
      </div>
      </div>
      <div className="footer2">
        <p>Made with love in Providence</p>
      </div>
    </div>
  );
}

export default Personas;