import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import AppointItem from "./subComponents/AppointmentTb";
import axios from 'axios';

const Dash = () => {

      const [tableItem, settableItem] = useState()
    
      const [renderApp, setRenderApp] = useState();
    
      // this useEffect will get the posts by the user
      useEffect(() =>{
        axios.post('http://localhost/MedClinic_TermTwo/readAppointments.php')
        .then((response) =>{    
    
        let data = response.data;
        console.log(data)
        let renderApp = data.map((item) => <AppointItem uniqueId={item.Id} rerender={setRenderApp} DrSurname={item.DrSurname} Name={item.Name} Surname={item.Surname} Time={item.Timeslot}/>);

        settableItem(renderApp);
        setRenderApp(false);
        })
        .catch(error =>{
          console.log(error);
        })
      }, [renderApp]);

    return (

      <Col className="AppTable" md={8} xs={12}>
        <div>
            <div className="TableFour">Name</div>
            <div className="TableFour">Time</div>
            <div className="TableFour">Dr</div>
            <div className="TableFour"></div>
        </div>
      <hr></hr>
      <hr></hr>
        <div className="overflow">
            {tableItem}
        </div>
      </Col>

    );
};

export default Dash;