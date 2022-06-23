import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const EditAppoint = (props) => {

    const [updatedPost, setupdatedPost] = useState({
        UpTime: props.originalAge,
        UpDr: props.originalNum,
        id: props.id,
      })
    
      const closeModal = () => {
        props.rerender();
      }
    
      useEffect(() => {
    
        document.getElementById("Time").value = props.originalTime;
        document.getElementById("Dr").value = props.originalDr;
    
      }, [])
    
      const AgechangeHandler = (e) => {
        let value = e.target.value;
        setupdatedPost({...updatedPost, Upage: value});
        console.log(updatedPost);
      }

      const HistchangeHandler = (e) => {
        let value = e.target.value;
        setupdatedPost({...updatedPost, UpHistory: value});
        console.log(updatedPost);
      }
    
      const updatePost = (e) => {
        e.preventDefault();
    
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
            <input className="inputUpdate" id="Time" onChange={AgechangeHandler}/>
            <label className="inputUpdate">Dr:</label>
            <input className="inputUpdate" id="Dr" onChange={HistchangeHandler}/>
            <button type='submit' className="LogButton borderRad">Done</button>
            <div onClick={deletePost} className="LogButtonRed borderRad cursor">Remove</div>
            <div onClick={closeModal} className="LogButton borderRad cursor">Close</div>
        </form>
    );
};

export default EditAppoint;