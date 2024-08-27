import React from 'react';
import { Link } from 'react-router-dom';
import './projectitem.css';
import RightSideBubble from '../LRBubbles/RightSideBubble';
import LeftSideBubble from '../LRBubbles/LeftSideBubble';
import Tag from '../Tag/Tag';

function ProjectItem({ title, description, image, projectLink, alignRight, tags }) {
  return (
    <div className={`project-item ${alignRight ? 'right' : 'left'}`}>
      {alignRight ? (
        <Link to={projectLink} target='blank' style={{ textDecoration: 'none' }}>
          <div className='onhover'>
              <div className="center-item">
                <div className="text" style={{ textAlign: alignRight ? 'right' : 'left' }}>
                  <h3 className='title' style={{color: 'white'}}><b>{title}</b></h3>
                  <hr style={{textDecoration: 'none', color: 'white'}} />
                  <div className="descriptions" style={{ textAlign: "justify" }}>
                    <p>{description}</p>
                    <div className="project-tags">
                      {tags.map((tag, index) => (
                        <Tag key={index} label={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <RightSideBubble>
                <div className="card">
                  <img className="screenshots" src={image} alt={title} />
                </div>
              </RightSideBubble>
          </div>
        </Link>

      ) : (
        <Link to={projectLink} target='blank' style={{ textDecoration: 'none' }}>
          <div className='onhover'>
              <LeftSideBubble>
                <div className="card">
                  <img className="screenshots" src={image} alt={title} />
                </div>
              </LeftSideBubble>
              <div className="center-item">
                <div className="text" style={{ textAlign: alignRight ? 'right' : 'left' }}>
                  <h3 className='title' style={{color: 'white'}}><b>{title}</b></h3>
                  <hr style={{textDecoration: 'none', color: 'white'}}/>
                  <div className="descriptions" style={{ textAlign: "justify" }}>
                    <p>{description}</p>
                    <div className="project-tags">
                      {tags.map((tag, index) => (
                        <Tag key={index} label={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
        </div>
        </Link>

      )}
    </div>
  );
}

export default ProjectItem;
