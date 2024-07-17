import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import ezManage_project from '../../assets/ezManage_project.gif'
import portfolio_project from '../../assets/portfolio_project.gif'
import ezManage_image from '../../assets/ezManageStaticPic.png'
import portfolio_image from '../../assets/portfolioStaticPic.png'

import { useState } from 'react'

export default function Projects() {

    const exManageSkills = ['Java', 'SpringBoot', 'MySQL', 'API', 'HTML', 'CSS', 'Thymeleaf'];
    const academyMateSkills = ['Java', 'SpringBoot', 'MySQL', 'JPA'];
    const portfolioSkills = ['ReactJS', 'HTML', 'CSS'];

    const [isHovered, setIsHovered] = useState('');

    const handleMouseOver  = (project) => setIsHovered(project);
    const handleMouseOut = () => setIsHovered('');
   
    return (
        <div id='projects' className='projects'>
            <div className='prjects-title'>
                <h1>Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className='project-section'>
                <div className='project-container' onMouseOver={() => handleMouseOver('ezManage')} onMouseOut={handleMouseOut}>
                    {/* <HoverGIF image={ezManage_image} src={ezManage_project} /> */}
                    <img src={isHovered === 'ezManage' ? ezManage_project : ezManage_image} alt="My GIF" width="auto" height="auto" />

                    <h2>ezManage</h2>
                    <div className='project-container-techstack'>
                    <p> <h4>Tech Stack :&nbsp;</h4></p>
                    {exManageSkills.map((skill, index) => (
                        <span key={index} className='skill-bg'>
                            {skill}
                        </span>
                    ))}
                    </div>
                    <div className='project-container-links'>
                        <a href="https://github.com/vikasseervi/ezManage" target="_blank">View code</a>
                    </div>
                </div>
                
                <div className='project-container' onMouseOver={() => handleMouseOver('portfolio')} onMouseOut={handleMouseOut}>
                    <img src={isHovered === 'portfolio' ? portfolio_project : portfolio_image} alt="My GIF" width="auto" height="auto" />
                    <h2>Portfolio Website</h2>
                    <div className='project-container-techstack'>
                    <p> <h4>Tech Stack :&nbsp;</h4></p>
                    {portfolioSkills.map((skill, index) => (
                        <span key={index} className='skill-bg'>
                            {skill}
                        </span>
                    ))}
                    </div>
                    <div className='project-container-links'>
                        <a href="https://github.com/vikasseervi/Portfolio" target="_blank">View code</a>
                        <a href="https://vikas-portfolio-website.netlify.app/" target="_blank">Live</a>
                    </div>
                </div>
                
                <div className='project-container'>
                    <img src="" alt="My GIF" width="auto" height="auto" />
                    <h2>AcademyMate (CLI)</h2>
                    <div className='project-container-techstack'>
                    <p> <h4>Tech Stack :&nbsp;</h4></p>
                    {academyMateSkills.map((skill, index) => (
                        <span key={index} className='skill-bg'>
                            {skill}
                        </span>
                    ))}
                    </div>
                    <div className='project-container-links'>
                        <a href="https://github.com/vikasseervi/AcademyMate" target="_blank">View code</a>
                    </div>
                </div>

            </div>
        </div>
    )
}