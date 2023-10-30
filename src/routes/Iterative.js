import TopBar from "../TopBar";
import "./routes.css";
import { HashLink as Link } from "react-router-hash-link";

function Iterative() {
  return (
    <div className="explainer-page">
      <div className="content-container">
        <div className="content">
          <h1 className="title">Iterative Design</h1>

          <div className="part">
            <h3>Sketching and Wireframing</h3>
            <hr className="hr"></hr>
            <p>
              One of the special aspects of this project was the chance to work
              with a team of other students. Our initial brainstorming session
              was a great opportunity to see how other people think about design
              and how they approached the process of prototyping a web app. We
              chose the startup Dr. Treat as our "client", and were tasked with
              creating a web app for their business using only the description
              of their company on a page provided to the class. The process of
              sketching and wireframing was mainly a thorough discussion of the
              most important features needed for a Veterinary Telemedicine.
            </p>
          </div>

          <div className="part">
            <h3>Mockups</h3>
            <hr className="hr"></hr>
            <p>
              The mockup portion of the project was split into two parts: an
              initial design that would go through a round of design critiques,
              and a final design that would be tested with users. Our initial
              design was focused on having a lot of features within the app, but
              in our critique we realized the long lists and placement of
              butttons was overwhelming and confusing.
            </p>
            <p>
              Our final design for user testing had a similar framework but with
              more emphasis on splitting up large information pages into
              smaller, more digestible chunks. We also updated the language and
              icons of the page to be more clear and consistent.
            </p>
          </div>

          <div className="part">
            <h3>User Testing</h3>
            <hr className="hr"></hr>
            <p>
              The last portion of the project was sending our final design to
              users to test. We had a total of 3 users who all had different
              experiences with the app. While two of the users found the app
              extremely easy to navigate, the third user had some trouble
              finding the information they needed. This was a great learning
              experience on writing clear and concise user testing questions,
              and also on how to interpret the results of user testing.
            </p>
          </div>

          <div className="conclusion">
            <h3>In conclusion...</h3>
            <hr className="hr"></hr>
            <p>
              This project had the feel of a more professional design process
              with a lot of group discussions on every step of the assignment,
              and I really enjoyed working with a team to create a product.
              Probably the most valuable takeaways of this assignment were the
              chance to do design critique and the user testing: I learned a lot
              about how to give and receive feedback on design, and how to get
              and interpret effective user testing results.
            </p>
          </div>
        </div>

        <div className="return">
          <a
            href="https://drowningdolphin123.github.io/iterativedesign/"
            target="blank"
          >
            <button className="button">Explore Project Website</button>
          </a>
          <Link to="/#Projects">
            <button className="button">Return to Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Iterative;
