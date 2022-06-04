import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";

const Dash = (props) => {

    return (

        <>
            {props.navBar}
            {props.toolBar}
        </>

    );
};

export default Dash;