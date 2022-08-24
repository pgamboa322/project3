import React from "react";
import { Alert } from "react-bootstrap";

const Overview = () => {
  return (
    <Alert variant="info">
      <Alert.Heading>FOUND: Mittens</Alert.Heading>
      <p>
        Hi all, I found this cute cat the other day near my apartment complex. She seems like a sweet thing, no tags but does have a blue collar.
      </p>
      <hr />
      <h5>
        Date Found: 8/10/2022
      </h5>
      <h5>
        Sex: Female
      </h5>
      <h5>
        Location: Oaklawn, Dallas
      </h5>
      <h5>
        Contact: Kevin (123) 456-7890
      </h5>
    </Alert>
  );
};

export default Overview;
