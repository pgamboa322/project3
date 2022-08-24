import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

const Comment = () => {
  return (
    <>
      <div className="commentFeedDiv">
        <h3>Comments</h3>
        <Card className="cardComment">
          <Card.Header>Date Posted: 8/11/22 @ 8:17 AM</Card.Header>
          <Card.Body>
            <Card.Text>
              What a sweet baby! I hope she finds her home
            </Card.Text>
          </Card.Body>
        </Card>
        <br/>
        <Card className="cardComment">
          <Card.Header>Date Posted: 8/12/22 @ 10:37 AM</Card.Header>
          <Card.Body>
            <Card.Text>
              @user851 is this Rico?
            </Card.Text>
          </Card.Body>
        </Card>
        <br/>
        <Card className="cardComment">
          <Card.Header>Date Posted: 8/13/22 @ 2:52 PM</Card.Header>
          <Card.Body>
            <Card.Text>
              @user34 I think this is Mittens! 
            </Card.Text>
          </Card.Body>
        </Card>
        <br/>
      </div>
    </>
  );
};

export default Comment;
