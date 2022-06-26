import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import MessageObj from '../subComponents/message';
import axios from 'axios';

const UpdateSec = (props) => {
    
  const [userId, setuserId] = useState({
    activeUser: sessionStorage.getItem('activeUser')
  })
  console.log(userId);
  const [post, setpost] = useState();

  const [postMessage, setpostMessage] = useState({
    message: '',
    user: sessionStorage.getItem('activeUser')
  })

  const [renderPost, setRenderPost] = useState();

  //this useEffect will get the posts by the user
  useEffect(() =>{
    axios.post('http://localhost/MedClinic_TermTwo/readUserPosts.php', userId)
    .then((response) =>{

      let data = response.data;
      console.log(data)
      let renderPost = data.map((item) => <MessageObj message={item.Message} date={item.Time} Username={item.Name}/>);

      setpost(renderPost);
      setRenderPost(false);
    })
    .catch(error =>{
      console.log(error);
    })
  }, [renderPost]);

  const postVal = (e) =>{
    let messageVal = e.target.value;
    setpostMessage({...postMessage, message: messageVal});
  }

  const addNewPost = (e) =>{
    e.preventDefault();
    document.getElementById('update').value = "";
    axios.post('http://localhost/MedClinic_TermTwo/addUpdate.php', postMessage)
    .then((response) =>{
      let data = response.data;
      console.log(data);
      setRenderPost(true);
    })
  }

    return (
        <Col className="UpdateSection" md={3} xs={12}>
            <Row>
                <Col className="Heading" md={12}><h2>Updates</h2></Col>
                <Col className="Messages overflow" md={12}>
                    {post}
                </Col>
                <Col className="TypeNSend" md={12}>
                    <input onChange={postVal} id='update' className="MessageIn"/>
                    <button onClick={addNewPost} className="SendMes">
                    </button>
                </Col>
            </Row>
        </Col>

    );
};

export default UpdateSec;