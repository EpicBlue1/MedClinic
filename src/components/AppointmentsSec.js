import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import AppointItem from "./subComponents/AppointmentTb";
import axios from 'axios';
import EditApp from "./subComponents/Modals/editAppoint";

const Dash = (props) => {

      const [Modal, setModal] = useState();

      const editPost = () => {
        axios.post('http://localhost/MedClinic_TermTwo/readAppointments.php', Appointment)
        .then((response) =>{
          let data = response.data;
          console.log(data)
          let renderApp = data.map((item) => <EditApp Time={item.Timeslot} UserName={item.Name + " " + item.Surname} Usertype={item.Usertype} upRender={item.rerender} rerender={setModal} originalTime={item.Timeslot} originalDr={"Dr" + item.DrSurname} id={item.Id}/>);
    
          setModal(renderApp);
        })
        .catch(error =>{
          console.log(error);
        })
      }

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
          let renderApp = data.map((item) => <AppointItem editPost={editPost} uniqueId={item.Id} rerender={setRenderApp} DrSurname={item.DrSurname} Name={item.Name} Surname={item.Surname} Time={item.Timeslot}/>);
    
          settableItem(renderApp);
          setRenderApp(false);
        })
        .catch(error =>{
          console.log(error);
        })
      }, [renderApp]);

    return (

      <Col className="AppTable" md={8} xs={12}>
        {Modal}
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