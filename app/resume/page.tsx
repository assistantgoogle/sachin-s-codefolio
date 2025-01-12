export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8 text-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold">SACHIN M</h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="mailto:markalesachin352@gmail.com" className="hover:text-primary">markalesachin352@gmail.com</a>
            <span>|</span>
            <a href="tel:+916360150239" className="hover:text-primary">+91 6360150239</a>
            <span>|</span>
            <a href="https://www.linkedin.com/in/sachin-markale-128974247/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
            <span>|</span>
            <a href="https://github.com/assistantgoogle" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
          </div>
        </header>

        {/* Professional Summary */}
        <section>
          <h2 className="text-xl font-bold mb-2">PROFESSIONAL SUMMARY</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Motivated Computer Science Engineering student with hands-on experience in software development, 
            specializing in Java, web technologies, and cloud platforms. Skilled in developing navigation systems, 
            web applications, and implementing robust software solutions.
          </p>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-bold mb-4">EDUCATION</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">BNM Institute of Technology</h3>
              <p className="text-gray-700 dark:text-gray-300">B.E, Computer Science and Engineering</p>
              <p className="text-gray-600 dark:text-gray-400">December 2021 - April 2025</p>
              <p className="text-gray-600 dark:text-gray-400">CGPA: 7.92 (up to 6th semester)</p>
            </div>
            <div>
              <h3 className="font-semibold">SHREE CHANNABASAVESHWAR GURUKUL KARDYAL BIDAR</h3>
              <p className="text-gray-600 dark:text-gray-400">June 2018 - July 2020</p>
              <p className="text-gray-600 dark:text-gray-400">GRADE: 86.12</p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-xl font-bold mb-2">TECHNICAL SKILLS</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Programming Languages: Java, C, SQL, JavaScript</li>
            <li>Web Technologies & Frameworks: HTML, CSS, Spring JDBC, Spring Security</li>
            <li>Databases: MySQL</li>
            <li>Cloud Services: Google Cloud Platform (GCP), Amazon Web Services (AWS)</li>
            <li>Other Technologies: Git, RESTful APIs, SonarQube, AppScan, OWASP, CI/CD, Jenkins</li>
          </ul>
        </section>

        {/* Professional Experience */}
        <section>
          <h2 className="text-xl font-bold mb-4">PROFESSIONAL EXPERIENCE</h2>
          <div>
            <h3 className="font-semibold">Software Developer Intern</h3>
            <p className="text-gray-700 dark:text-gray-300">Sankalp Technologies | September 2024 – Current</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>Developing SmartRoute Navigation and Tracker project</li>
              <li>Implementing GPS device integration and real-time data handling</li>
              <li>Utilizing Spring Boot, Java, RESTful APIs, and MySQL for backend development</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-bold mb-4">PROJECTS</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">SmartRoute Navigation and Tracking</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Developed a comprehensive navigation solution with both web interface and mobile application</li>
                <li>Engineered Android mobile app using Java for real-time GPS tracking and navigation</li>
                <li>Developed a GPS-integrated navigation system providing real-time location updates</li>
                <li>Implemented route tracking functionality with comprehensive data management</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Text Summarization Web Application</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Created Django-based web application using natural language processing</li>
                <li>Generated concise summaries from long-form text documents</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Weather Application</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Developed Android mobile application</li>
                <li>Integrated OpenWeatherMap API for real-time weather information retrieval</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Covid 19 Analysis Using Deep Learning</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Built a deep learning model to analyze COVID-19 data and predict case trends using historical datasets</li>
                <li>Utilized frameworks like TensorFlow and PyTorch for data processing and model training</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

