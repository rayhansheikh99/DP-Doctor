import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from "../../images/logo.png"
import logo2 from "../../images/TM.png"
import world from "../../images/world.svg"
import "./navmenu.css"

const NavMenu = () => {
    return (
        <div className='nav-bg'>
            <Navbar>
                <Container className='menu'>
                <Image className='me-3' src={logo} alt="logo"/>
                <Image src={logo2} alt="logo2"/>
                    <Nav className="me-auto">
                    <NavDropdown className="menu-item" title="Doctor" id="collasible-nav-dropdown"/>
                    <NavDropdown title="Services" id="collasible-nav-dropdown"/>
                    <NavDropdown title="Pharmacy Owner" id="collasible-nav-dropdown"/>
                    <Nav.Link> <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About Us</Link></Nav.Link>
                    <Nav.Link><Link to="blog" spy={true} smooth={true} offset={50} duration={500}>Blog</Link></Nav.Link>
                    <Nav.Link><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></Nav.Link>
                    <Nav.Link><Link to="faq" spy={true} smooth={true} offset={50} duration={500}>FAQ</Link></Nav.Link>
                
                    </Nav>
                    <Nav>
                    <Image src={world} alt="world"/>
                    <NavDropdown title="En" id="collasible-nav-dropdown"/>
                    <button className='login-btn'>Login</button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenu;