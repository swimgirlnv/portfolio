import { Link } from "react-router-dom";
import "./routes.css";

function Stories() {
  return (
    <div className="explainer-page2">
      <div className="content-container">
        <div className="content2">
          <Link to="/SwanPoint" className="nostyle">
              <div className="content3">
                <h3>Swan Point Cemetary: Reflections in Time</h3>
                <p>
                  A personal essay reflecting on a visit to Swan Point Cemetary in Providence, RI.
                </p>
                <p>
                  (LITR 1151Q: Great Adventure)
                </p>
              </div>
          </Link>
          <Link to="/Thayer" className="nostyle">
              <div className="content3">
                <h3>Thayer Street</h3>
                <p>
                  Part one of a three-part movement on traversing Thayer Street in Providence, RI.
                </p>
                <p>
                  (LITR 1151Q: Great Adventure)
                </p>
              </div>
          </Link>
          <Link to="/Ireland" className="nostyle">
              <div className="content3">
                <h3>On to Ireland</h3>
                <p>
                  A short film treatment exploring my fictional life as an expat in Ireland.
                </p>
                <p>
                  (LITR 1151Q: Great Adventure)
                </p>
              </div>
          </Link>
          <Link to="/UCLA" className="nostyle">
            <div className="content3">
              <h3>UCLA Film & Television Summer Institute</h3>
              <p>
                A compilation of my work from the Introduction to TV Writing
                course I took in the summer of 2023.
              </p>
            </div>
          </Link>
          
          <Link to="/BearMaiden" className="nostyle">
            <div className="content3">
              <h3>The Bear and the Maiden Fair</h3>
              <p>A heart-warming story of a girl and her new best friend.</p>
              <p>
                (LITR 0110H: Digital & Cross-Disciplinary)
              </p>
            </div>
          </Link>
          <Link to="/Landscape" className="nostyle">
            <div className="content3">
              <h3>Landscape Assignment</h3>
              <p>A piece dedicated to the beauty of the Mt. Rose wilderness.</p>
              <p>
                (LITR 0110H: Digital & Cross-Disciplinary)
              </p>
            </div>
          </Link>
          <Link to="/Clark" className="nostyle">
            <div className="content3">
              <h3>Re Memory</h3>
              <p>Inspired by the sweetest friend anyone could ever ask for.</p>
              <p>
                (LITR 0110H: Digital & Cross-Disciplinary)
              </p>
            </div>
          </Link>
          <Link to="/Kin" className="nostyle">
            <div className="content3">
              <h3>Kin</h3>
              <p>
                An adaption of the myth my own mother told me when I was
                younger.
              </p>
              <p>
                (LITR 0210: Fiction Writing II)
              </p>
            </div>
          </Link>
          <Link to="/Worm" className="nostyle">
            <div className="content3">
              <h3>Worm Questions</h3>
              <p>
                A silly assignment done with the gracious collaboration of a
                lovely computer science neighbor.
              </p>
              <p>
                (LITR 0210: Fiction Writing II)
              </p>
            </div>
          </Link>
          <Link to="/Dual" className="nostyle">
            <div className="content3">
              <h3>The Dual Meet</h3>
              <p>
                A mythical exploration of the perils contained in a high school
                dual swim meet.
              </p>
              <p>
                (LITR 0110A: Fiction I)
              </p>
            </div>
          </Link>
          <Link to="/Butterfly" className="nostyle">
            <div className="content3">
              <h3>Butterfly</h3>
              <p>A bus ride caught between different slices of time.</p>
              <p>
                (LITR 0110A: Fiction I)
              </p>
            </div>
          </Link>
          
          <div className="content3">
            <h3>Publications</h3>
            <div className="imgs">
              <div className="link-item">
                <a href="https://a.co/d/7dQm5YF" target="blank">
                  <img
                    src="https://i.imgur.com/VbTbBLv.png"
                    height="100px"
                    alt="Galactica Book Cover"
                  ></img>
                </a>
              </div>
              <div className="link-item">
                <a
                  href="https://www.scdsoctagon.com/author/rebecca-waterson/"
                  target="blank"
                >
                  <img
                    src="https://i0.wp.com/www.scdsoctagon.com/wp-content/uploads/2020/06/cropped-octagon-round-logo.png?fit=512%2C512&ssl=1"
                    width="100px"
                    alt="SCDS Octagon Logo"
                  ></img>
                </a>
              </div>
              <div className="link-item">
                <a
                  href="http://www.theribofbrown.com/classics-concentrator-teaches-tinder-date-about-oedipus/"
                  target="blank"
                >
                  <img
                    src="https://i0.wp.com/www.theribofbrown.com/wp-content/uploads/2021/10/cropped-logo.png?w=300"
                    width="100px"
                    alt="RIB @ Brown Logo"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
