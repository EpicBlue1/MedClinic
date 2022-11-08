import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AppSections from "./AppointmentsSec";
import Toolbar from "./subComponents/toolSec";
import UpdateSec from "./UpdateSection/UpdateSec";

const Dash = (props) => {
  const navigate = useNavigate();

  const [Update, setUpdate] = useState();

  useEffect(() => {
    const userSession = sessionStorage.getItem("activeUser");
    console.log(userSession);
    if (userSession === "" || userSession === null) {
      navigate("/LoginAndReg");
    }
  }, []);

  return (
    <>
      {props.navBar}
      <Toolbar
        Update={Update}
        setUpdate={setUpdate}
        addButName="Add Appointment"
        pageName="Appointments Today"
      />
      <Row>
        <AppSections Update={Update} setUpdate={setUpdate} />
        <Col md={1}></Col>
        <UpdateSec />
      </Row>
    </>
  );
};

export default Dash;
