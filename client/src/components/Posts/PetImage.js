import React from "react";
import { Row, Figure } from "react-bootstrap";
import Mittens from "../../assets/mittens.png"
const PetImage = () => {
  return (
    <>
      <div>
        <Row>
          <Figure>
            <Figure.Image
              width={300}
              height={300}
              alt="mittens"
              src={Mittens}
            />
          </Figure>
        </Row>
      </div>
    </>
  );
};

export default PetImage;
