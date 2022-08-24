import React from "react";
import { Row, Col, Jumbotron, Button, Container } from "react-bootstrap";
import "./style.css";

const Banner = () => {
  return (
    <Container>
      <Row className="bannerRow">
        <Col md={3}></Col>
        <Col md={6}>
          <Jumbotron>
            <br/>
            <br/>
            <h1 className="bannerText">Welcome to Lost Paws</h1>
            <p>
              Bring your pet's safely back home. We hope you never need us!
            </p>
            <p>
            <Button variant="secondary">Learn more</Button>
            </p>
          </Jumbotron>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default Banner;
