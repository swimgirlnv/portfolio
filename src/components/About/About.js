import React from "react";
import './about.css';

function About() {
  return (
    <div className="about" id="About">
      <div className="about-full">
        <div className="about-images">
          <div className="about-img-col">
            <div className="image-container" >
              <img className="vert" src="https://i.imgur.com/GS1iUgT.jpeg" alt="Description 1" />
              <div className="overlay">Sacramento, CA</div>
            </div>
            <div className="image-container">
              <img className="horz" src="https://i.imgur.com/8q81nWy.jpeg" alt="Description 3" />
              <div className="overlay">San Diego, CA</div>
            </div>
          </div>
          <div className="about-img-col">
            <div className="image-container" >
              <img className="horz" src="https://i.imgur.com/SJZtan5.png" alt="Description 4" />
              <div className="overlay">Desolation Wilderness, CA</div>
            </div>
            <div className="image-container">
              <img className="vert" src="https://i.imgur.com/I7hsK1M.jpeg" alt="Description 2" />
              <div className="overlay">San Francisco, CA</div>
            </div>
          </div>
        </div>
        <div className="about-content">
          <p>
            I grew up in Incline Village, Nevada, a small town on the north shore of Lake Tahoe, but I've also lived in 
            Sacramento, San Diego, Los Angeles, and San Francisco. I've loved my adventures across the Golden State,
            and I hope to return to the West Coast after graduation.
          </p>
          <br />
          <p>
            I love nature, colors, and expressing my creativity in various ways. Whether it's through 
            coding, storytelling, or creating art, I always strive to bring a touch of the vibrant 
            West Coast spirit to everything I do.
          </p>
          <br />
          <p>
            Through my undergraduate experience at Brown University I have
            sought to explore new or non-traditional ways of telling and
            expressing stories both fictional and real.
          </p>
          <br />
          <p>
            With courses in the Literary Arts and Computer Science
            departments, I feel like I've had the chance to expand my
            knowledge and tool kit for creating these types of stories.
          </p>
          <br />
          <p>
            I've also been an undergraduate 
            teaching assistant for <i>Intro to Software Engineering</i> and <i><a href="https://cs1951v-2023.vercel.app/" target="_blank">Hypertext/Hypermedia</a></i>, a <a href="https://swimgirlnv.github.io/hegeman-site.github.io/#Intro" target="_blank">resident advisor</a>, and a varsity swimmer who's 
            made it to two Ivy League Championships. I like to work hard and create fun, beautiful things!
          </p>
          <br />
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
        </div>
      </div>
    </div>
  );
}

export default About;
