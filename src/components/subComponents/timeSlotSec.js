import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import TimeStamp from './timeStamp';

const ToolSec = (props) => {

    return (
        <>
        <Row>
            <Col xs={12} md={3}><h3>Open TimeStamps</h3></Col>
            <br></br>
            <Col md={12}>
                <TimeStamp/>
                <TimeStamp/>
                <TimeStamp/>
                <TimeStamp/>
                <TimeStamp/>
                <TimeStamp/>
                <TimeStamp/>
                <TimeStamp/>
                <TimeStamp/>
                <TimeStamp/>
                <TimeStamp/>
                <TimeStamp/>
            </Col>
            <br></br>
            <br></br>
            <br></br>
        </Row>
        </>

    );
};

export default ToolSec;