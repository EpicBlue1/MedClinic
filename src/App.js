import React, { useState, useRef, useEffect } from "react";
import {Route, Routes} from 'react-router-dom';
import './index.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Dashboard from './components/Dash';
import DoctorsPage from './components/Doctors';
import PatientPage from './components/Patients';
import LogNReg from './components/LogInNReg/LogInNReg';
import NavBar from './components/subComponents/nav';
import { useNavigate } from 'react-router-dom';

function App() {

 const navigate = useNavigate();

 const [ActiveUser, setActiveUser] = useState(sessionStorage.getItem('activeUser'));


 useEffect(() =>{
  const userSession = sessionStorage.getItem('activeUser');
  if(userSession === '' || userSession === null) {
    navigate('/LoginAndReg');
  }
}, [])

const [nav, setNav] = useState(<NavBar ActiveUser={ActiveUser}/>);

  return (
    <Container fluid>
      <Routes>
        <Route path="/" element={<Dashboard pageName = "Appointments" navBar = {nav}/>}></Route>
        <Route path="/PatientPage" element={<PatientPage pageName = "Appointments" navBar = {nav} />} ></Route>
        <Route path="/DoctorsPage" element={<DoctorsPage pageName = "Appointments" navBar = {nav} />} ></Route>
        <Route path="/LoginAndReg" element={<LogNReg pageName = "Appointments" navBar = {nav} />} ></Route>
      </Routes>
    </Container>
  );
}

export default App;
