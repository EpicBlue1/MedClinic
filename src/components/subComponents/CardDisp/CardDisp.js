import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import EditUser from "../Modals/editUser";

const CardDisp = (props) => {
  const [Modal, setModal] = useState();

  const activeUser = sessionStorage.getItem("Head");

  const editPost = () => {
    setModal(
      <EditUser
        ChangeType={props.ChangeType}
        UserName={props.Name + " " + props.Surname}
        Usertype={props.Usertype}
        upRender={props.rerender}
        rerender={setModal}
        originalHist={props.Attr}
        originalNum={props.phoneNum}
        originalAge={props.Age}
        id={props.uniqueId}
      />
    );
  };

  return (
    <Col id={props.uniqueId} className="CardDisp" xs={6} md={2}>
      {Modal}
      <div className="CardDispChild borderRad shadow">
        <Row>
          <Col className="editCard" md={12}>
            <img
              onClick={editPost}
              className={activeUser === "true" ? "editButton cursor" : "hide"}
            />
          </Col>
          <Col className="ProfileCard" md={12}>
            <img className="CardImg shadow" />
          </Col>
          <Col className="InfoCard" xs={12} md={12}>
            <b>
              {props.Name} {props.Surname}
            </b>
          </Col>
          <Col className="InfoCard" xs={6} md={6}>
            Age: {props.Age}
          </Col>
          <Col className="InfoCard" xs={6} md={6}>
            Sex: {props.Sex}
          </Col>
          <Col className="InfoCard overflow" xs={12} md={12}>
            {props.email}
          </Col>
          <Col className="InfoCard" xs={12} md={12}>
            {props.phoneNum}
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CardDisp;
