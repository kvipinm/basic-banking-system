import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/_header.scss';
import '../styles/_base.scss'
import logo from '../logo.png';
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"></link>

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="Bank" className='img-logo' />
                <h1 className="text-logo">Spark's Basic Bank</h1>
            </div>
            <div className="header-content">
                <NavLink to='/' className='header-link' exact={true}>
                    <h1>Home</h1>
                </NavLink>
                <NavLink to='/about' className='header-link'>
                    <h1>About</h1>
                </NavLink>
            </div>
        </header>
    )
}
