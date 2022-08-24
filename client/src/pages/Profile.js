import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const Profile = () => {
  return (
    <>
      <Row className="profileRow">
        <br/>
        <br/>
      <Col md={1}></Col>
      <Col md={6}>
      <h3>Your Profile</h3>
        <div>
          <Card className="cardComment">
          <br/>
            <Card.Title>Name: Haley Popin</Card.Title>
            <Card.Body>Email: hpopin@gmail.com</Card.Body>
            <Card.Body>Phone: 123-456-7890</Card.Body>
            <Button className="profileBtn" variant="info">Edit Profile</Button>
          </Card>
          
          </div>
        </Col>
        <Col md={4}>
          <div>
            <h3>Your Pets</h3>
            <Card className="cardComment">
            <br/>
              <Card.Title>Name: Ruby</Card.Title>
              <Card.Body>Spieces: Dog</Card.Body>
              <Card.Body>Description: Black with white chest.</Card.Body>
              <Card.Body>Date lost: 10/23/21</Card.Body>
            </Card>
          </div>
        </Col>
        <Col md={1}></Col>
      </Row>
    </>
  );
};

export default Profile;
