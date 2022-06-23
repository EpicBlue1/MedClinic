import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import Searchbar from './searchbar'

const ToolSec = (props) => {

    return (
        <>
        <br></br>
        <Row>
            <Col xs={12} md={3}><h2>{props.pageName}</h2></Col>
            <Col xs={12} md={6}><h2><Searchbar/></h2></Col>
            <Col xs={12} md={3}><button className="AddApp borderRad shadow"><p>{props.addButName}</p></button></Col>
        </Row>
        <hr></hr>
        <br></br>
        </>

    );
};

export default ToolSec;