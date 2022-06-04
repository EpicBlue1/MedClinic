import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import AppointItem from "./subComponents/AppointmentTb"

const Dash = (props) => {

    return (

        <Col className="AppTable" md={8} xs={12}>
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
            <AppointItem />
            <AppointItem />
            <AppointItem />
            <AppointItem />
            <AppointItem />
            <AppointItem />
            <AppointItem />
            <AppointItem />
            <AppointItem />
            <AppointItem />
            <AppointItem />
            <AppointItem />
            <AppointItem />
            </table>
        </div>
        </Col>

    );
};

export default Dash;