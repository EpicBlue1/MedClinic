import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import ErrorTopLog from './subComponents/Modals/errorTopLog';
import ErrorTopReg from './subComponents/Modals/errorTopReg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CrossIcons from '../img/crossIcon.svg'

const Patients = (props) => {

    const [isActive, setActive] = useState("false");

    const toggleRegister = () => {
        console.log("lol")
        setActive(!isActive);
    }

    //Register Functionality
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        first: '',
        last: '',
        email: '',
        username: '', 
        contact: '',
        password: '',
        passwordCon: '',
    });

    const [firstnameError, setfirstnameError] = useState();
    const [lastnameError, setlastnameError] = useState();
    const [emailError, setEmailError] = useState();
    const [usernameError, setUsernameError] = useState();
    const [contactError, setContactError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordConError, setPasswordConError] = useState();

    const [emailAvail, setEmailAvail] = useState();
    const [userAvail, setUserAvail] = useState();

    const [emailIcon, setEmailIcon] = useState();
    const [userIcon, setUserIcon] = useState();

    const firstVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, first: value});
        if(inputs.first !== ''){setfirstnameError();} 
    }

    const lastVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, first: value});
        if(inputs.first !== ''){setlastnameError();} 
    }

    const emailVal = (e) => {
        const mailcodex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const value = e.target.value;
        setInputs({...inputs, email: value});
        if(inputs.email !== ''){
            setEmailError();
        } 
        if(!value.match(mailcodex)){
            setEmailError(<ErrorTopReg message="Email is not a valid format" />);
        }    
    }

    const validateEmail = () => {
        axios.post('http://localhost/MedClinic_TermTwo/authenticateEmail.php', inputs)
        .then(function(response){
         console.log(response);
         if(response.data === "Available"){
            setEmailIcon(CrossIcons);
            setEmailAvail();
         } else if(response.data === "Not Available") {
            setEmailAvail(<ErrorTopReg message="Email Is Not Available" />);
            setEmailIcon(CrossIcons);
         } else if(response.data === "") {
            setEmailIcon();
            setEmailAvail();
            setEmailError();
         }
        });
    }

    const usernameVal = (e) => {
        const value = e.target.value.trim();
        setInputs({...inputs, username: value});
        if(inputs.username != ''){setUsernameError();} 
    }

    const validateUser = () => {
        axios.post('http://localhost/MedClinic_TermTwo/authenticateUser.php', inputs)
        .then(function(response){
         console.log(response);
         if(response.data === "Available"){
            setUserAvail();
            setUserIcon(CrossIcons);
         } else {
            setUserAvail(<ErrorTopReg message="Username Is Not Available" />);
            setUserIcon(CrossIcons);
         }
        });
    }

    const contactVal = (e) => {
        const contCodex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        const value = e.target.value;
        setInputs({...inputs, contact: value});
        if(inputs.contact != ''){setContactError();} 

        if(!value.match(contCodex)){
            setContactError(<ErrorTopReg message="Not a Valid Phone Number" />);
        } 
    }

    const passwordVal = (e) => {
        const passCodex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/ ;
        const value = e.target.value;
        setInputs({...inputs, password: value});
        if(inputs.password != ''){setPasswordError();} 

        if(!value.match(passCodex)){
            setPasswordError(<ErrorTopReg message="Password must include stuff" />);
        } 
    }

    const passwordConVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, passwordCon: value});
        if(inputs.password === value){setPasswordConError()}else{
            setPasswordConError(<ErrorTopReg message="Your Passwords Dont Match" />);
        }  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);

        if(inputs.first === ''){
            setfirstnameError(<ErrorTopReg message="Everyone has one..." />);
        } else {
            setfirstnameError();
        }

        if(inputs.last === ''){
            setlastnameError(<ErrorTopReg message="You aren't Seal... " />);
        } else {
            setlastnameError();
        }

        if(inputs.email === ''){
            setEmailError(<ErrorTopReg message="You must have an email" />);
        } else {
            setEmailError();
        }

        if(inputs.username === ''){
            setUsernameError(<ErrorTopReg message="You will login with this" />);
        } else {
            setUsernameError();
        }

        if(inputs.contact === ''){
            setContactError(<ErrorTopReg message="We will call you all the time" />);
        } else {
            setContactError();
        }

        if(inputs.password === ''){
            setPasswordError(<ErrorTopReg message="Keep it simple and easy..." />);
        } else {
            setPasswordError();
        }

        if(inputs.passwordCon === ''){
            setPasswordConError(<ErrorTopReg message="They Kinda need to match..." />);
        } else {
            setPasswordConError();
        }

        let result = Object.values(inputs).some(o => o === '');

        if(result){
            console.log('Not working');
        } else {
            axios.post('http://localhost/MedClinic_TermTwo/api/addUser.php', inputs)
            .then(function(response){
             console.log(response);

             if(response.status === 200){
                 navigate("/login");
             }

            });
        }

    }


    return (
        <Row className="align-items-center justify-content-center">
            <Col className={isActive ? "LogIn borderRad shadow overflow" : "LogIn LogIn-change borderRad shadow overflow"} xs={12} md={4}>
                <Row>
                    <Col className="LogItemOne" xs={3} md={2}>
                        <div className="navImg"></div>
                    </Col>
                    <Col className="LogItemTwo" xs={3} md={10}>
                        <h2 className={isActive ? 'show' : 'hide'}>Log In</h2>
                        <h2 className={isActive ? 'hide' : 'show'}>Register</h2>
                    </Col>
                    <Col md={12}>
                        <br></br>
                        <form onSubmit={handleSubmit} className="row align-items-center justify-content-center">
                            <label className={isActive ? 'logInputLab' : 'show hide'}><h4>Username</h4></label>
                            <ErrorTopLog Active={isActive}/>
                            <input className={isActive ? 'logInput borderRad' : 'hide'}></input>
                            <label className={isActive ? 'logInputLab' : 'hide'}><h4>Password</h4></label>
                            <input className={isActive ? 'logInput borderRad' : 'hide'}></input>
                            <label className={isActive ? 'logInputLab' : 'hide'}><h4>Forgot Password?</h4></label>
                            <label onClick={toggleRegister} className={isActive ? 'logInputLab' : 'hide'}><h4>Don't have an account?</h4></label>
                            <button className={isActive ? 'LogButton borderRad shadow' : 'hide'}><p><b>Log In</b></p></button>

                            {/* //email */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Email</h4></label>
                            {emailError}
                            <input onBlur={validateEmail} onChange={emailVal} className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            {/* //first name */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>First Name</h4></label>
                            {firstnameError}
                            <input onChange={firstVal} className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            {/* //Last name */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Last Name</h4></label>
                            {lastnameError}
                            <input onChange={lastVal} className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            {/* //Username */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Username</h4></label>
                            {usernameError}
                            <input onBlur={validateUser} onChange={usernameVal} className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            {/* //Contact */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Contact Number</h4></label>
                            {contactError}
                            <input onChange={contactVal} className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            {/* //Password */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Password</h4></label>
                            {passwordError}
                            <input onChange={passwordVal} className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            {/* //Confirm Password */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Confirm Password</h4></label>
                            {passwordConError}
                            <input onChange={passwordConVal} className={isActive ? 'hide' : 'logInput borderRad'}></input>

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