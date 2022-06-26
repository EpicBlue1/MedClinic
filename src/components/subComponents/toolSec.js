import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import Searchbar from './searchbar';
import AddApp from './Modals/AddApp';

const ToolSec = (props) => {

    const [isActive, setActive] = useState("false");

    const closeModal = () => {
        setActive(!isActive);
    }

    return (
        <>
        <br></br>
        <Row>
        <AddApp setActive={setActive} Active={isActive}/>
            <Col xs={12} md={3}><h2>{props.pageName}</h2></Col>
            <Col onClick={closeModal} xs={12} md={3}><button className="AddApp borderRad shadow"><p>{props.addButName}</p></button></Col>
        </Row>
        <hr></hr>
        <br></br>
        </>

    );
};

export default ToolSec;