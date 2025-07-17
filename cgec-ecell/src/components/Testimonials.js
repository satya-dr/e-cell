// File: src/components/Testimonials.js
import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

const testimonials = [
  {
    quote: "Being a part of CGEC ECELL helped me turn my ideas into reality. The support and environment were amazing.",
    name: "Amit Roy",
    position: "Alumnus, Batch of 2022"
  },
  {
    quote: "The workshops and networking events organized by ECELL helped me build industry connections early.",
    name: "Sneha Das",
    position: "Core Member, Batch of 2023"
  },
  {
    quote: "ECELL taught me how to pitch, build, and lead. It was the most transformative part of my college life.",
    name: "Ritwik Ghosh",
    position: "Ex-President, Batch of 2021"
  }
];

const Testimonials = () => (
  <section id="testimonials" className="py-5 bg-light">
    <Container>
      <h2 className="text-center fw-bold mb-5">What Our <span className="text-primary">Members Say</span></h2>
      <Carousel indicators={false} controls={true} fade>
        {testimonials.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="text-center px-4 py-5">
              <blockquote className="blockquote">
                <p className="mb-4 fs-5">“{item.quote}”</p>
                <footer className="blockquote-footer">
                  {item.name}, <cite title="Source Title">{item.position}</cite>
                </footer>
              </blockquote>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  </section>
);

export default Testimonials;
