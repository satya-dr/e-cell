// File: src/components/Hero.js
import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Hero = () => (
  <div className="bg-dark text-white d-flex align-items-center" style={{ height: '90vh', backgroundImage: 'url(/path/to/your/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <Container className="text-center">
      <h1 className="display-4 fw-bold mb-3">Welcome to <span className="text-warning">CGEC ECELL</span></h1>
      <p className="lead">Empowering Innovation • Fueling Entrepreneurship</p>
      <Button variant="warning" size="lg" href="#join">Join the Movement</Button>
    </Container>
  </div>
);

export default Hero;
