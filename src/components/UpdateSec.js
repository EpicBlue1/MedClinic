import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import MessageObj from './subComponents/message'

const UpdateSec = (props) => {

    return (

        <Col className="UpdateSection" md={3} xs={12}>
            <Row>
                <Col className="Heading" md={12}><h2>Updates</h2></Col>
                <Col className="Messages overflow" md={12}>
                    <MessageObj/>
                    <MessageObj/>
                    <MessageObj/>
                    <MessageObj/>
                    <MessageObj/>
                    <MessageObj/>
                </Col>
                <Col className="TypeNSend" md={12}>
                    <input className="MessageIn"/>
                    <button className="SendMes">
                    </button>
                </Col>
            </Row>
        </Col>

    );
};

export default UpdateSec;