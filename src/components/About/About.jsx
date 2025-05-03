import './About.css';
import profileImage from '/public/Images/profile.jpg'; // Correct import path

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm Harshavardhan Reddy M, a web developer passionate about creating intuitive and responsive user interfaces using React.
              I enjoy building real-world projects that combine clean design with strong functionality.
              Currently, I'm focused on mastering modern frontend development and exploring full-stack technologies.
            </p>
            <div className="about-cta">
              <a href="#contact" className="btn">Contact Me</a>
              <a href="#" className="btn btn-outline">Download CV</a>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="../../public/Images/profile.jpg" 
                alt="Harshavardhan Reddy M - Web Developer"
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}