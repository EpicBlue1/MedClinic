import axios from "axios";
import React, { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CrossIcons from "../../img/crossIcon.svg";
import ClosedEye from "../../img/icons8-closed-eye-96.png";
import Crossed from "../../img/icons8-cross-96.svg";
import OpenEye from "../../img/icons8-eye-96.png";
import ModalAddImage from "../subComponents/Modals/addPhotoModal";
import ErrorTopLog from "../subComponents/Modals/errorTopLog";
import ErrorTopReg from "../subComponents/Modals/errorTopReg";
import LogInInput from "./LogInInput";

const Patients = () => {
  const [isActive, setActive] = useState("false");
  const [openModal, setopenModal] = useState("false");
  const [incorrect, setIncorrect] = useState();

  //Log in Refs
  const EmailLog = useRef();
  const PasswordLog = useRef();

  //Register Refs
  const EmailReg = useRef();
  const FirstName = useRef();
  const LastName = useRef();
  const Age = useRef();
  const Sex = useRef();
  const Contact = useRef();
  const Password = useRef();
  const ConPassword = useRef();

  const closeModal = () => {
    setopenModal(!openModal);
  };

  const [showHide, setshowHide] = useState("password"),
    [Icon, setIcon] = useState(ClosedEye),
    ShowHides = () => {
      if (showHide === "password") {
        setshowHide("text");
        setIcon(OpenEye);
      } else {
        setshowHide("password");
        setIcon(ClosedEye);
      }
    };

  //Register Functionality
  const navigate = useNavigate();

  const toggleRegister = () => {
    setActive(!isActive);
  };

  const ModalImage = () => {
    setopenModal(!openModal);
  };

  const [imageAdded, setImageAdded] = useState(Crossed);

  const LogInForm = () => {
    const mailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/;
  };

  //email authenticate
  const authEmail = (e) => {
    // axios
    //   .post("http://localhost/MedClinic_TermTwo/authenticateEmail.php", inputs)
    //   .then(function (response) {
    //     console.log(response);
    //     if (response.data === "Available") {
    //       //add tick
    //       setEmailIcon(CrossIcons);
    //       setEmailAvail();
    //     } else if (response.data === "Not Available") {
    //       //dont show tick
    //       setEmailIcon(CrossIcons);
    //       setEmailAvail(<ErrorTopReg message="Email is not available" />);
    //     } else if (response.data === "") {
    //       setEmailIcon();
    //       setEmailAvail();
    //       setEmailError();
    //     }
    //   });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (inputs.first === "") {
    //   setNameError(<ErrorTopReg message="Insert First name" />);
    // } else {
    //   setNameError();
    // }

    //checking if values is equal to nothing to return true or false
    let result = Object.values("").some((o) => o === "");

    // if (result) {
    //   console.log("There is an error");
    // } else {
    //   axios
    //     .post("http://localhost/MedClinic_TermTwo/registerUser.php", inputs)
    //     .then(function (response) {
    //       console.log(response);

    //       if (response.status === 200) {
    //         sessionStorage.setItem("activeUser", inputs.email);
    //         sessionStorage.setItem("name", inputs.first);
    //         navigate("/");
    //       } else {
    //         console.log("not working");
    //       }
    //     });
    // }
  };

  const handleSubmitLogin = (e) => {
    // e.preventDefault();
    // axios
    //   .post("http://localhost/MedClinic_TermTwo/userLogin.php", logInputs)
    //   .then((response) => {
    //     console.log(response.data);
    //     //remember me when page refresh (local storage)
    //     if (response.data === true) {
    //       sessionStorage.setItem("activeUser", logInputs.email);
    //       navigate("/");
    //     } else {
    //       console.log("not working");
    //       setIncorrect(<ErrorTopLog />);
    //     }
    //   });
  };

  return (
    <Row className="align-items-center justify-content-center LogInAndRegister">
      <Col
        className={
          isActive
            ? "LogIn borderRad shadow overflow"
            : "LogIn LogIn-change borderRad shadow overflow"
        }
        xs={10}
        md={4}
      >
        <Row>
          <Col className="LogItemOne" xs={3} md={2}>
            <div className="navImg"></div>
          </Col>
          <Col className="LogItemTwo" xs={3} md={10}>
            <h2 className={isActive ? "show" : "hide"}>Log In</h2>
            <h2 className={isActive ? "hide" : "show"}>Register</h2>
          </Col>
          <Col md={12}>
            <br></br>
            <form
              onSubmit={handleSubmitLogin}
              onChange={LogInForm}
              className="row align-items-center justify-content-center"
            >
              <LogInInput
                type="email"
                Error={""}
                label="Email"
                ref={EmailLog}
                isActive={true}
              />

              <LogInInput
                type="password"
                Error={""}
                label="Password"
                ref={EmailLog}
                isActive={true}
              />

              <label className={isActive ? "logInputLab" : "hide"}>
                <h4>Forgot Password?</h4>
              </label>
              <label
                onClick={toggleRegister}
                className={isActive ? "logInputLab" : "hide"}
              >
                <h4>Don't have an account?</h4>
              </label>
              <button
                className={isActive ? "LogButton borderRad shadow" : "hide"}
              >
                <p>
                  <b>Log In</b>
                </p>
              </button>
            </form>
            <form
              onSubmit={handleSubmit}
              className="row align-items-center justify-content-center"
            >
              <ModalAddImage
                setImageAdded={setImageAdded}
                setModalOpen={closeModal}
                openModal={openModal}
              />
              <di
                onClick={ModalImage}
                className={
                  isActive ? "hide" : "ProfileButton cursor borderRad shadow"
                }
              >
                <p>
                  <b>Add Image</b>
                </p>
              </di>
              <img
                className={isActive ? "hide" : "profileImgIndc"}
                src={imageAdded}
              ></img>

              {/* //email */}
              <LogInInput
                type="email"
                Error={""}
                label="Email"
                ref={EmailReg}
                isActive={isActive}
              />

              <LogInInput
                type=""
                Error={""}
                label="FirstName"
                ref={FirstName}
                isActive={isActive}
              />

              <LogInInput
                type=""
                Error={""}
                label="LastName"
                ref={LastName}
                isActive={isActive}
              />

              <LogInInput
                type="number"
                Error={""}
                label="Age"
                ref={Age}
                isActive={isActive}
              />

              <LogInInput
                type=""
                Error={""}
                label="Sex"
                ref={Sex}
                isActive={isActive}
              />

              <LogInInput
                type="number"
                Error={""}
                label="Contact"
                ref={Contact}
                isActive={isActive}
              />

              <LogInInput
                type=""
                Error={""}
                label="Password"
                ref={Password}
                isActive={isActive}
              />

              <div
                onClick={ShowHides}
                style={{
                  backgroundImage: "url(" + Icon + ")",
                  backgroundSize: "15px 15px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className={isActive ? "hide" : "icon"}
              ></div>

              {/* //Confirm Password */}
              <LogInInput
                type="Password"
                Error={""}
                label="Confirm Password"
                ref={ConPassword}
                isActive={isActive}
              />
              <div
                onClick={ShowHides}
                style={{
                  backgroundImage: "url(" + Icon + ")",
                  backgroundSize: "15px 15px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className={isActive ? "hide" : "icon"}
              ></div>

              <label className={isActive ? "hide" : "hide"}>
                <h4>Forgot Password?</h4>
              </label>
              <label
                onClick={toggleRegister}
                className={isActive ? "hide" : "logInputLab"}
              >
                <h4>Already have an account</h4>
              </label>
              <button
                className={isActive ? "hide" : "LogButton borderRad shadow"}
              >
                <p>
                  <b>Register</b>
                </p>
              </button>
            </form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Patients;
