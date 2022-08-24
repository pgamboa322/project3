import React from "react";
import { Alert, Button } from "react-bootstrap";

const CommentFeed = () => {

    return (
        <>
        <div className="alertDiv">
            <h3>Pet Alerts in Your Area</h3>
            <br/>
            <Alert variant="info">
            MISSING: German Shepard | Lakewood
            </Alert>
            <Alert variant="secondary">
            FOUND: Anyone recognize this lab? | Ft. Worth
            </Alert>
            <Alert variant="info">
            BOLO Tabby named Toby | Oak Cliff
            </Alert>
            <Alert variant="secondary">
            FOUND: White Cat, blue collar | Oaklawn
            </Alert>
            <div>
                <h4>Found or missing a pet?</h4>
                <Button variant="secondary" href="/posts">Post Listing Here</Button>
            </div>
        </div>
        </>
    )
}

export default CommentFeed;