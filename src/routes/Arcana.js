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
    <hr className='hr'></hr>
    <div className='part'>
      <p>
      June 2022, fresh out of CSCI 32 "Introduction to Software Engineering", I wanted to build off of my final project and make some type of game
      for myself. But what about? After buying my tenth set of Tarot Cards, I realized that I wanted to make an application that could quickly give you a tarot 
      reading. Although part of the fun of Tarot is certainly the shuffling cards and mindfully considering what each card means within a spread, I wanted
      to create something for the modern mystic who didn't have the time to sit down and devote an hour or more to the full Tarot experience.
      </p>
      <br></br>
      <p>
        Thus, "Major Arcana" was born! Originally just an application that would reveal a certain number of tarot cards and tell you the generic 
       upright and reverse meanings, it has since grown to include the GPT3 API that sends information about the specific spread and cards picked and returns
       a concise interpretation of the Tarot spread.
      </p>
      <br></br>
      <p>
        Major Arcana is still a work in progress and there a many features that I am still working on implementing, including readings with reversed cards, as well
        as including more tarot spreads and creating a journal element that allows users to both save the spread/interprestation combo and write about
        their Tarot experience. Overall, Major Arcana is a culmination of my computer science skills gained at Brown.
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