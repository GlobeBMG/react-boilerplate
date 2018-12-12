import * as React from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';

export const Nav : React.SFC = () => (
    <div className="nav-container">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reactstateful">React stateful</Link></li>
            <li><Link to="/reduxconnected">Redux connected</Link></li>
        </ul>        
    </div>
)

export default Nav;