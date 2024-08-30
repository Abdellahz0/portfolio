import React from "react";
import './Navbar.css'
import logo from '../../assets/Red Abstract Fire Letter A Logo (3).png'
import {Link} from 'react-scroll';
import contactimg from '../../assets/conta.png'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-30} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-30} duration={500} className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById("contact").scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contactimg} alt="contact" className="desktopMenuImg"/>Contact Me
            </button>
        </nav>
            ); 
}
export default Navbar;