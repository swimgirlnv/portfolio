// StoryItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import './storyitem.css';

const StoryItem = ({ title, description, courseTitle, link, date }) => {
  return (
    <Link to={link} className="nostyle">
      <div className="story-item">
        <h3>{title}</h3>
        <p>{description}</p>
        {courseTitle && <p className="course-title">({courseTitle})</p>}
        {date && <p className="date">{date}</p>}
      </div>
    </Link>
  );
};

export default StoryItem;
