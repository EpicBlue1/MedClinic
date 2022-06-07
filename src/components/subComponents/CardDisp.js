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
                    <Col className="InfoCard" xs={12} md={12}><b>{props.Name} {props.Surname}</b></Col>
                    <Col className="InfoCard" xs={6} md={6}>Age: {props.Age}</Col>
                    <Col className="InfoCard" xs={6} md={6}>Sex: {props.Sex}</Col>
                    <Col className="InfoCard overflow" xs={12} md={12}>{props.email}</Col>
                    <Col className="InfoCard" xs={12} md={12}>{props.phoneNum}</Col>
                </Row>
            </div>
        </Col>

    );
};

export default CardDisp;