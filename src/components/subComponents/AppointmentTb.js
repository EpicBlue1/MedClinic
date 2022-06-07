import React from 'react';

const AppointmentItem = (props) => {

    return (
        <>
            <tr className="PatientCard">
                <td>{props.Name} {props.Surname}</td>
                <td>{props.Timeslot}</td>
                <td>Dr.{props.DrSurname}</td>
                <td><button className="RemoveBut borderRad"></button></td>
            </tr>
            <div className="Spacing"></div>
        </>


    );
};

export default AppointmentItem;