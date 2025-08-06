
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import gallery1 from '../assets/Events/1.jpeg';
import gallery2 from '../assets/Events/2.jpeg';
import gallery3 from '../assets/Events/3.jpeg';
import gallery4 from '../assets/Events/4.jpeg';
import gallery5 from '../assets/Events/5.png';


const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];


const Gallery = () => (
  <section id="gallery" className="py-5">
    <Container>
      <h2 className="text-center fw-bold mb-5">Event <span className="text-warning">Gallery</span></h2>
      <Row>
        {galleryImages.map((src, index) => (
          <Col xs={6} md={4} className="mb-4" key={index}>
            <Image
              src={src}
              alt={`Event ${index + 1}`}
              thumbnail
              fluid
               className="gallery-img rounded shadow-sm"
              style={{ height: '230px', objectFit: 'cover' }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Gallery;
