import { projects } from '../../data/projects'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {/* Use project.image instead of placeholder */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "/default-project.jpg"
                  }}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}