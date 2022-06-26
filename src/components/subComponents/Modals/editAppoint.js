import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const EditAppoint = (props) => {

  const [AppCodes, setAppCodes] = useState([]);

  useEffect(() =>{  

    let codes = []
    axios.post('http://localhost/MedClinic_TermTwo/readAppointments.php')
    .then((response) =>{
    let data = response.data;
    //code to check for availability
    for(let i = 0; i < data.length; i++){
      let code = "Dr. " + data[i].DrSurname + data[i].Timeslot;
      codes.push(code);
    }
    })

    setAppCodes(codes);
  }, []);

    const [updatedPost, setupdatedPost] = useState({
        UpTime: props.originalTime,
        UpDr: props.originalDr,
        id: props.id,
      })

      const closeModal = () => {
        props.rerender();
      }

      const [Availability, setAvailability] = useState('Not Available');
      const [AvailabilityCode, setAvailabilityCode] = useState('Not Available');
      const [AvailabilityColor, setAvailabilityColor] = useState('#FA675C');

      const [TimeSlotOption, setTimeSlotOption] = useState();
      const [DocsOption, setDocsOption] = useState();

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

       useEffect(() => {

        let Timeslot = Timeslots.map((item) => <option value={item.Time}>{item.Time}</option>)
        setTimeSlotOption(Timeslot);

        axios.post('http://localhost/MedClinic_TermTwo/readDocs.php')
        .then((response) =>{
    
          let data = response.data;
          console.log(data);
          let renderApp = data.map((item) => <option value={item.Surname}>{item.Surname}</option>);
    
          setDocsOption(renderApp);
        })
        .catch(error =>{
          console.log(error);
        })

       }, []);
  
    
      useEffect(() => {
    
        document.getElementById("Dr").innerHTML = `<option>`+ props.originalDr +`<option/>`;
        document.getElementById("Time").innerHTML = `<option>`+ props.originalTime +`<option/>`;
    
      }, [])
    
      const AgechangeHandler = (e) => {
        let value = e.target.value;
        setupdatedPost({...updatedPost, UpTime: value});

        
        let code = "Dr." + props.originalDr + props.originalTime;
        // let compareCode = "Dr." + document.getElementById("Dr").value + document.getElementById("Time").value;

        for(let i = 0; i < AppCodes.length; i++) {
          if(AppCodes[i].Time === code){
            setAvailability("Not Available")
            break
          }
        }
      }

      const HistchangeHandler = (e) => {
        let value = e.target.value;
        console.log(value);
        setupdatedPost({...updatedPost, UpDr: value});
      }
    
      const updatePost = (e) => {
        e.preventDefault();

        console.log(AppCodes);
    
        axios.post('http://localhost/MedClinic_TermTwo/editApp.php', updatedPost)
        .then((res)=>{
          let data = res.data;
          console.log(data);
          props.upRender(true);
          props.rerender();
        })
        .catch(err=>{
          console.log(err);
        });
      }

      const deletePost = () => {
        if(window.confirm("Are you sure about that?") === true){
            
                let postId = {id: props.id};
    
                axios.post('http://localhost/MedClinic_TermTwo/deleteDoc.php', postId)
                .then((res)=>{
                  let data = res.data;
                  console.log(data);
                  //set useState in parent
                  props.upRender(true);
                })
          
            } else {
                console.log("The user did not delete")
            }
      }

    return (
        <form onSubmit={updatePost} className="UpdateApp borderRad">
            <h2>Edit {props.Time} {props.UserName} </h2>
            <label className="inputUpdate">Time:</label>
            <select className="inputUpdate" id="Time" onChange={AgechangeHandler}>
              {TimeSlotOption}
            </select>
            <label className="inputUpdate">Dr:</label>
            <select className="inputUpdate" id="Dr" onChange={HistchangeHandler}>
              {DocsOption}
            </select>
            <button type='submit' className="LogButton borderRad">Done</button>
            <div onClick={deletePost} className="LogButtonRed borderRad cursor">Remove</div>
            <div onClick={closeModal} className="LogButton borderRad cursor">Close</div>
        </form>
    );
};

export default EditAppoint;