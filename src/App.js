import React, { useState, useRef } from "react";
import {Route, Routes} from 'react-router-dom';
import './index.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Dashboard from './components/Dash';
import NavBar from './components/subComponents/nav';
import Toolbar from './components/subComponents/toolSec';

function App() {

 const [nav, setNav] = useState(<NavBar/>)
 const [toolbar, setToolbar] = useState(<Toolbar/>)

  return (
    <Container fluid>
      <Routes>
        <Route path="/" element={<Dashboard navBar = {nav} toolBar = {toolbar}/>}></Route>
        <Route path="/SignIn" element={<Dashboard />} ></Route>
        <Route path="/SignUp" element={<Dashboard />} ></Route>
        <Route path="/PatientPage" element={<Dashboard />} ></Route>
        <Route path="/DoctorsPage" element={<Dashboard />} ></Route>
      </Routes>
    </Container>
  );
}

export default App;
