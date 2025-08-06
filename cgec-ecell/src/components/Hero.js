import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Hero.css';
import heroImage from '../assets/images/about-ecell.jpeg'; 

const Hero = () => {
  return (
    <div className="hero-split d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="hero-title">
              Fuel Your <span className="highlight">Entrepreneurial</span> Spirit
            </h1>
            <p className="hero-subtitle">
              Join CGEC ECELL – where ideas become ventures, and students become leaders.
            </p>
            <Button variant="warning" size="lg" href="#join" className="hero-button">
              Get Started
            </Button>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <img src={heroImage} alt="Startup Illustration" className="hero-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
