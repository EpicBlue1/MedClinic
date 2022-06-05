import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";

const CardDisp = (props) => {

    return (

        <Col className="CardDisp" xs={6} md={2}>
            <div className="CardDispChild borderRad shadow">
                <Row>
                    <Col className="editCard" md={12}><img className="editButton"/></Col>
                    <Col className="ProfileCard" md={12}><img className="CardImg shadow"/></Col>
                    <Col className="InfoCard" xs={12} md={12}><b>Name</b></Col>
                    <Col className="InfoCard" xs={6} md={6}>Info 1</Col>
                    <Col className="InfoCard" xs={6} md={6}>Info 1</Col>
                    <Col className="InfoCard" xs={6} md={6}>Info 1</Col>
                    <Col className="InfoCard" xs={6} md={6}>Info 1</Col>
                    <Col className="InfoCard" xs={12} md={12}>Info 1</Col>
                </Row>
            </div>
        </Col>

    );
};

export default CardDisp;