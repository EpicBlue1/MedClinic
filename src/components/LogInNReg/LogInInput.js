import React, { forwardRef, useState } from "react";

const LogInInput = forwardRef(({ ...props }, ref) => {
  return (
    <>
      <label className={props.isActive ? "hide" : "logInputLab"}>
        <h4>{props.label}</h4>
      </label>
      {props.Error}
      <input
        type={props.type}
        ref={ref}
        className={props.isActive ? "hide" : "logInput borderRad"}
      ></input>
    </>
  );
});

export default LogInInput;
