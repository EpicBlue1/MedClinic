import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import Toolbar from './subComponents/toolSec';
import CardDisp from './subComponents/CardDisp';

const Patients = (props) => {

    return (

        <>
            {props.navBar}
            <Toolbar addButName = "Add Patient" pageName = "Patients"/>
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

export default Patients;