import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";

const AppointmentItem = (props) => {

    return (
        <>
            <tr className="PatientCard">
                <td>Alfreds Futterkiste</td>
                <td>12:00</td>
                <td>Dr.Flippie</td>
                <td><button className="RemoveBut borderRad"></button></td>
            </tr>
            <div className="Spacing"></div>
        </>


    );
};

export default AppointmentItem;