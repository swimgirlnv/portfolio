import React from 'react';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import Bubbles from '../IntroBubbles/Bubbles';
import './intro.css';


const Intro = () => {
  return (
    <div className="intro" id='Intro'>
          <div className="left-side-intro">
            <h2>
              <b>Becca Waterson</b>
            </h2>
            <br></br>
            <div>
              <p className="andale">Hello World!</p>
              <br></br>
              <p>
                I am currently a Senior at Brown University and pursuing a
                double concentration in Computer Science and Literary Arts. I am
                also a coder, storyteller, doodler, and D1 college swimmer.
              </p>
              <br></br>
              <p>
                I've spent the last fourteen years with my head in the water,
                swimming and thinking and dreaming through countless practices.
              </p>
              <br></br>
              <p>Join me underwater and explore what I've been up to!</p>
            </div>
            <br></br>
            <ButtonContainer />
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
  );
};

export default Intro;
