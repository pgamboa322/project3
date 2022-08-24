import React from "react";
import { Card, Button } from "react-bootstrap";
import Mittens from "../../assets/mittens.png";
import "./style.css";

const FoundCard = () => {
  return (
    <div>
      <div className="petDiv">
      <h3>Featured Mising Pet</h3>
      <br/>
        <Card className="cardDiv">
          <Card.Img variant="top" src={Mittens} />
          <Card.Body>
            <Card.Title>Mittens</Card.Title>
            <Card.Text>
              Mittens was last seen in the Kroger parking lot off of Oaklawn.
              She has a gray collar.
            </Card.Text>
            <Button variant="secondary">See Contact Info</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default FoundCard;
