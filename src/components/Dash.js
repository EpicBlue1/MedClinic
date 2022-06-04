import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import UpdateSec from './UpdateSec';
import AppSections from './AppointmentsSec'

const Dash = (props) => {

    return (

        <>
            {props.navBar}
            {props.toolBar}
            {props.timeSection}
            <Row>
                <AppSections/>
                <Col md={1}></Col>
                <UpdateSec/>
            </Row>
        </>

    );
};

export default Dash;