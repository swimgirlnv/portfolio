// Tag.js
import React from 'react';
import './tag.css';

const Tag = ({ label }) => {
  return (
    <span className="tag">
      {label}
    </span>
  );
};

export default Tag;
