import './Header.css';

import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <div className='cardList'>
            <Link className="logo" to="/">
                <img src={ "/daydream-logo.png" } alt="Daydream logo" />
            </Link>

            {/* Page Links */}
            <div className="topnav-right">
                <Link className="tab-link" style={{ fontSize: 15}} to="/AboutUs">ABOUT</Link>
                <Link className="tab-link" style={{ fontSize: 15}} to='/Contributors'>OUR CONTRIBUTORS</Link>
                <a href={'https://www.daydreamthemag.com/'} className="tab-link" style={{ fontSize: 15}}>DAYDREAM</a>
                {/* <Link className="tab-link" style={{ fontSize: 15}} to='/Daydream'>DAYDREAM</Link> */}
                <Link className="tab-link" style={{ fontSize: 15}} to='/ContactUs'>CONTACT US</Link>
            </div> 
        </div>
    )
}

export default Header;
