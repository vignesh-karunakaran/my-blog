const ResumeComponent = () => {
    const calculateMonthsSinceJoining = (joiningDateString) => {
        const today = new Date();
        const joiningDate = new Date(joiningDateString);
        let yearDiff = today.getFullYear() - joiningDate.getFullYear();
        let monthDiff = today.getMonth() - joiningDate.getMonth();
        let totalMonths = yearDiff * 12 + monthDiff;
        return totalMonths;
    }
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1 className="resume-name">Vignesh K</h1>
        <p className="resume-tagline">Resolver, Optimist</p>
        <div className="contact-info">
          <p>+917904252672</p>
          <p>official2vignesh@gmail.com</p>
        </div>
      </header>

      <section className="resume-section skills-section">
        <h2>SKILLS</h2>
        <div className="skills-list">
          <span className="skill-item">JAVASCRIPT</span>
          <span className="skill-item">HTML</span>
          <span className="skill-item">CSS</span>
          <span className="skill-item">JAVA</span>
          <span className="skill-item">TYPESCRIPT</span>
          <span className="skill-item">REACT</span>
          <span className="skill-item">REDUX</span>
          <span className="skill-item">EMBER</span>
          <span className="skill-item">NEXTJS</span>
          <span className="skill-item">NODE</span>
          <span className="skill-item">SASS</span>
          <span className="skill-item">BOOTSTRAP</span>
          <span className="skill-item">GIT</span>
          <span className="skill-item">DOCKER</span>
          <span className="skill-item">AWS</span>
        </div>
      </section>

      <section className="resume-section experience-section">
        <h2>EXPERIENCE</h2>

        <div className="experience-item">
          <h3>Senior Software Engineer</h3>
          <p className="company-name">Mphasis, Chennai</p>
          <p className="experience-duration">AUG 2024 - Present ({calculateMonthsSinceJoining("2024-08-04")} Months Exp)</p>
          <ul>
            <li>Worked in banking Product Application (Fiserv).</li>
            <li>Worked in a React application where I have added some features and fixed some of the bugs in the application and implemented CRA to Vite migration in that web app.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Web Developer</h3>
          <p className="company-name">Zoho Corporation, Chennai</p>
          <p className="experience-duration">DEC 2018 - JUNE 2024 (6 years Exp)</p>
          <ul>
            <li>Created new modules, features, functionality in Web Application.</li>
            <li>Worked in a monolithic repository to develop and deploy new features and functionality related to core objects of the web app using React and Ember and we used Jest and Qunit for testing the web app.</li>
            <li>Worked in improvising the React network libraries to wisely handle the data and reduce redundancy code while handling multipart data like image and files.</li>
            <li>Worked on some internal React components like popover, datepicker, where I have upgraded the features with some styles and added some more accessibility in those components.</li>
            <li>Worked in iframe communications between React apps to maintain connection between parent and child frame.</li>
            <li>Implemented some improvised way to optimize performance budget in website pages and in the web app (React and Ember).</li>
            <li>Implemented Lighthouse CL/CI In our repositories.</li>
            <li>Using Javascript we implemented lighthouse CL/CI while creating a MR for a new web page. It will run a pipeline which will check the lighthouse scores, if it falls below 60 percent then that pipeline will fail so that no one can merge that specific MR.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section education-section">
        <h2>EDUCATION</h2>
        <div className="education-item">
          <h3>B.E/B.TECH CSE</h3>
          <p className="institution-name">S.A Engineering college, Chennai</p>
          <p className="education-duration">2013-2017</p>
        </div>
      </section>

      <section className="resume-section links-section">
        <h2>LINKS</h2>
        <ul>
          <li><a href="https://www.linkedin.com/in/vignesh-karunakaran-4730039b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/vignesh-karunakaran" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="/Vignesh-K.pdf" target="_blank" rel="noopener noreferrer">Resume PDF</a></li>
        </ul>
      </section>

      <section className="resume-section languages-section">
        <h2>LANGUAGES</h2>
        <p>Tamil, English, Telugu</p>
      </section>
    </div>
  );
};

export default ResumeComponent;
