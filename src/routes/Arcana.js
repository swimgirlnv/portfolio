import TopBar from '../TopBar';
import './routes.css';
import { HashLink as Link } from 'react-router-hash-link';


function Arcana () {
  return(

    <div className='explainer-page'>
    <TopBar />
    <br></br>
    <br></br>
    <br></br>

    <div className='content-container'>

    <div className='content'>
    <h1 className="title">Major Arcana</h1>

    <div className='part'>
      <h3>Identifying Usability Problems</h3>
      <hr className='hr'></hr>
      <p>
      Over the 2022 summer I lived at home in Incline Village. Still used to the college lifestyle of working
      in a library, I attempted to navigate the Washoe County Library System website to find open hours for
      the local library. Frustrated and confused, I ended up spending most of my time working at home. When this 
      project was released, I knew exactly which website I wanted to redesign, and narrowed it down to the home page
      of the Incline Village Library. Using my own experience with the website and <a href="https://wave.webaim.org/">WebAIM WAVE</a> I 
      identified accesibility and user issues that could be improved.
      </p>
    </div>

    </div>

    <div className='return'>
      <a href='https://majorarcana.net/' target='blank'>
        <button className='button'>Explore Project Website</button>
      </a>
      <Link to='/#Projects'>
          <button className='button'>Return to Projects</button>
      </Link>
    </div>
    </div>
    <div className="footer2">
      <p>Made with love in Providence</p>
    </div>
    </div>
  );
}

export default Arcana;