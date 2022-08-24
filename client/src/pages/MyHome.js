import React from "react";
import Banner from "../components/Home/Banner";
import FoundCard from "../components/Home/FoundCard";
import { Row, Col } from "react-bootstrap";
import MissingCard from "../components/Home/MissingCard";
import CommentFeed from "../components/Home/CommentFeed";

const MyHome = () => {

    return (
        <>
        <br/>
        <Banner/>
        <Row>
            {/* <Col md={2}>
            </Col> */}
            <Col md={3}>
                <FoundCard/>
            </Col>
            <Col md={3}>
                <MissingCard/>
            </Col>
            <Col md={6}>
                <CommentFeed/>
            </Col>
            {/* <Col md={2}>
            </Col> */}
        </Row>
        <br/>
        <br/>
        <br/>
        </>
    )
}

export default MyHome;