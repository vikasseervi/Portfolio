import './Navbar.css'
import { useEffect, useRef, useState } from 'react';
import github_logo from '../../assets/github_contact.svg'
import leetcode_logo from '../../assets/leetcode.svg'
import codechef_logo from '../../assets/codechef.svg'

import AnchorLink from 'react-anchor-link-smooth-scroll';
export default function Navbar() {

    const [open, setOpen] = useState(true);
    const hubRef = useRef(null);

    // Close when clicking outside the toggle/menu
    useEffect(() => {
        const onDocClick = (e) => {
            if (!hubRef.current) return;
            if (!hubRef.current.contains(e.target)) {
                setOpen(true);
            }
        };
        document.addEventListener('mousedown', onDocClick);
        return () => document.removeEventListener('mousedown', onDocClick);
    }, []);

    const profiles = [
        { label: 'GitHub', short: 'GH', href: 'https://github.com/vikasseervi', icon: github_logo },
        { label: 'LeetCode', short: 'LC', href: 'https://leetcode.com/vikasseervi357', icon: leetcode_logo },
        { label: 'CodeChef', short: 'CC', href: 'https://www.codechef.com/users/vikasseervi357', icon: codechef_logo },
    ];

    return(
        <div id='' className='navbar navbar-slide-slidedown'>
            <h1 className='navbar-logo'>VIKAS</h1>            
            <ul className="nav-menu">
                <li> <AnchorLink className='anchor-link' href="#home"> Home </AnchorLink></li>
                <li> <AnchorLink className='anchor-link' href="#about"> About Me </AnchorLink></li>
                <li> <AnchorLink className='anchor-link' href="#timeline"> Experience </AnchorLink></li>
                <li> <AnchorLink className='anchor-link' href="#technologies"> Technologies</AnchorLink></li>
                <li> <AnchorLink className='anchor-link' href="#projects"> Projects </AnchorLink></li>
                <li> <AnchorLink className='anchor-link' href="#contact"> Contact </AnchorLink></li>
            </ul>
        <div className="code-hub" ref={hubRef}>
                <button
                    type="button"
            className={`code-toggle ${open ? 'open' : 'closed'}`}
                    aria-expanded={open}
                    aria-label={open ? 'Close coding profiles' : 'Open coding profiles'}
                    onClick={() => setOpen(prev => !prev)}
                >
            <span>{open ? '</>' : '✕'}</span>
                </button>

                <div className={`code-menu ${open ? '' : 'show'}`} role="menu" aria-hidden={!open}>
                    {profiles.map((p) => (
                        <a
                            key={p.label}
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="code-node"
                            title={p.label}
                            role="menuitem"
                            onClick={() => setOpen(false)}
                        >
                            {p.icon ? (
                                <img src={p.icon} alt={p.label} />
                            ) : (
                                <span className="code-node-text">{p.short}</span>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}