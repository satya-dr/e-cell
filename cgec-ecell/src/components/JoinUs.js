// File: src/components/JoinUs.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const JoinUs = () => (
  <section id="join" className="py-5 bg-dark text-white text-center">
    <Container>
      <h2 className="fw-bold mb-4">Ready to <span className="text-warning">Join Us?</span></h2>
      <p className="lead mb-4">
        Become a part of our entrepreneurial journey. Join CGEC ECELL and build the future with us.
      </p>
      <Button
        variant="warning"
        size="lg"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeZlckMh-9VpD41_dK7cTyoTcpKT5OKffe087RLlmPqAMrhVQ/viewform?usp=send_form" // Replace with actual Google Form link
        target="_blank"
        rel="noopener noreferrer"
      >
        Fill Out the Form
      </Button>
    </Container>
  </section>
);

export default JoinUs;
