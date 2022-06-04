import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";

const UpdateSec = (props) => {

    return (

        <Col className="UpdateSection borderRad" md={4} xs={12}>
            <Row>
                <Col className="Heading" md={12}><h2>Updates</h2></Col>
                <Col className="Messages overflow" md={12}></Col>
                <Col className="TypeNSend" md={12}></Col>
            </Row>
        </Col>

    );
};

export default UpdateSec;