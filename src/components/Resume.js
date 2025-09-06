import React from 'react';
import resumePDF from '../assets/resume.pdf'; 

const Resume = () => (
  <section id="resume" className="section">
    <h2>Resume</h2>
    <a href={resumePDF} target="_blank" rel="noopener noreferrer">Download Resume</a>
  </section>
);

export default Resume;
