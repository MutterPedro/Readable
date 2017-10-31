import React from 'react';
import './NotFound.css';
import {Link} from "react-router-dom";


const NotFound = () => (
    <div className="error-404 container">
        <h1>404 Page Not Found</h1>
        <div className="center-block error-404-image" alt="page not found"/>
        <Link to='/'>Back to home</Link>
    </div>
);

export default NotFound;