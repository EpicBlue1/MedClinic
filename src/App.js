import React, { useState, useRef, useEffect } from "react";
import {Route, Routes} from 'react-router-dom';
import './index.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Dashboard from './components/Dash';
import DoctorsPage from './components/Doctors';
import PatientPage from './components/Patients';
import LogNReg from './components/LogInNReg';
import NavBar from './components/subComponents/nav';
import TimeSlotSec from './components/subComponents/timeSlotSec';
import { useNavigate } from 'react-router-dom';

function App() {

 const [nav, setNav] = useState(<NavBar/>);
//  const [toolbar, setToolbar] = useState(<Toolbar/>);
 const [TimeSec, setTimeSec] = useState(<TimeSlotSec/>);
 const navigate = useNavigate();

 useEffect(() =>{
  const userSession = sessionStorage.getItem('activeUser');
  console.log(userSession);
  if(userSession === '' || userSession === null) {
    navigate('/LoginAndReg');
  }
}, [])

  return (
    <Container fluid>
      <Routes>
        <Route path="/" element={<Dashboard pageName = "Appointments" navBar = {nav} timeSection = {TimeSec}/>}></Route>
        <Route path="/PatientPage" element={<PatientPage pageName = "Appointments" navBar = {nav} timeSection = {TimeSec} />} ></Route>
        <Route path="/DoctorsPage" element={<DoctorsPage pageName = "Appointments" navBar = {nav} timeSection = {TimeSec} />} ></Route>
        <Route path="/LoginAndReg" element={<LogNReg pageName = "Appointments" navBar = {nav} timeSection = {TimeSec} />} ></Route>
      </Routes>
    </Container>
  );
}

export default App;
