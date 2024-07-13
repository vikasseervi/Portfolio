import './Navbar.css'
// import theme_pattern from '../../assets/theme_pattern.svg'

export default function Navbar() {
    return(
        <div className='navbar'>
            {/* <img src={logoW} alt="Logo" className='navbar-logo' /> */}
            <h1 className='navbar-logo'>Vikas</h1>
            {/* <h1 className='navbar-logo'>Vikas</h1>
            <img src={theme_pattern} alt="" /> */}
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