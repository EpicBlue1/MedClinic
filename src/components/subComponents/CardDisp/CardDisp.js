import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import EditUser from '../editUser';

const CardDisp = (props) => {

    const [Modal, setModal] = useState();

    const editPost = () => {
      setModal(<EditUser ChangeType={props.ChangeType} UserName={props.Name + " " + props.Surname} Usertype={props.Usertype} upRender={props.rerender} rerender={setModal} originalHist={props.Attr} originalNum={props.phoneNum} originalAge={props.Age} id={props.uniqueId}/>)
    }

    return (

        <Col id={props.uniqueId} className="CardDisp" xs={6} md={2}>
            {Modal}
            <div className="CardDispChild borderRad shadow">
                <Row>
                    <Col className="editCard" md={12}><img onClick={editPost} className="editButton cursor"/></Col>
                    <Col className="ProfileCard" md={12}><img className="CardImg shadow"/></Col>
                    <Col className="InfoCard" xs={12} md={12}><b>{props.Name} {props.Surname}</b></Col>
                    <Col className="InfoCard" xs={6} md={6}>Age: {props.Age}</Col>
                    <Col className="InfoCard" xs={6} md={6}>Sex: {props.Sex}</Col>
                    <Col className="InfoCard overflow" xs={12} md={12}>{props.email}</Col>
                    <Col className="InfoCard" xs={12} md={12}>{props.phoneNum}</Col>
                </Row>
            </div>
        </Col>

    );
};

export default CardDisp;