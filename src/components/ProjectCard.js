import React from 'react';

const ProjectCard = ({ title, description, image }) => (
  <div className="project-card">
    {image && <img src={image} alt={title} />}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default ProjectCard;
