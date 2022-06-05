import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";

const Patients = (props) => {

    const [formChange, setformChange] = useState("Dont have an account?");
    const [isActive, setActive] = useState("false");

    const toggleRegister = () => {
        console.log("lol")
        setActive(!isActive);
        let text = "Already have an account";
        setformChange(text);
    }


    return (
        <Row className="align-items-center justify-content-center">
            <Col className={isActive ? "LogIn borderRad shadow" : "LogIn LogIn-change borderRad shadow overflow"} xs={12} md={4}>
                <Row>
                    <Col className="LogItemOne" xs={3} md={2}>
                        <div className="navImg"></div>
                    </Col>
                    <Col className="LogItemTwo" xs={3} md={10}>
                        <h2>Log In</h2>
                    </Col>
                    <Col md={12}>
                        <br></br>
                        <form className="row align-items-center justify-content-center">
                            <label className={isActive ? 'logInputLab' : 'show hide'}><h4>Username</h4></label>
                            <input className={isActive ? 'logInput borderRad' : 'hide'}></input>
                            <label className={isActive ? 'logInputLab' : 'hide'}><h4>Password</h4></label>
                            <input className={isActive ? 'logInput borderRad' : 'hide'}></input>
                            <label className={isActive ? 'logInputLab' : 'hide'}><h4>Forgot Password?</h4></label>
                            <label onClick={toggleRegister} className={isActive ? 'logInputLab' : 'hide'}><h4>Don't have an account?</h4></label>
                            <button className={isActive ? 'LogButton borderRad shadow' : 'hide'}><p><b>Log In</b></p></button>

                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Email</h4></label>
                            <input className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Username</h4></label>
                            <input className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Number</h4></label>
                            <input className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Password</h4></label>
                            <input className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Confirm Password</h4></label>
                            <input className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            <label className={isActive ? 'hide' : 'hide'}><h4>Forgot Password?</h4></label>
                            <label onClick={toggleRegister} className={isActive ? 'hide' : 'logInputLab'}><h4>Already have an account</h4></label>
                            <button className={isActive ? 'hide' : 'LogButton borderRad shadow'}><p><b>Log In</b></p></button>
                        </form>
                    </Col>
                </Row>
            </Col>
        </Row>


    );
};

export default Patients;