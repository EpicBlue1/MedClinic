import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import ErrorTopLog from '../subComponents/Modals/errorTopLog';
import ErrorTopReg from '../subComponents/Modals/errorTopReg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CrossIcons from "../../img/crossIcon.svg";
import OpenEye from '../../img/icons8-eye-96.png';
import ClosedEye from '../../img/icons8-closed-eye-96.png';
import Checked from '../../img/icons8-check-64.svg';
import Crossed from '../../img/icons8-cross-96.svg';
import ModalAddImage from '../subComponents/Modals/addPhotoModal';

const Patients = (props) => {

    const [isActive, setActive] = useState("false");
    const [openModal, setopenModal] = useState("false");


    const closeModal = () => {
        setopenModal(!openModal);
    }

    const [showHide, setshowHide] = useState("password"),
    [Icon, setIcon] = useState(ClosedEye),
    ShowHides = () => {
        if(showHide === "password") {
            setshowHide("text");
            setIcon(OpenEye);
        } else {
            setshowHide("password");
            setIcon(ClosedEye);
        }
    }

    //Register Functionality
    const navigate = useNavigate();

    //user data
    const [inputs, setInputs]= useState({
        first: '',
        last: '',
        email: '',
        age: '',
        HeadReceptionist: 'false',
        sex: '',
        contact: '',
        password: '',
        passwordCon: '',
        profileImg: '',
        rank: 1
    });

    const toggleRegister = () => {
        console.log("lol")
        setActive(!isActive);
    }

    const ModalImage = () => {
        console.log("lol")
        setopenModal(!openModal);
    }

    //error handling (error messages)
    const [firstNameError, setNameError] = useState(),
    [lastNameError, setLastError]  = useState(),
    [emailError, setEmailError] =  useState(),
    [ageError, setAgeError] = useState(),
    [sexError, setSexError] = useState(),
    [contactError, setContactError] = useState(),
    [passwordError, setPasswordError] = useState(),
    [passwordConError, setPasswordConError] = useState(),
    [imageAdded, setImageAdded] = useState(Crossed)

    //check user availability
    const [emailAvail, setEmailAvail] = useState(),
    [userAvail, setUserAvail] = useState();

    //triggers icon based on availability
    const [emailIcon, setEmailIcon] = useState(),
    [userIcon, setUserIcon] = useState();

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
            setEmailError(<ErrorTopReg message='Email is not valid'/>);
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

    const ageVal = (e) => {
        const value = String(e.target.value.trim());
        setInputs({...inputs, age: value});
        if(inputs.age !== ''){setAgeError();}
    }

    const sexValue = (e) => {
        const value = e.target.value;
        setInputs({...inputs, sex: value});
        console.log(value)
        if(inputs.sex !== ''){setSexError();}
    }

    //contact validation (onChange)
    const contactVal = (e) => {
        const contRegex = /^\d{9}$/;
        let value = e.target.value;
        console.log(value)
        setInputs({...inputs, contact: value});
        if(inputs.contact !== ''){setContactError();}
        if(!value.match(contRegex)){
            setContactError(<ErrorTopReg message='Contact Invalid'/>);
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
            setNameError(<ErrorTopReg message='Insert First name'/>)
        } else {
            setNameError()
        }

        if(inputs.last === ''){
            setLastError(<ErrorTopReg message='Insert Last Name'/>)
        } else {
            setLastError()
        }

        if(inputs.email === ''){
            setEmailError(<ErrorTopReg message='Insert Email'/>)
        } else {
            setEmailError()
        }

        if(inputs.age === ''){
            setAgeError(<ErrorTopReg message='Insert Age'/>)
        } else {
            setAgeError()
        }

        if(inputs.sex === ''){
            setSexError(<ErrorTopReg message='Select Sex'/>)
        } else {
            setSexError()
        }

        if(inputs.contact === ''){
            setContactError(<ErrorTopReg message='Type Contact Number'/>)
        } else {
            setContactError()
        }

        if(inputs.password === ''){
            setPasswordError(<ErrorTopReg message='Insert password'/>)
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
        console.log(result);

        if(result) {
            console.log("There is an error")
        } else {
            axios.post('http://localhost/MedClinic_TermTwo/registerUser.php', inputs)
            .then(function(response) {
                console.log(response);

                if(response.status === 200) {
                    sessionStorage.setItem('activeUser', inputs.email);
                    navigate("/")
                }else {
                    console.log("not working");
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
          //remember me when page refresh (local storage)
          if(response.data === true) {
            sessionStorage.setItem('activeUser', logInputs.email);
            navigate("/");
          } else {
            console.log("not working");
          }
        })
      }


    return (
        <Row className="align-items-center justify-content-center">
            <Col className={isActive ? "LogIn borderRad shadow overflow" : "LogIn LogIn-change borderRad shadow overflow"} xs={10} md={4}>
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
                        </form>
                        <form onSubmit={handleSubmit} className="row align-items-center justify-content-center">
                            <ModalAddImage setImageAdded={setImageAdded} setModalOpen={closeModal} openModal={openModal} setinputs={setInputs} inputs={inputs}/>
                            <div onClick={ModalImage} className={isActive ? 'hide' : 'ProfileButton cursor borderRad shadow'}><p><b>Add Image</b></p></div><img className={isActive ? 'hide' : 'profileImgIndc'} src={imageAdded}></img>
                            <p className={isActive ? 'hide' : 'smallPrint'} src={imageAdded}>*Optional</p>
                            {/* //email */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Email</h4></label>
                            {emailError}
                            <input onBlur={emailVal} onChange={authEmail} className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            {/* //first name */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>First Name</h4></label>
                            {firstNameError}
                            <input onChange={firstVal} className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            {/* //Last name */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Last Name</h4></label>
                            {lastNameError}
                            <input onChange={lastVal} className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            {/* //Age */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Age</h4></label>
                            {ageError}
                            <input onChange={ageVal} type="number" className={isActive ? 'hide' : 'logInput borderRad'}></input>
                            {/* //Gender */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Sex</h4></label>
                            {sexError}
                            <select onChange={sexValue} className={isActive ? 'hide' : 'logInput borderRad'}>
                                <option value='M'>Male</option>
                                <option value='F'>Female</option>
                            </select>
                            {/* //Contact */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Contact Number</h4></label>
                            {contactError}
                            <input type="number" onChange={contactVal} className={isActive ? 'hide' : 'logInput borderRad'}/>
                            {/* //Password */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Password</h4></label>
                            {passwordError}
                            <input type={showHide} onChange={passwordVal} className={isActive ? 'hide' : 'logInput borderRad'}/><div onClick={ShowHides} style={{ backgroundImage: 'url(' + Icon + ')', backgroundSize: '15px 15px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className={isActive ? 'hide' : 'icon'}></div>
                            {/* //Confirm Password */}
                            <label className={isActive ? 'hide' : 'logInputLab'}><h4>Confirm Password</h4></label>
                            {passwordConError}
                            <input type={showHide} onChange={passwordConVal} className={isActive ? 'hide' : 'logInput borderRad'}/><div onClick={ShowHides} style={{ backgroundImage: 'url(' + Icon + ')', backgroundSize: '15px 15px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className={isActive ? 'hide' : 'icon'}></div>

                            <label className={isActive ? 'hide' : 'hide'}><h4>Forgot Password?</h4></label>
                            <label onClick={toggleRegister} className={isActive ? 'hide' : 'logInputLab'}><h4>Already have an account</h4></label>
                            <button className={isActive ? 'hide' : 'LogButton borderRad shadow'}><p><b>Register</b></p></button>
                        </form>
                    </Col>
                </Row>
            </Col>
        </Row>


    );
};

export default Patients;