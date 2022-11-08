import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardDisp from "./subComponents/CardDisp/CardDisp";
import Toolbar from "./subComponents/toolSec";

const Patients = (props) => {
  const [patItem, setpatCard] = useState();

  const [renderApp, setRenderApp] = useState();

  //this useEffect will get the posts by the user
  useEffect(() => {
    axios
      .post("http://localhost/MedClinic_TermTwo/readPatients.php")
      .then((response) => {
        let data = response.data;
        console.log(data);
        let renderCard = data.map((item) => (
          <CardDisp
            Usertype="Patient"
            ChangeType="MedHistory 2"
            rerender={setRenderApp}
            key={item.Id}
            uniqueId={item.Id}
            phoneNum={item.phoneNum}
            Name={item.Name}
            Surname={item.Surname}
            Age={item.Age}
            Sex={item.Sex}
            Attr={item.MedHistoryTwo}
            email={item.email}
          />
        ));

        setpatCard(renderCard);
        setRenderApp(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [renderApp, props.UserUpdate]);

  return (
    <>
      {props.navBar}
      <Toolbar
        PropertyTwo="Medical Aid"
        PropertyOne="Medical History"
        addButName="Add Patient"
        pageName="Patients"
      />
      <Row>{patItem}</Row>
    </>
  );
};

export default Patients;
