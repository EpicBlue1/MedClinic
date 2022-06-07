import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";

const message = (props) => {

    return (

        <div className="MessageObj shadow borderRad">
            <h4>{props.Username}</h4>
            <p>{props.message}</p>
            <h4>{props.date}</h4>
        </div>

    );
};

export default message;