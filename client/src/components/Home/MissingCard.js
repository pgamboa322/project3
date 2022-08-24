import React from "react";
import { Card, Button } from "react-bootstrap";
import Ruby from "../../assets/ruby.png";

const MissingCard = () => {
  return (
    <div>
      <div className="petDiv">
        <h3>Featured Mising Pet</h3>
        <br/>
        <Card className="cardDiv">
          <Card.Img variant="top" src={Ruby} />
          <Card.Body>
            <Card.Title>Ruby</Card.Title>
            <Card.Text>
              Ruby was last seen on October, 23 2021. She is very friendly, and
              has a black leather collar.
            </Card.Text>
            <Button variant="secondary">See Contact Info</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MissingCard;
