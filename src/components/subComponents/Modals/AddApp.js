import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const EditAppoint = (props) => {
  const [renderApp, setrenderApp] = useState();

  const Patient = useRef();
  const Dr = useRef();
  const Time = useState();

  const [patients, setPatients] = useState();
  const [Docs, setDocs] = useState();
  const [Times, setTimes] = useState();
  const Timeslots = [
    { Time: "07:00" },
    { Time: "07:30" },
    { Time: "08:00" },
    { Time: "08:30" },
    { Time: "09:00" },
    { Time: "09:30" },
    { Time: "10:00" },
    { Time: "10:30" },
    { Time: "11:00" },
    { Time: "11:30" },
    { Time: "12:00" },
    { Time: "12:30" },
    { Time: "13:00" },
    { Time: "13:30" },
    { Time: "14:00" },
    { Time: "14:30" },
    { Time: "15:00" },
    { Time: "15:30" },
    { Time: "16:00" },
    { Time: "16:30" },
    { Time: "17:00" },
  ];

  useEffect(() => {
    axios
      .post("http://localhost/MedClinic_TermTwo/readPatients.php")
      .then((response) => {
        let data = response.data;

        let render = data.map((item) => (
          <option>
            {item.Name} {item.Surname} {item.Id}
          </option>
        ));
        setPatients(render);

        let renderTimes = Timeslots.map((item) => <option>{item.Time}</option>);
        setTimes(renderTimes);
      });
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost/MedClinic_TermTwo/readDocs.php")
      .then((response) => {
        let data = response.data;
        console.log(data);
        let render = data.map((item) => (
          <option value={item.Surname}>{item.Surname}</option>
        ));

        setDocs(render);
      });
  }, []);

  const addNewApp = (e) => {
    e.preventDefault();
    let PatientData = Patient.current.value.split(" ");

    let payload = {
      patientName: PatientData[0],
      patientSurname: PatientData[1],
      patientId: PatientData[2],
      dr: Dr.current.value,
      time: Time.current.value,
    };

    console.log(payload);
    axios
      .post("http://localhost/MedClinic_TermTwo/addApp.php", payload)
      .then((res) => {
        if (res) {
          let data = res.data;
          console.log(data);
          props.setActive(!props.Active);
          props.setUpdate(!props.Update);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const closeModal = () => {
    props.setActive(!props.Active);
  };

  return (
    <form
      onSubmit={addNewApp}
      className={props.Active ? "hide" : "AddAppTwo borderRad"}
    >
      <h2>Add Appointment</h2>
      <label className="inputUpdate">Patient:</label>
      <select ref={Patient} className="inputUpdate">
        {patients}
      </select>
      <label className="inputUpdate">Dr:</label>
      <select ref={Dr} className="inputUpdate">
        {Docs}
      </select>
      <label className="inputUpdate">Time:</label>
      <select ref={Time} className="inputUpdate">
        {Times}
      </select>
      <button type="submit" className="LogButton borderRad">
        Done
      </button>
      <div onClick={closeModal} className="LogButton borderRad cursor">
        Close
      </div>
    </form>
  );
};

export default EditAppoint;
