import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import Toolbar from './subComponents/toolSec';
import CardDisp from './subComponents/CardDisp';

const Doctors = (props) => {

    return (

        <>
            {props.navBar}
            <Toolbar addButName = "Add Doctor" pageName = "Doctors"/>
            <Row>
                <CardDisp/>
                <CardDisp/>
                <CardDisp/>
                <CardDisp/>
                <CardDisp/>
                <CardDisp/>
                <CardDisp/>
                <CardDisp/>
            </Row>
        </>

    );
};

export default Doctors;