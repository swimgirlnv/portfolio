import React from "react";
import './about.css';

function About() {
    return (
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
            I've also been an undergraduate 
            teaching assistant for <i>Intro to Software Engineering</i> and <i><a href="https://cs1951v-2023.vercel.app/" target="_blank">Hypertext/Hypermedia</a></i>, a <a href="https://swimgirlnv.github.io/hegeman-site.github.io/#Intro" target="_blank">resident advisor</a>, and a varsity swimmer who's 
            made it to two Ivy League Championships. I like to work hard and create fun, beautiful things!
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
                  href="https://docs.google.com/document/d/e/2PACX-1vQHFb7OqqalqcVa8bYUEjXQVD_kRuW90ElYsGGn0nD1JePm6siNdy2azrm5nsmy0p9HwUjw_WlUJ0Mm/pub"
                  target="blank"
                >
                  <img src="https://i.imgur.com/f0iE8ga.png" width="20px" alt="resume"></img>
                </a>
              </div>
              <div className="icon">
                <a
                  href="https://www.linkedin.com/in/rebecca-waterson-b3b95b21a/"
                  target="blank"
                >
                  <img src="https://i.imgur.com/LzinyKk.png" width="20px" alt="linkedin"></img>
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
                    alt="instagram"
                  ></img>
                </a>
              </div>
              <div className="icon">
                <a href="https://github.com/swimgirlnv/" target="blank">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    width="20px"
                    alt="github"
                  ></img>
                </a>
              </div>
            </div>
          </div>
    );
}

export default About;