import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import Toolbar from './subComponents/toolSec';
import CardDisp from './subComponents/CardDisp/CardDisp';
import axios from 'axios';

const Doctors = (props) => {

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser'),
    });

    const [posts, setPosts] = useState();

    const [renderPost, setRenderPost] = useState();
  
    useEffect(()=>{
      axios.post('http://localhost/MedClinic_TermTwo/readDoctor.php', userId)
      .then((res)=>{
        let data = res.data;
        let renderPost = data.map((item) =>  <CardDisp Usertype="Doctor" ChangeType="Specialization" key={item.Id} rerender={setRenderPost} Attr={item.specialization} email={item.specialization} phoneNum={item.phoneNum} Surname={item.Surname} Name={item.Name} uniqueId={item.Id} Sex={item.Sex} Age={item.Age}/>);
        console.log(data);
        setPosts(renderPost);
        setRenderPost(false);
      })
      .catch(err=>{
        console.log(err);
      });

   },[renderPost]);

    return (

        <>
            {props.navBar}
            <Toolbar rerender={setRenderPost} PropertyTwo="Work History (Years)" PropertyOne="Specialization"  addButName = "Add Doctor" pageName = "Doctors"/>
            <Row>
                {posts}
            </Row>
        </>

    );
};

export default Doctors;