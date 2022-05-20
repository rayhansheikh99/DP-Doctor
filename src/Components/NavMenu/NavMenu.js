import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
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
                    <Nav.Link href="#">About Us</Nav.Link>
                    <Nav.Link href="#">Blog</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <Nav.Link href="#">FAQ</Nav.Link>
                
                    </Nav>
                    <Nav>
                    <Image src={world} alt="world"/>
                    <NavDropdown title="En" id="collasible-nav-dropdown"/>
                    <Button className='login-btn'>Login</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenu;