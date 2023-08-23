import React from 'react';
import './Header.css'
import Logo from '../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={Logo}></img>
            <div>
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/inventory">inventory</a>
            <a href="/login">Log in</a>
            </div>
        </nav>
    );
};

export default Header;