import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import Searchbar from './searchbar';
import AddApp from './Modals/AddApp';
import AddUser from './Modals/AddUser';

const ToolSec = (props) => {

    const [isActive, setActive] = useState("false");
    const [isActiveUser, setActiveUser] = useState("false");

    const closeModal = () => {
        if(props.addButName === 'Add Appointment'){
            setActive(!isActive);
        } else if (props.addButName === 'Add Patient'){
            setActiveUser(!isActiveUser);
        } else if (props.addButName === 'Add Doctor'){
            setActiveUser(!isActiveUser);

        }
    }

    return (
        <>
        <br></br>
        <Row>
        <AddUser setActive={setActiveUser} Active={isActiveUser} userTypes={props.pageName} PropertyOne={props.PropertyOne} PropertyTwo={props.PropertyTwo}/>
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