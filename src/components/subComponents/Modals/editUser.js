import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


const EditUser = (props) => {

    const [updatedPost, setupdatedPost] = useState({
        Upage: props.originalAge,
        UpphoneNum: props.originalNum,
        UpHistory: props.originalHist,
        id: props.id,
      })
    
      const closeModal = () => {
        props.rerender();
      }
    
      useEffect(() => {

        console.log(props.originalAge);
        console.log(props.id);
    
        document.getElementById("AgeNum").value = props.originalAge;
        document.getElementById("Num").value = props.originalNum;
        document.getElementById("Hist").value = props.originalHist;
    
      }, [])
    
      const AgechangeHandler = (e) => {
        let value = e.target.value;
        setupdatedPost({...updatedPost, Upage: value});
        console.log(updatedPost);
      }

      const NumchangeHandler = (e) => {
        let value = e.target.value;
        setupdatedPost({...updatedPost, UpphoneNum: value});
        console.log(updatedPost);
      }

      const HistchangeHandler = (e) => {
        let value = e.target.value;
        setupdatedPost({...updatedPost, UpHistory: value});
        console.log(updatedPost);
      }
    
      const updatePost = (e) => {
        e.preventDefault();

        if(props.Usertype === 'Doctor'){

          axios.post('http://localhost/MedClinic_TermTwo/updateDoc.php', updatedPost)
          .then((res)=>{
            let data = res.data;
            console.log(data);
            props.upRender(true);
            props.rerender();
          })
          .catch(err=>{
            console.log(err);
          });


        } else if (props.Usertype === 'Patient') {

          axios.post('http://localhost/MedClinic_TermTwo/updatePat.php', updatedPost)
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
      }

      const deletePost = () => {
        if(window.confirm("Are you sure about that?") === true){
            if(props.Usertype === 'Doctor'){

                let postId = {id: props.id};
    
                axios.post('http://localhost/MedClinic_TermTwo/deleteDoc.php', postId)
                .then((res)=>{
                  let data = res.data;
                  console.log(data);
                  //set useState in parent
                  props.upRender(true);
                })
          
              } else if (props.Usertype === 'Patient') {

                let postId = {id: props.id};
    
                axios.post('http://localhost/MedClinic_TermTwo/deletePat.php', postId)
                .then((res)=>{
                  let data = res.data;
                  console.log(data);
                  //set useState in parent
                  props.upRender(true);
                })
              } 
            } else {
                console.log("The user did not delete")
            }
      }

    return (
        <form onSubmit={updatePost} className="UpdateUser borderRad">
            <h2>Edit {props.Usertype} {props.UserName}</h2>
            <label className="inputUpdate">Age:</label>
            <input className="inputUpdate" id="AgeNum" onChange={AgechangeHandler}/>
            <label className="inputUpdate" >Phone Number:</label>
            <input className="inputUpdate" id="Num" onChange={NumchangeHandler}/>
            <label className="inputUpdate">{props.ChangeType}:</label>
            <input className="inputUpdate" id="Hist" onChange={HistchangeHandler}/>
            <button type='submit' className="LogButton borderRad">Done</button>
            <div onClick={deletePost} className="LogButtonRed borderRad cursor">Remove</div>
            <div onClick={closeModal} className="LogButton borderRad cursor">Close</div>
        </form>
    );
};

export default EditUser;