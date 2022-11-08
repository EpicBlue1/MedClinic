import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dash";
import DoctorsPage from "./components/Doctors";
import LogNReg from "./components/LogInNReg/LogInNReg";
import PatientPage from "./components/Patients";
import NavBar from "./components/subComponents/nav";
import "./index.scss";

function App() {
  const navigate = useNavigate();

  const [ActiveUser, setActiveUser] = useState(
    sessionStorage.getItem("activeUser")
  );

  useEffect(() => {
    const userSession = sessionStorage.getItem("activeUser");
    if (userSession === "" || userSession === null) {
      navigate("/LoginAndReg");
    }
  }, [navigate]);

  const [nav, setNav] = useState(<NavBar ActiveUser={ActiveUser} />);

  return (
    <Container fluid>
      <Routes>
        <Route
          path="/"
          element={<Dashboard pageName="Appointments" navBar={nav} />}
        ></Route>
        <Route
          path="/PatientPage"
          element={<PatientPage pageName="Appointments" navBar={nav} />}
        ></Route>
        <Route
          path="/DoctorsPage"
          element={<DoctorsPage pageName="Appointments" navBar={nav} />}
        ></Route>
        <Route
          path="/LoginAndReg"
          element={<LogNReg pageName="Appointments" navBar={nav} />}
        ></Route>
      </Routes>
    </Container>
  );
}

export default App;
