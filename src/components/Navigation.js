import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <header>
            <div className="header">

                <NavLink to="/" >
                    <img className="logo" src='./Logo_JueGo.png' alt='Logo Ju&Go' />
                </NavLink>
                <NavLink to="/jurassic-islas" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <p>Jurassic Islas</p>
                </NavLink>
                <NavLink to="/ultime-victime" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <p>Ultime Victime</p>
                </NavLink>
                <NavLink to="/monster-snacks" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <p>Monster Snacks</p>
                </NavLink>
                <div className='header-right'>
                    <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <p>Contact</p>
                    </NavLink>
                </div>

            </div >

        </header>
    );
};

export default Navigation;