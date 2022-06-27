import React from 'react'
import ErrorIcon from '../../../img/crossIcon.svg';
import { useState, useRef, useEffect } from "react";

const ErrorTopLog = (props) => {

    // const [isActive, setActive] = useState(props.Active);

    // useEffect(() => {
    //     let setting = props.Active;
    //     setActive(setting);
    // },)

    // console.log(isActive);

    return (
    <div className='errorTop'>
      <p className='errorElement'><b>Password or Email incorrect</b></p>
      <div className='errorElement'>
      </div>
    </div>
  )
}

export default ErrorTopLog;