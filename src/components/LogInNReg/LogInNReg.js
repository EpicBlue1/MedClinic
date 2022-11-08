import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Last } from "react-bootstrap/esm/PageItem";
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
  const [isActive, setActive] = useState(true);
  const [openModal, setopenModal] = useState(false);
  const [Error, setError] = useState("");

  //Log in Refs
  const EmailLog = useRef();
  const [EmailLogError, setEmailLogError] = useState();
  const PasswordLog = useRef();
  const [PasswordLogError, setPasswordLogError] = useState();

  //Register Refs
  const EmailReg = useRef();
  const [EmailRegError, setEmailRegError] = useState();
  const FirstName = useRef();
  const [FirstNameError, setFirstNameError] = useState();
  const LastName = useRef();
  const [LastNameError, setLastNameError] = useState();
  const Age = useRef();
  const [AgeError, setAgeError] = useState();
  const Sex = useRef();
  const [SexError, setSexError] = useState();
  const Contact = useRef();
  const [ContactError, setContactError] = useState();
  const Password = useRef();
  const [PasswordError, setPasswordError] = useState();
  const ConPassword = useRef();
  const [ConPasswordError, setConPasswordError] = useState();
  const [ProfileImage, setProfileImage] = useState();

  const mailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passRegex = new RegExp(
    "^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$"
  );

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

  const [imageAdded, setImageAdded] = useState(Crossed);

  const LogInForm = () => {
    if (!mailRegex.test(EmailLog.current.value)) {
      setEmailLogError(
        <ErrorTopLog color={"#FA675C"} error="Please enter a valid email" />
      );
    } else {
      setEmailLogError();
    }
    if (EmailLog.current.value === "") {
      setEmailLogError();
    }

    if (!passRegex.test(PasswordLog.current.value)) {
      setPasswordLogError(
        <ErrorTopLog
          color={"#0349C2"}
          error="Min 8 characters, 1 number, 1 uppercase and one special character"
        />
      );
    }

    if (PasswordLog.current.value === "") {
      setPasswordLogError();
    }
  };

  const RegisterForm = () => {
    if (!mailRegex.test(EmailReg.current.value)) {
      setEmailRegError(
        <ErrorTopLog color={"#FA675C"} error="Please enter a valid email" />
      );
    } else {
      setEmailRegError("");
    }

    if (EmailReg.current.value === "") {
      setEmailRegError("");
    }

    if (!passRegex.test(Password.current.value)) {
      console.log("Runnig");
      setPasswordError(
        <ErrorTopLog
          color={"#0349C2"}
          error="Min 8 characters, 1 number, 1 uppercase and one special character"
        />
      );
    } else {
      setPasswordError();
    }

    if (Password.current.value !== ConPassword.current.value) {
    }

    if (Password.current.value === "") {
      setPasswordError();
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    let payload = {
      email: EmailLog.current.value,
      password: PasswordLog.current.value,
    };

    let result = Object.values(payload).some((o) => o === "");
    console.log(result);

    axios
      .post("http://localhost/MedClinic_TermTwo/userLogin.php", payload)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        //remember me when page refresh (local storage)
        if (response.status === 200) {
          sessionStorage.setItem("activeUser", payload.email);
          sessionStorage.setItem("name", response.data[0].Name);
          sessionStorage.setItem("Head", response.data[0].HeadReceptionist);
          navigate("/");
        } else {
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let payload = {
      email: EmailReg.current.value,
      firstName: FirstName.current.value,
      lastName: LastName.current.value,
      age: Age.current.value.toString(),
      sex: Sex.current.value,
      contact: Contact.current.value,
      password: Password.current.value,
      headReceptionist: "false",
      ProfileImag: ProfileImage,
      rank: 1,
    };

    let result = Object.values(payload).some((o) => o === "");
    console.log(result);

    if (!result) {
      console.log("Not empty");
      axios
        .post(
          "http://localhost/MedClinic_TermTwo/authenticateEmail.php",
          payload
        )
        .then(function (response) {
          console.log(response);
          if (response.data === "Available") {
            axios
              .post(
                "http://localhost/MedClinic_TermTwo/registerUser.php",
                payload
              )
              .then(function (response) {
                if (response.status === 200) {
                  sessionStorage.setItem("activeUser", payload.email);
                  sessionStorage.setItem("name", payload.firstName);
                  sessionStorage.setItem("Head", payload.headReceptionist);
                  navigate("/");
                } else {
                  console.log("not working");
                }
              });
          } else if (response.data === "Not Available") {
            console.log("Not Available");
            setEmailRegError(
              <ErrorTopLog color={"#FA675C"} error="Email already exists" />
            );
          }
        });
    } else {
      setError("Please fill in all the fields");
    }
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
            <h2
              style={{ paddingTop: `15px` }}
              className={isActive ? "show" : "hide"}
            >
              Log In
            </h2>
            <h2 className={isActive ? "hide" : "show"}>Register</h2>
          </Col>
          <Col md={12}>
            <br></br>
            <form
              onSubmit={handleSubmitLogin}
              onChange={LogInForm}
              className={
                isActive
                  ? "row align-items-center justify-content-center"
                  : "hide"
              }
            >
              <LogInInput
                login={true}
                type="email"
                Error={EmailLogError}
                label="Email"
                ref={EmailLog}
              />

              <LogInInput
                login={true}
                type="password"
                Error={PasswordLogError}
                label="Password"
                ref={PasswordLog}
              />

              <label className={isActive ? "logInputLab" : "hide"}>
                <h4>Forgot Password?</h4>
              </label>
              <br />
              <br />
              <button
                className={isActive ? "LogButton borderRad shadow" : "hide"}
              >
                <p>
                  <b>Log In</b>
                </p>
              </button>
              <label
                onClick={toggleRegister}
                className={isActive ? "logInputLab" : "hide"}
              >
                <h4 className="cursor">Don't have an account?</h4>
              </label>
            </form>
            <form
              style={{ paddingBottom: `40px` }}
              onSubmit={handleSubmit}
              onChange={RegisterForm}
              className={
                !isActive
                  ? "row align-items-center justify-content-center"
                  : "hide"
              }
            >
              <ModalAddImage
                setImageAdded={setImageAdded}
                setModalOpen={closeModal}
                openModal={openModal}
                inputs={ProfileImage}
                setinputs={setProfileImage}
              />
              <di
                onClick={closeModal}
                className={
                  isActive ? "hide" : "ProfileButton cursor borderRad shadow"
                }
              >
                <p>
                  <b>Add Image</b>
                </p>
              </di>

              <img
                alt="profile"
                className={isActive ? "hide" : "profileImgIndc"}
                src={imageAdded}
              ></img>

              {/* //email */}
              <LogInInput
                type="email"
                Error={EmailRegError}
                label="Email"
                ref={EmailReg}
              />

              <LogInInput
                type=""
                Error={FirstNameError}
                label="FirstName"
                ref={FirstName}
              />

              <LogInInput
                type=""
                Error={LastNameError}
                label="LastName"
                ref={LastName}
              />

              <LogInInput
                type="number"
                Error={AgeError}
                label="Age"
                ref={Age}
              />

              <LogInInput type="" Error={SexError} label="Sex" ref={Sex} />

              <LogInInput
                type="number"
                Error={ContactError}
                label="Contact"
                ref={Contact}
              />

              <LogInInput
                type="password"
                Error={PasswordError}
                label="Password"
                ref={Password}
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
                Error={ConPasswordError}
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
                <h4 className="cursor">Forgot Password?</h4>
              </label>
              <br />
              <br />

              <br />

              <h3 style={{ color: `#FA675C`, textAlign: `center` }}>{Error}</h3>

              <button
                className={isActive ? "hide" : "LogButton borderRad shadow"}
              >
                <p>
                  <b>Register</b>
                </p>
              </button>
              <label
                onClick={toggleRegister}
                className={isActive ? "hide" : "logInputLab"}
              >
                <h4 className="cursor">Already have an account?</h4>
              </label>
            </form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Patients;
