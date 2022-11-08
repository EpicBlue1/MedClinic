import React, { forwardRef, useState } from "react";

const LogInInput = forwardRef(({ ...props }, ref) => {
  return (
    <>
      <label className="logInputLab">
        <h4>{props.label}</h4>
      </label>
      {props.Error}
      <input
        type={props.type}
        ref={ref}
        className={"logInput borderRad"}
      ></input>
    </>
  );
});

export default LogInInput;
