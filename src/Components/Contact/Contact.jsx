import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail from '../../assets/mail.svg'
import location from '../../assets/location.svg'
import github from '../../assets/github_contact.svg'
import linkedin from '../../assets/linkedin_contact.png'

export default function Contact() {
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let&apos;s talk</h1>
                    <p>I&apos;m currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className='contact-details'>
                        <a
                            href="mailto:vikasseervi357@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='contact-detail'
                            title="Email me"
                        >
                            <img src={mail} alt="Email" /> <p>vikasseervi357@gmail.com</p>
                        </a>
                        <div className='contact-detail'>
                            <img src={location} alt="" /> <p>Hyderabad, India</p>
                        </div>
                    </div>
                </div>
                
                <div className='contact-right'>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <a href="https://github.com/vikasseervi/" target='_blank' className='contact-detail'>
                                <img src={github} width="50px" height="50px" alt="" /> <p>GitHub</p>
                            </a>
                        </div>
                        <div className='contact-detail'>
                            <a href="https://in.linkedin.com/in/vikas-seervi-357v" target='_blank' className='contact-detail'>
                                <img src={linkedin} width="50px" height="50px" alt="" /> <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                
            </div>

            <hr className="hr-line" />
            
            <div className='thank-you'>
                <h2>  <span>Thank you </span> for taking the time to explore my portfolio. I hope you&apos;ve enjoyed discovering my work as much as I&apos;ve enjoyed creating it.</h2>
            </div>

        </div>
    )
}