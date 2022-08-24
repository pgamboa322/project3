import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Ruby from "../assets/ruby.png";

const Dashboard = () => {
  return (
    <>
      <br />
      <Row>
        <br />
        <h3>Your Posts and Comments</h3>
        <br />
        <br />
        <Col md={2}></Col>
        <Col md={4}>
          <Card className="cardDiv">
            <Card.Img variant="top" src={Ruby} className="image" />
            <Card.Body>
              <Card.Title>Ruby</Card.Title>
              <Card.Text>
                Ruby was last seen on October, 23 2021. She is very friendly,
                and has a black leather collar.
              </Card.Text>
              <Button variant="secondary">See Contact Info</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card className="cardComment">
            <Card.Header>Date Posted: 10/23/21 @ 10:50 AM</Card.Header>
            <Card.Body>
              <Card.Text>
                Our sweet Ruby went missing last night, sharing her post here!
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
          <Card className="cardComment">
            <Card.Header>Date Posted: 8/11/22 @ 8:17 AM</Card.Header>
            <Card.Body>
              <Card.Text>
                What a sweet baby! I hope she finds her home
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
};

export default Dashboard;
