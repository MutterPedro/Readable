import React from 'react';
import './InvalidID.css';
import {Link} from "react-router-dom";

const InvalidID = () => (
    <div className="error-404 container">
        <h1>Invalid ID</h1>
        <div className="center-block error-404-image" alt="page not found"/>
        <Link to='/'>Back to home</Link>
    </div>
);

export default InvalidID;