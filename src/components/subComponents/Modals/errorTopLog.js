import React, { useEffect, useRef, useState } from "react";
import ErrorIcon from "../../../img/crossIcon.svg";

const ErrorTopLog = (props) => {
  return (
    <div style={{ backgroundColor: `${props.color}` }} className="errorTop">
      <p className="errorElement">
        <b>{props.error}</b>
      </p>
      <div className="errorElement"></div>
    </div>
  );
};

export default ErrorTopLog;
