import React from 'react';
import { useState, useRef, useEffect } from "react";
import axios from 'axios';

const AddUser = (props) => {

    const [renderPat, setrenderPat] = useState();


    const [addData, setAddData]= useState({
        first: '',
        last: '',
        age: '',
        gender: '',
        contact: '',
        email: '',
        PropertyOne: '',
        PropertyTwo: '',
        password: '',
    });

    let text = props.userTypes;
    let UserType = text.slice(0, -1);

    const FirstOnChange = (e) => {
        let value = e.target.value;
        setAddData({...addData, first: value});
        console.log(value);
    }
    const LastOnChange = (e) => {
        let value = e.target.value;
        setAddData({...addData, last: value});
    }
    const AgeOnChange = (e) => {
        let value = e.target.value;
        setAddData({...addData, age: value});
    }
    const SexOnChange = (e) => {
        let value = e.target.value;
        setAddData({...addData, gender: value});
        console.log(value);
    }
    const ContactOnChange = (e) => {
        let value = e.target.value;
        setAddData({...addData, contact: value});
    }
    const EmailOnChange = (e) => {
        let value = e.target.value;
        setAddData({...addData, email: value});
    }
    const PropOneOnChange = (e) => {
        let value = e.target.value;
        setAddData({...addData, PropertyOne: value});
    }
    const PropTwoOnChange = (e) => {
        let value = e.target.value;
        setAddData({...addData, PropertyTwo: value});
    }
    const PasswordTwoOnChange = (e) => {
        let value = e.target.value;
        setAddData({...addData, password: value});
    }

    let result = Object.values(addData).some(o => o === '');

    console.log(props);


    const handleSubmit = (e) => {
        console.log(addData);
        e.preventDefault();

        if(UserType === 'Patient'){
            if(result) {
                console.log("There is an error")
            } else {
                axios.post('http://localhost/MedClinic_TermTwo/addPat.php', addData)
                .then(function(response) {
                    console.log(response)
                    
                    props.setActive(!props.Active);
                    setrenderPat(true);
                    
                })
            }
        } else if (UserType === 'Doctor'){
            if(result) {
                console.log("There is an error")
            } else {
                axios.post('http://localhost/MedClinic_TermTwo/addDoc.php', addData)
                .then(function(response) {
                    console.log(response)
                    
                    props.setActive(!props.Active);
                    setrenderPat(true);
                })
            }
        }


    }

    const closeModal = () => {
        props.setActive(!props.Active);
      }

    return (
        <form onSubmit={handleSubmit} className= {props.Active ? 'hide' : 'UpdateUser borderRad'}>
            <h2>Add {UserType}</h2>
            <input onChange={FirstOnChange} className="AddInput borderRad" required id="First" placeholder="First Name"/>
            <input onChange={LastOnChange} className="AddInput borderRad" required id="Last" placeholder="Last Name"/>
            <input onChange={AgeOnChange} className="AddInput borderRad" required type='number' id="Age" placeholder="Age"/>
            <select onChange={SexOnChange} className="AddInput borderRad" required id="Gender" placeholder="Gender">
                <option>Select</option>
                <option>M</option>
                <option>F</option>
            </select>
            <input onChange={ContactOnChange} className="AddInput borderRad" required type='number' id="Contact" placeholder="Contact"/>
            <input onChange={EmailOnChange} className="AddInput borderRad" required id="Email" placeholder="Email"/>
            <input onChange={PropOneOnChange} className="AddInput borderRad"  required id="PropertyOne" placeholder={props.PropertyOne}/>
            <input onChange={PropTwoOnChange} className="AddInput borderRad" type="number" maxlength = '9' required id="PropertyTwo" placeholder={props.PropertyTwo}/>
            <input onChange={PasswordTwoOnChange} className="AddInput borderRad" required id="PropertyTwo" placeholder='Password'/>
            <button type="submit" className="AddUserButton borderRad cursor">Add</button>
            <div onClick={closeModal} className="AddUserButton borderRad cursor">Close</div>
        </form>
    )
};

export default AddUser;