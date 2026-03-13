import './App.css'

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
          <h2>About Me</h2>
          <p>
            Hello! I'm Thando Mthethwa, a passionate Software Engineer. I specialize in mobile development, system intergration, web development and quality assurrance.
            I'm always eager to learn new things and take on new challenges.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>A brief description of your first project. What was the goal? What technologies did you use?</p>
            <a href="#">View Project</a>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>A brief description of your second project. What problem did it solve? What was your role?</p>
            <a href="#">View Project</a>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            I'm currently available for freelance work. If you have a project you'd like to discuss, please get in touch!
          </p>
          <p>
            You can reach me by email at <a href="mailto:[Your Email]">[Your Email]</a>.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 [Your Name]. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
