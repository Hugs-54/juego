import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <img src='./Logo_JueGo.png' alt='Logo Ju&Go' />
                </NavLink>
                <NavLink to="/jurassic-islas" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='left'>Jurassic Islas</li>
                </NavLink>
                <NavLink to="/dont-roll-back" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='left'>Don't Roll Back</li>
                </NavLink>
                <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='right'>Contact</li>
                </NavLink>
            </ul>
        </div >
    );
};

export default Navigation;