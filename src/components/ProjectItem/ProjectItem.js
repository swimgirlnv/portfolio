import React from 'react';
import { Link } from 'react-router-dom';
import './projectitem.css';
import RightSideBubble from '../Bubbles/RightSideBubble';
import LeftSideBubble from '../Bubbles/LeftSideBubble';

function ProjectItem({ title, description, image, projectLink, alignRight }) {
  return (
    <div className={`project-item ${alignRight ? 'right' : 'left'}`}>
      {alignRight ? (
        <>
          <RightSideBubble>
            <div className="card">
              <Link to={projectLink}>
                <img className="screenshots" src={image} alt={title} />
              </Link>
            </div>
          </RightSideBubble>
          <div className="center-item">
            <div className="text" style={{ textAlign: alignRight ? 'right' : 'left' }}>
              <h3><b>{title}</b></h3>
              <hr />
              <div className="descriptions" style={{ textAlign: "justify" }}>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <LeftSideBubble>
            <div className="card">
              <Link to={projectLink}>
                <img className="screenshots" src={image} alt={title} />
              </Link>
            </div>
          </LeftSideBubble>
          <div className="center-item">
            <div className="text" style={{ textAlign: alignRight ? 'right' : 'left' }}>
              <h3><b>{title}</b></h3>
              <hr />
              <div className="descriptions" style={{ textAlign: "justify" }}>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectItem;
