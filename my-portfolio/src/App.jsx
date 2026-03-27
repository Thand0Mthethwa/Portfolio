import './App.css'
import profilePicture from './assets/Portfolio picture.jpg'
import { motion } from "framer-motion"

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about">
          <div className="about-me-container">
            <motion.div 
              className="profile-picture"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* You can replace this with your own image */}
              <img src={profilePicture} alt="Your Name" />
            </motion.div>
            <motion.div 
              className="about-me-text"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>About Me</h2>
              <p>
                I am a dedicated Software Engineer with a multi-disciplinary 
                background in mobile development, web technologies, 
                and systems integration. My professional philosophy is built on 
                the intersection of high-quality code and seamless user experiences. 
                With a core focus on the Flutter and Firebase ecosystem, I specialize 
                in architecting scalable mobile solutions that solve real-world problems.
                
                Beyond development, I bring a rigorous approach to Quality Assurance, 
                ensuring that every product I build is not only functional but resilient 
                and performant. I thrive in collaborative environments where I can leverage 
                my expertise in Java, Python, and JavaScript to bridge the gap between complex 
                systems and user-backend systems and intuitive frontend interfaces. I am a 
                lifelong learner committed to staying at the forefront of emerging technologies 
                to deliver impactful, modern software
              </p>
            </motion.div>
          </div>
        </section>

        <motion.section 
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Projects</h2>
          <motion.div 
            className="project"
            whileHover={{ scale: 1.05 }}
          >
            <h3>VitaTrack</h3>
            <p>A website for a health-tracking app that monitors your daily routine and footsteps, primarily through a smartwatch.</p>
            <a href="#">View Project</a>
          </motion.div>
          <motion.div 
            className="project"
            whileHover={{ scale: 1.05 }}
          >
            <h3>ComChat</h3>
            <p>A community chat app </p>
            <a href="#">View Project</a>
          </motion.div>
        </motion.section>

        <motion.section 
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Contact</h2>
          <p>
            I'm currently available for freelance work. If you have a project you'd like to discuss, please get in touch!
          </p>
          <p>
            You can reach me by email at <a href="mailto:ts.mthethwa01@gmail.com">ts.mthethwa01@gmail.com</a>.
          </p>
          <p>
            You can also find me on <a href="https://www.linkedin.com/in/thando-mthethwa-0a8a27252" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </motion.section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 [Your Name]. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
