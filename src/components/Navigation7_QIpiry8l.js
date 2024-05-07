import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import "./ProductDetail.css";
import Luminouslogo from "../img/luminousLogo.png";

function NavigationBar() {
    return (
        <Navbar expand="lg" className="flex-column py-3">
            <Container>
                <Navbar.Brand as={RouterLink} to="/">
                    <img className="brandlogo" src={Luminouslogo} alt="Brand logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={RouterLink} to="/">Home</Nav.Link>
                        <Nav.Link as={RouterLink} to="/Products">Shop</Nav.Link>
                        <ScrollLink
                            to="Why-us" // सेगमेंट का आईडी
                            smooth={true}
                            duration={500}
                            offset={-70} // Optional, शीर्षक को समायोजित करने के लिए
                            className="nav-link"
                        >
                            Why Us?
                        </ScrollLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
