import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EditApp from "../subComponents/Modals/editAppoint";

const AppointmentItem = (props) => {

    const [Modal, setModal] = useState();

    const editPost = () => {  
        setModal(<EditApp Time={props.Time} codes={props.codes} UserName={props.Name + " " + props.Surname} upRender={props.rerender} rerender={setModal} originalTime={props.Time} originalDr={props.DrSurname} id={props.uniqueId}/>);
    }

    return (

        <div id={props.uniqueId} className="PatientCard">
            {Modal}
            <div className="TableFour">{props.Name} {props.Surname}</div>
            <div className="TableFour">{props.Time}</div>
            <div className="TableFour">Dr.{props.DrSurname}</div>
            <div className="TableFour"><button onClick={editPost} className="RemoveBut borderRad"></button></div>
        </div>

    );
};

export default AppointmentItem;