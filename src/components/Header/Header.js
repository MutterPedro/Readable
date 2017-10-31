import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top zindex1">
            <div className="container displayBlock">
                <Link className="navbar-brand" to="/">Readable</Link>
            </div>
        </nav>
    </header>
);

export default Header;