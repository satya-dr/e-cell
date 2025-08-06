
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Eureca from "../assets/images/eureca.jpeg";
import Nec from "../assets/images/nec.jpeg";

const events = [
  {
    title: "NEC  2025",
    date: "july 27, 2025",
    description:
      "A tech-based ideation competition to bring ideas into action.",
    image: Nec,
    src: "https://www.instagram.com/p/DMK5HUDS4VE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "EUREKA 2025",
    date: "Coming soon...",
    description: "Eureca is conducted by IIT B",
    image: Eureca,
    src: "#",
  },
];

const Events = () => (
  <section id="events" className="py-5 bg-light">
    <Container>
      <h2 className="text-center fw-bold mb-5" >
        Our <span className="text-primary ">Events</span>
      </h2>
      <Row>
        {events.map((event, index) => (
          <Col md={4} sm={6} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={event.image} alt={event.title} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {event.date}
                </Card.Subtitle>
                <Card.Text>{event.description}</Card.Text>
                <Button
                  variant="primary"
                  href={event.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  disabled={event.src === "#"}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Events;
