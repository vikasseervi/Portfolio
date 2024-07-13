import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

export default function About() {
    
    return(
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className='about-para'>
                <p>Hello! I&apos;m a motivated and dedicated college student currently pursuing a B.Tech in Computer Science and Engineering. My proficiency in Java, ReactJs, C++, and Data Structures & Algorithms (DSA) reflects my strong foundation in both programming and problem-solving.</p>
                <br />
                <p>I pride myself on my strong observational, organizational, and communication skills, which have been honed through both coursework and self-study. As a quick learner with a robust work ethic, I am always eager to tackle new challenges and expand my knowledge.</p>
                <br />
                <p>My goal is to leverage my technical skills and theoretical knowledge to contribute effectively to a team&apos;s success. I am committed to continuous professional growth and development, and I am enthusiastic about applying my expertise to make a positive impact.</p>
                <br />
            </div>

            <div className="section">
                <h2>Education</h2>
                <div className="item">
                    <div>
                        <p className='date'>Nov 2021 - present</p>
                        <h4>Bachelor of Technology in Computer Science and Engineering</h4>
                        <li>CMR Engineering College</li>
                        <li>8.58 CGPA</li>
                        
                    </div>
                    
                </div>
                {/* <div className="item">
                    <div>
                        <p className='date'>Jun 2019 - Apr 2021</p>
                        <h4>Intermediate (12th)</h4>
                        <li>Narayana Junior College</li>
                        <li>95%</li>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <p className='date'>Jun 2018 - Apr 2019</p>
                        <h4>Secondary School (10th)</h4>
                        <li>M.B Grammar High School</li>
                        <li>9.8 GPA</li>
                    </div>
                </div> */}
            </div>

            <div className="section">
                <h2>Certifications</h2>
                <div className="item">
                    <h4>Infosys SpringBoard Programming using Java</h4>
                    <li>Key Skills: <span className="skills"> Java, Data Structures, Object-Oriented Programming </span></li>
                    <li>In the Infosys SpringBoard Programming using Java course, I covered a range of topics related to Java programming language like Java Basics, Object-Oriented Programming (OOP), and Data Structures.</li>
                </div>
                <div className="item">
                    <h4>Data Analytics Virtual Internship (AWS Academy)</h4>
                    <li>Key Skills: <span className="skills"> AWS </span></li>
                    <li>In the AICTE Data Analytics Virtual Internship (AWS Academy), I gained valuable skills and knowledge in data analytics using tools and technologies provided by Amazon Web Services (AWS) like Amazon S3, EC2, etc.</li>
                </div>
                <div className="item">
                    <h4>Hewlett Packard Enterprise Software Engineering Job Simulation</h4>
                    <li>Key Skills: <span className="skills"> Spring Boot, Spring MVC, REST </span></li>
                    <li>Hewlett Packard Enterprise Software Engineering Job Simulation on Forage - March 2024. </li>
                    <li>Wrote a proposal for a RESTful web service to manage a list of employees. </li>
                    <li>Built a web server application in Java Spring Boot that can accept and respond to HTTP requests as well as support uploading JSON data. </li>
                    <li>Developed and ran a set of unit tests to assess my Java Spring Boot application&apos;s performance.</li>
                </div>
            </div>
        </div>
    )
}