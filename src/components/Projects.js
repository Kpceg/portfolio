import React, { Suspense, lazy } from 'react';
import projectImg from '../assets/project.png'; // import at the top

const ProjectCard = lazy(() => import('./ProjectCard'));

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    <Suspense fallback={<p>Loading projects...</p>}>
      <ProjectCard title="Portfolio Website" description="My personal portfolio website" image={projectImg} />
      <ProjectCard title="Blog App" description="React blogging application" image={projectImg} />
    </Suspense>
  </section>
);

export default Projects;
