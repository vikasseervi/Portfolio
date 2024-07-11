import './Navbar.css'
import logoW from '../../assets/logoW.png'

export default function Navbar() {
    return(
        <div className='navbar'>
            <img src={logoW} alt="Logo" className='navbar-logo' />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Social</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}