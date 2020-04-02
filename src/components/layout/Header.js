import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './Header.css';
import lego from '../../icons/lego.png';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={lego} className="headerLogo" />
                <span className="headerTitle">Smart Shopping </span>
                <span className="headerMotto">Compare & Shop Smartly </span>
                <ul className="menu-ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                
            </div>
            
            );
    }
}

export default Header;