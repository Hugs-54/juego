import React from 'react';
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className='element'>
                    <NavLink to="/">
                        <p>Accueil</p>
                    </NavLink>

                    <NavLink to="/jurassic-islas">
                        <p>Jurassic Islas</p>
                    </NavLink>

                    <NavLink to="/dont-roll-back" >
                        <p>Don't Roll Back</p>
                    </NavLink>

                    <NavLink to="/ultime-victime" >
                        <p>Ultime Victime</p>
                    </NavLink>

                    <NavLink to="/contact">
                        <p>Contact</p>
                    </NavLink>
                </div>
                <div className='element'>
                    <a href="mailto:juego.boardgames@gmail.com">juego.boardgames@gmail.com</a>
                </div>
                <div className='element'>
                    <p className='footerText'>© 2022 Ju&Go</p>
                </div>
            </div >
        </footer>
    );
};

export default Footer;