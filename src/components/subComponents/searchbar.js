import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";

const Search = (props) => {

    return (
        <>
            <input className="Searchbar"/>
            <button className="SearchButton"><img className="SearchIcon"/></button>
        </>


    );
};

export default Search;