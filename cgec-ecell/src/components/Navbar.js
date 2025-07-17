// File: src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../assets/images/logo.png'; // adjust if needed
import './Navbar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`main-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img src={logo} alt="ECELL Logo" height="36" />
          <span className="fw-bold text-dark">CGEC ECELL</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            {[
              ['About', '#about'],
              ['Initiatives', '#initiatives'],
              ['Events', '#events'],
              ['Team', '#team'],
              ['Testimonials', '#testimonials'],
              ['Gallery', '#gallery'],
              ['Contact', '#contact'],
            ].map(([label, href], index) => (
              <Nav.Link key={index} href={href} className="nav-link-custom">
                {label}
              </Nav.Link>
            ))}
            <Button href="#join" variant="warning" className="ms-2 px-3 fw-semibold rounded-pill">
              Join Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
