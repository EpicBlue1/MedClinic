import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import AppointItem from "./subComponents/AppointmentTb";
import axios from 'axios';

const Dash = (props) => {

      const [Appointment, setAppointment] = useState({
        name: '',
        Surname: '',
        timeslot: '',
        drSur: ''
      })

      const [tableItem, settableItem] = useState()
    
      const [renderApp, setRenderApp] = useState();
    
      //this useEffect will get the posts by the user
      useEffect(() =>{
        axios.post('http://localhost/MedClinic_TermTwo/readAppointments.php', Appointment)
        .then((response) =>{
    
          let data = response.data;
          console.log(data)
          let renderApp = data.map((item) => <AppointItem DrSurname={item.DrSurname} Name={item.Name} Surname={item.Surname} TimeSlot={item.Timeslot}/>);
    
          settableItem(renderApp);
          setRenderApp(false);
        })
        .catch(error =>{
          console.log(error);
        })
      }, [renderApp]);

    return (

        <Col className="AppTable" md={8} xs={12}>
        <table>
            <tr>
                <th>Name</th>
                <th>Time</th>
                <th>Dr</th>
                <th></th>
            </tr>
        </table>
        <hr></hr>
        <div className="overflow">
            <table>
                {tableItem}
            </table>
        </div>
        </Col>

    );
};

export default Dash;