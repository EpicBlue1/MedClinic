import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import Toolbar from './subComponents/toolSec';
import CardDisp from './subComponents/CardDisp/CardDisp';
import axios from 'axios';

const Patients = (props) => {

    const [PatientCard, setPatientCard] = useState({
        name: '',
        Surname: '',
        phoneNum: '',
        email: '',
        age: '',
        sex: '',
        img: ''
      })

      const [patItem, setpatCard] = useState()
    
      const [renderApp, setRenderApp] = useState();
    
      //this useEffect will get the posts by the user
      useEffect(() =>{
        axios.post('http://localhost/MedClinic_TermTwo/readPatients.php', PatientCard)
        .then((response) =>{
    
          let data = response.data;
          console.log(data)
          let renderCard = data.map((item) => <CardDisp phoneNum={item.phoneNum} Name={item.Name} Surname={item.Surname} Age={item.Age} Sex={item.Sex} email={item.email} />);
    
          setpatCard(renderCard);
          setRenderApp(false);
        })
        .catch(error =>{
          console.log(error);
        })
      }, [renderApp]);

    return (

        <>
            {props.navBar}
            <Toolbar addButName = "Add Patient" pageName = "Patients"/>
            <Row>
                {patItem}
            </Row>
        </>

    );
};

export default Patients;