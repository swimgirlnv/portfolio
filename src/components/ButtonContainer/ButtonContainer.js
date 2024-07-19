import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import './buttoncontainer.css';
const ButtonContainer = () => {
  return (
    <div className="button-container">
      <button
        className="important-button"
        onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vQHFb7OqqalqcVa8bYUEjXQVD_kRuW90ElYsGGn0nD1JePm6siNdy2azrm5nsmy0p9HwUjw_WlUJ0Mm/pub', '_blank')}
      >
        <p style={{ paddingRight: '10px' }}>Resume</p>
        <FontAwesomeIcon icon={faFileLines} style={{ color: '#000000' }} className="icon" />
      </button>
      <button
        className="important-button"
        onClick={() => window.open('https://www.linkedin.com/in/rebecca-waterson-b3b95b21a/', '_blank')}
      >
        <p style={{ paddingRight: '10px' }}>LinkedIn</p>
        <FontAwesomeIcon icon={faLinkedin} style={{ color: '#000000' }} className="icon" />
      </button>
      <button
        className="important-button"
        onClick={() => window.open('https://github.com/swimgirlnv/', '_blank')}
      >
        <p style={{ paddingRight: '10px' }}>GitHub</p>
        <FontAwesomeIcon icon={faGithubSquare} style={{ color: '#000000' }} className="icon" />
      </button>
      <button
        className="important-button"
        onClick={() => window.open('https://www.instagram.com/thesketchy.sketches/', '_blank')}
      >
        <p style={{ paddingRight: '10px' }}>Instagram</p>
        <FontAwesomeIcon icon={faInstagramSquare} style={{ color: '#000000' }} className="icon" />
      </button>
    </div>
  );
};

export default ButtonContainer;
