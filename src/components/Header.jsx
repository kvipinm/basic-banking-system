import React from 'react';
import { NavLink} from "react-router-dom";
import '../styles/_header.scss';
import logo from '../logo.png';

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Bank" className='header-logo'/>
            <NavLink to='/'className='header-link' exact={true}>
                <h1>Home</h1>
            </NavLink>
            <NavLink to='/about' className='header-link'>
                <h1>About</h1>
            </NavLink>
        </header>
    )
}
