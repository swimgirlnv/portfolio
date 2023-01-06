import TopBar from '../TopBar';
import './routes.css';
import { HashLink as Link } from 'react-router-hash-link';


function Iterative () {
  return(
    <div className='explainer-page'>
    <TopBar />
    <br></br>
    <br></br>
    <br></br>

    <div className='content-container'>

    <div className='content'>
    <h1 className="title">Iterative Design</h1>

    <div className='part'>
      <h3>Sketching and Wireframing</h3>
      <hr className='hr'></hr>
      <p>
        
      </p>
    </div>

    <div className='part'>
      <h3>Mockups</h3>
      <hr className='hr' ></hr>
      <p>
        
      </p>
    </div>

    <div className='part'>
      <h3>User Testing</h3>
      <hr className='hr'></hr>
      <p>
        
      </p>
    </div>

    <div className='conclusion'>
      <h3>In conclusion...</h3>
      <hr className='hr'></hr>
      <p>
        
      </p>
    </div>
    </div>

    <div className='return'>
      <a href='https://drowningdolphin123.github.io/iterativedesign/' target='blank'>
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

export default Iterative;