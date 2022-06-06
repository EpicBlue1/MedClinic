import React from 'react'
import ErrorIcon from '../../../img/crossIcon.svg';
import { useState, useRef, useEffect } from "react";

const AlertModalLeft = (props) => {

    const [isActive, setActive] = useState(props.Active);

    useEffect(() => {
        let setting = props.Active;
        setActive(setting);

    },)

    console.log(isActive);

    return (
      <div className={isActive ? 'hide' : 'errorTop'}>
      <p className='errorElement'><b>{props.message}</b></p>
      <div className='errorElement'>
      <img className='errorSubElement' src={ErrorIcon} />
      </div>
    </div>
  )
}

export default AlertModalLeft;