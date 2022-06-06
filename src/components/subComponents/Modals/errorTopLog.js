import React from 'react'
import ErrorIcon from '../../../img/crossIcon.svg';
import { useState, useRef, useEffect } from "react";

const ErrorTopLog = (props) => {

    const [isActive, setActive] = useState(props.Active);

    useEffect(() => {
        let setting = props.Active;
        setActive(setting);
    },)

    console.log(isActive);

    return (
    <div className={isActive ? 'errorTop' : 'hide'}>
      <p className='errorElement'><b>Hey No!</b></p>
      <div className='errorElement'>
      <img className='errorSubElement' src={ErrorIcon} />
      </div>
    </div>
  )
}

export default ErrorTopLog;