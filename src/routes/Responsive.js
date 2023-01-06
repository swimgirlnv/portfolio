import TopBar from '../TopBar';
import './routes.css';

function Responsive () {
  return(
    <div className='explainer-page'>
    <TopBar />
    <br></br>
    <br></br>
    <br></br>

    <div className='content-container'>

    <div className='content'>
    <h1 className="title">Responsive Redesign</h1>

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

    <div className='part'>
      <h3>Visual Redesign</h3>
      <hr className='hr' ></hr>
      <p>
        Next was redesigning the site with both low-fidelity wireframing (using Balsamiq) and high-fideligy prototyping (using Figma).
        One particluar issue I wanted to hone in on was the colors in the original site and the font size. I tried to focus on those details
        when re-designing to make sure everything was legible.
      </p>
    </div>

    <div className='part'>
      <h3>Responsive Redesign</h3>
      <hr className='hr'></hr>
      <p>
        Finally, I took the Figma prototype and re-created it in pure HTML. Within the time-frame of the project I 
        tried to make as much of the site functionally interactive with clickable elements that would lead to portions of the real site.
        I also learned how to use the grid, flex, and table HTML/CSS elements, and had the opportunity to play with iFrames.
      </p>
    </div>

    <div className='conclusion'>
      <h3>In conclusion...</h3>
      <hr className='hr'></hr>
      <p>
        This project helped make me more aware of the accesibility and responsiveness of the websites I create. I also began to think more about 
        color/font/size of elements to blah blah TODO
      </p>
    </div>
    </div>

    <div className='return'>
      <a href='https://drowningdolphin123.github.io/responsive-redesign/index.html' target='blank'>
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

export default Responsive;