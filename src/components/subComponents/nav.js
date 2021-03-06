import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const NavBar = (props) => {

    const navigate = useNavigate();
    const activeUser = sessionStorage.getItem('activeUser');

    const Logout = () =>{
    // sessionStorage.setItem('activeUser')
    sessionStorage.clear();
    navigate('/LoginAndReg');
  }

    return (
        <>
        <Row>
            <Col className="NavItemOne" xs={2} md={1}>
                <div className="navImg"></div>
            </Col>
            <Col className="NavItemTwo" xs={{span:3, offset: 1}} md={{span:3, offset: 0}}><Link to="/">Home</Link></Col>
            <Col className="NavItem" xs={3} md={3}><Link to="/PatientPage">Patients</Link></Col>
            <Col className="NavItem" xs={3} md={3}><Link to="/DoctorsPage">Doctors</Link></Col>
            <Col className="NavItemFour" xs={{span:8, offset: 4}} md={{span:2, offset: 0}}>
                <Row>
                    <Col className="UserInfo" xs={3} md={4}>                
                        <div className="PImage bg"></div>
                    </Col>
                    <Col className="UserInfoName" xs={9} md={8}>
                        <h4>{activeUser}</h4>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col onClick={Logout} className="NavItemFive" xs={{span:4, offset: 7}} md={{span:1, offset: 10}}><p><b>Log Out</b></p></Col>
        </Row>
        </>

    );
};

export default NavBar;