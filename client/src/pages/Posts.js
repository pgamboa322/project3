import React from "react";
import { Row, Col } from "react-bootstrap";
import Overview from "../components/Posts/Overview";
import PetImage from "../components/Posts/PetImage";
import Comment from "../components/Posts/Comment";

const Posts = () => {

    return (
        <>
        <br/>
        <Row>
            <Col md={2}></Col>
            <Col md={4}>
                <PetImage/>
            </Col>
            <Col md={4}>
                <Overview/>
            </Col>
            
            <Col md={2}></Col>
        </Row>
        <Row>
            <Comment/>
        </Row>
        </>
    )
}

export default Posts;