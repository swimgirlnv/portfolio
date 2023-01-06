import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import TopBar from '../TopBar';
import './routes.css';

function Stories () {
  return(
    <div className="explainer-page">
      <TopBar />
      <div className='content-container'>
        <div className='content2'>
          <Link to="/Dual">
            <div className='content3'>
              <h3>The Dual Meet</h3>
              <p>
                A mythical exploration of the perils contained in a high school dual swim meet.
              </p>              
            </div>
          </Link>
          <Link to='/BearMaiden'>
            <div className='content3'>
              <h3>The Bear and the Maiden Fair</h3>
              <p>
                A heart-warming story of a girl and her new best friend.
              </p>
            </div>
          </Link>
          <Link to='/Landscape'>
            <div className='content3'>
              <h3>Landscape Assignment</h3>
              <p>
                A piece dedicated to the beauty of the Mt. Rose wilderness.
              </p>
            </div>
          </Link>
          <div className='content3'>
            <h3>Publications</h3>
            <div className='imgs'>
              <a href="https://www.scdsoctagon.com/author/rebecca-waterson/" target="blank">
                <img src="https://i0.wp.com/www.scdsoctagon.com/wp-content/uploads/2020/06/cropped-octagon-round-logo.png?fit=512%2C512&ssl=1" width="100px"></img>
              </a>
              <a href="http://www.theribofbrown.com/classics-concentrator-teaches-tinder-date-about-oedipus/" target="blank" >
                <img src="https://i0.wp.com/www.theribofbrown.com/wp-content/uploads/2021/10/cropped-logo.png?w=300" width="100px"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Stories;