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

    //user data
    const [inputs, setInputs]= useState({
        first: '',
        last: '',
        email: '',
        username: '',
        contact: '',
        password: '',
        passwordCon: '',
    });

    //error handling (error messages)
    const [firstNameError, setNameError] = useState();
    const [lastNameError, setLastError]  = useState();
    const [emailError, setEmailError] =  useState();
    const [usernameError, setUsernameError] = useState();
    const [contactError, setContactError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordConError, setPasswordConError] = useState();

    //check user availability
    const [emailAvail, setEmailAvail] = useState();
    const [userAvail, setUserAvail] = useState();

    //triggers icon based on availability
    const [emailIcon, setEmailIcon] = useState();
    const [userIcon, setUserIcon] = useState();

    const firstVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, first: value});
        if(inputs.first !== ''){setNameError();}
    }

    const lastVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, last: value});
        if(inputs.last !== ''){setLastError();}
    }

    //email validation (onChange)
    const emailVal = (e) => {
        const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const value = e.target.value;
        setInputs({...inputs, email: value});
        if(inputs.email !== ''){setEmailError();}
        if(!value.match(mailRegex)){
            setEmailError(<ErrorTopReg message='Email is not valid format'/>);
        }
    }

    //email authenticate 
    const authEmail = (e) => {
        axios.post('http://localhost/MedClinic_TermTwo/authenticateEmail.php', inputs)
        .then(function(response) {
            console.log(response);
            if(response.data === 'Available'){
                //add tick
                setEmailIcon(CrossIcons);
                setEmailAvail();
            } else if(response.data === 'Not Available'){
                //dont show tick
                setEmailIcon(CrossIcons);
                setEmailAvail(<ErrorTopReg message='Email is not available'/>);
            } else if(response.data === ''){
                setEmailIcon();
                setEmailAvail();
                setEmailError();
            }
        })
    }

    const usernameVal = (e) => {
        const value = e.target.value.trim();
        setInputs({...inputs, username: value});
        if(inputs.username !== ''){setUsernameError();}
    }

    //username authenticate 
    const authUser = () => {
        axios.post('http://localhost/MedClinic_TermTwo/authenticateUser.php', inputs)
        .then(function(response) {
            console.log(response);
            if(response.data === 'Available'){
                //add tick
                setUserIcon(CrossIcons);
                setUserAvail();
            } else if(response.data === 'Not Available'){
                //dont show tick
                setUserIcon(CrossIcons);
                setUserAvail(<ErrorTopReg message='Username is not available'/>);
            } else if(response.data === ''){
                setUserIcon();
                setUserAvail();
                setUsernameError();
            }
        })
    }

    //contact validation (onChange)
    const contactVal = (e) => {
        const contRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        const value = e.target.value;
        setInputs({...inputs, contact: value});
        if(inputs.contact !== ''){setContactError();}
        if(!value.match(contRegex)){
            setContactError(<ErrorTopReg message='This is not a phone number'/>);
        }
    }   
    
    //password validation (onChange)
    const passwordVal = (e) => {
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/ ;
        const value = e.target.value;
        setInputs({...inputs, password: value});
        if(inputs.password !== ''){setPasswordError();}
        if(!value.match(passRegex)){
            setPasswordError(<ErrorTopReg message='Password must include X, Y, or Z characters'/>);
        }
    } 

    //password confirmation validation (onChange)
    const passwordConVal = (e) => {
        // const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/ ;
        const value = e.target.value;
        setInputs({...inputs, passwordCon: value});
        if(inputs.password=== value){
            setPasswordConError();
        } else {
            setPasswordConError(<ErrorTopReg message='Your password does not match'/>);            
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);

        if(inputs.first === ''){
            setNameError(<ErrorTopReg message='Whats your name'/>)
        } else {
            setNameError()
        }

        if(inputs.last === ''){
            setLastError(<ErrorTopReg message='Whats your last name'/>)
        } else {
            setLastError()
        }

        if(inputs.email === ''){
            setEmailError(<ErrorTopReg message='Whats your email'/>)
        } else {
            setEmailError()
        }

        if(inputs.username === ''){
            setUsernameError(<ErrorTopReg message='Whats your username'/>)
        } else {
            setUsernameError()
        }

        if(inputs.contact === ''){
            setContactError(<ErrorTopReg message='Whats your number'/>)
        } else {
            setContactError()
        }

        if(inputs.password === ''){
            setPasswordError(<ErrorTopReg message='Whats your password'/>)
        } else {
            setPasswordError()
        }

        if(inputs.passwordCon === ''){
            setPasswordConError(<ErrorTopReg message='Confirm Password'/>)
        } else {
            setPasswordConError()
        }

        //checking if values is equal to nothing to return true or false
        let result = Object.values(inputs).some(o => o === '');

        if(result) {
            console("There is an error")
        } else {
            axios.post('http://localhost/MedClinic_TermTwo/addUser.php', inputs)
            .then(function(response) {
                console.log(response);

                if(response.status === 200) {
                    navigate("/login")
                }
            })
        }
    }

    // Log In Functionality
    const [logInputs, setLogInputs] = useState({
        name: '',
        email: '',
        password: ''
      });
    
      const usernameValLogin = (e) => {
        const value = e.target.value;
        setLogInputs({...logInputs, email: value})
        // validate here (validate if empty)
      }
    
      const passwordValLogin = (e) => {
        const value = e.target.value;
        setLogInputs({...logInputs, password: value})
        //validate here ( for removing errors)
        //capslock event
      }
    
      const handleSubmitLogin = (e) => {
        e.preventDefault();
        console.log(logInputs);
        axios.post('http://localhost/MedClinic_TermTwo/userLogin.php', logInputs)
        .then((response) => {
          console.log(response.data);
          setLogInputs({...logInputs, name: response.name});
          //remember me when page refresh (local storage)
          if(response.data === true) {
            sessionStorage.setItem('activeUser', logInputs.name);
            navigate("/");
          } else {
            console.log("not working");
          }
        })
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
                        <form onSubmit={handleSubmitLogin} className="row align-items-center justify-content-center">
                            <label className={isActive ? 'logInputLab' : 'show hide'}><h4>Email</h4></label>
                            <input type="email" onChange={usernameValLogin} className={isActive ? 'logInput borderRad' : 'hide'}></input>
                            <label className={isActive ? 'logInputLab' : 'hide'}><h4>Password</h4></label>
                            <input type='password' onChange={passwordValLogin} className={isActive ? 'logInput borderRad' : 'hide'}></input>
                            <label className={isActive ? 'logInputLab' : 'hide'}><h4>Forgot Password?</h4></label>
                            <label onClick={toggleRegister} className={isActive ? 'logInputLab' : 'hide'}><h4>Don't have an account?</h4></label>
                            <button className={isActive ? 'LogButton borderRad shadow' : 'hide'}><p><b>Log In</b></p></button>

                            {/* //email */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Email</h4></label>
                            {emailError}
                            <input onBlur={authEmail} onChange={emailVal} className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            {/* //first name */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>First Name</h4></label>
                            {firstNameError}
                            <input onChange={firstVal} className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            {/* //Last name */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Last Name</h4></label>
                            {lastNameError}
                            <input onChange={lastVal} className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            {/* //Username */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Username</h4></label>
                            {usernameError}
                            <input onBlur={authUser} onChange={usernameVal} className={isActive ? 'hide' : 'logInput borderRad'}></input>
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