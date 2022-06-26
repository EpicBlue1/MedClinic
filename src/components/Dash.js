import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import UpdateSec from './UpdateSection/UpdateSec';
import AppSections from './AppointmentsSec';
import Toolbar from './subComponents/toolSec';
import { useNavigate } from 'react-router-dom';

const Dash = (props) => {

    const navigate = useNavigate();

    useEffect(() =>{
        const userSession = sessionStorage.getItem('activeUser');
        console.log(userSession);
        if(userSession === '' || userSession === null) {
          navigate('/LoginAndReg');
        }
      }, []);

    return (

        <>
            {props.navBar}
            <Toolbar addButName = "Add Appointment" pageName = "Appointments Today"/>
            <Row>
                <AppSections/>
                <Col md={1}></Col>
                <UpdateSec/>
            </Row>
        </>

    );
};

export default Dash;