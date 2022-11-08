import React, { useEffect, useRef, useState } from "react";
import Checked from "../../../img/icons8-check-64.svg";
import Crossed from "../../../img/icons8-cross-96.svg";
import AddPhotoPlease from "./MustAddImage";

const AddPhotoModal = (props) => {
  const inputs = props.inputs;
  const setInputs = props.setinputs;

  const imageVal = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
      console.log(reader.result);
      let imgFile = reader.result;

      setInputs({ ...inputs, profileImg: imgFile });

      let image = new Image();
      image.src = reader.result;
      document.getElementById("profileimg").appendChild(image);
    };
    reader.readAsDataURL(file);

    props.setImageAdded(Checked);
  };

  const CloseNReset = () => {
    const img = document.getElementById("profileimg");
    if (img.firstElementChild !== null) {
      img.removeChild(img.firstElementChild);
    }
    props.setImageAdded(Crossed);
    props.setModalOpen();
    document.getElementById("imgInput").reset();
  };

  const addProfile = () => {
    const img = document.getElementById("profileimg");
    if (img.firstElementChild !== null) {
      props.setModalOpen();
    }
  };

  return (
    <div className={props.openModal ? "hide" : "AddProfile"}>
      <div className="imageArea borderRad">
        <h2>Upload a Profile Image</h2>
        <br></br>
        <div id="profileimg" className="profile_img"></div>
        <input
          name="imageUrl"
          className="imgInput"
          id="imgInput"
          type="file"
          onChange={imageVal}
        />
        <div onClick={addProfile} className="LogButton cursor addImageButton">
          Add Profile
        </div>
        <div onClick={CloseNReset} className="LogButton cursor  borderRad">
          Cancel
        </div>
      </div>
    </div>
  );
};

export default AddPhotoModal;
