import React from 'react';
import { useState, useEffect } from 'react';

const AppointmentItem = (props) => {


    const editPost = () => {
        console.log("Lol")
        props.editPost()
    }

    return (

            <tr id={props.uniqueId} className="PatientCard">
                <td>{props.Name} {props.Surname}</td>
                <td>{props.Time}</td>
                <td>Dr.{props.DrSurname}</td>
                <td><button onClick={editPost} className="RemoveBut borderRad"></button></td>
                <div className="Spacing"></div>
            </tr>

    );
};

export default AppointmentItem;