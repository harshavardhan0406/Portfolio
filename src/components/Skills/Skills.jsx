import { useEffect, useRef } from 'react';
import { skills } from '../../data/skills';
import './Skills.css';

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Animate skills on component mount
    const skillItems = container.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
      // Initial scattered position
      item.style.transform = `translate(
        ${Math.random() * 200 - 100}px,
        ${Math.random() * 200 - 100}px
      )`;
      item.style.opacity = '0';

      // Animate to final position
      setTimeout(() => {
        item.style.transition = 'all 0.5s ease-out';
        item.style.transform = 'translate(0, 0)';
        item.style.opacity = '1';
      }, 100 * index);
    });

    return () => {
      skillItems.forEach(item => {
        item.style.transition = '';
        item.style.transform = '';
        item.style.opacity = '';
      });
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-container" ref={containerRef}>
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.officialDoc}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-item"
              aria-label={`${skill.name} documentation`}
            >
              <i className={skill.iconClass}></i>
              <span className="skill-name">{skill.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}