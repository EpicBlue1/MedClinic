import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useState, useRef, useEffect } from "react";

const NavBar = () => {

    return (
        <Row>
            <Col className="NavItemOne" xs={1} md={1}>
                <div className="navImg"></div>
            </Col>
            <Col className="NavItemTwo" xs={{span:3, offset: 2}} md={{span:3, offset: 0}}>Home</Col>
            <Col className="NavItem" xs={3} md={3}>Doctors</Col>
            <Col className="NavItem" xs={3} md={3}>Bookings</Col>
            <Col className="NavItemFour" xs={{span:8, offset: 4}} md={{span:2, offset: 0}}>
                <Row>
                    <Col className="UserInfo" xs={3} md={4}>                
                        <div className="navImg bg"></div>
                    </Col>
                    <Col className="UserInfoName" xs={9} md={8}>
                        <h3>Username</h3>
                        <h4>Admin</h4>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default NavBar;