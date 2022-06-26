import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const EditAppoint = (props) => {

    const [addedApp, setaddedApp] = useState({
      Patientname: '',
      DrSurname: '',
      Time: ''
    })

    const [renderApp, setrenderApp] = useState();

    const [patients, setPatients] = useState();
    const [Docs, setDocs] = useState();
    const [Times, setTimes] = useState();
    const Timeslots = [
      {Time: "07:00"},
      {Time: "07:30"},
      {Time: "08:00"},
      {Time: "08:30"},
      {Time: "09:00"},
      {Time: "09:30"},
      {Time: "10:00"},
      {Time: "10:30"},
      {Time: "11:00"},
      {Time: "11:30"},
      {Time: "12:00"},
      {Time: "12:30"},
      {Time: "13:00"},
      {Time: "13:30"},
      {Time: "14:00"},
      {Time: "14:30"},
      {Time: "15:00"},
      {Time: "15:30"},
      {Time: "16:00"},
      {Time: "16:30"},
      {Time: "17:00"}
     ]

    // const [isActive, setActive] = useState(props.Active);

    // useEffect(() => {
    //      let setting = props.Active;
    //      setActive(setting);
    // }, [])
 
    // console.log(isActive);

    useEffect(() =>{  

      axios.post('http://localhost/MedClinic_TermTwo/readPatients.php')
      .then((response) =>{
        let data = response.data;

        let render = data.map((item) => <option>{item.Name} {item.Surname}</option>);
        setPatients(render);

        let renderTimes = Timeslots.map((item) => <option>{item.Time}</option>);
        setTimes(renderTimes);
      })
    }, []);

    useEffect(() => {

        axios.post('http://localhost/MedClinic_TermTwo/readDocs.php')
        .then((response) =>{
    
          let data = response.data;
          console.log(data);
          let render = data.map((item) => <option value={item.Surname}>{item.Surname}</option>);
    
          setDocs(render);
        })

    }, []);
    
    const PatientonChange = (e) => {
        let value = e.target.value;
        setaddedApp({...addedApp, Patientname: value});
      }

      const DronChange = (e) => {
        let value = e.target.value;
        setaddedApp({...addedApp, DrSurname: value});
      }

      const TimeonChange = (e) => {
        let value = e.target.value;
        setaddedApp({...addedApp, Time: value});
      }

      const addNewApp = (e) => {
        e.preventDefault();
        axios.post('http://localhost/api_WeekSeven/addApp.php', addedApp)
         .then((res)=>{
           let data = res.data;
           console.log(data);
           props.setActive(!props.Active);
           setrenderApp(true);
         })
         .catch((err) => {
          console.log(err);
         });
      }

      const closeModal = () => {
        props.setActive(!props.Active);
      }

    return (
        <form onSubmit={addNewApp} className= {props.Active ? 'hide' : 'AddAppTwo borderRad'}>
            <h2>Add Appointment</h2>
            <label className="inputUpdate">Patient:</label>
            <select className="inputUpdate" onChange={PatientonChange}>
              {patients}
            </select>
            <label className="inputUpdate">Dr:</label>
            <select className="inputUpdate" onChange={DronChange}>
              {Docs}
            </select>
            <label className="inputUpdate">Time:</label>
            <select className="inputUpdate" onChange={TimeonChange}>
              {Times}
            </select>
            <button type='submit' className="LogButton borderRad">Done</button>
            <div onClick={closeModal} className="LogButton borderRad cursor">Close</div>
        </form>
    );
};

export default EditAppoint;