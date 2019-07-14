import React from 'react';
import { Link } from 'react-router-dom';
// @image
import Logo from '../../assets/img/logo/logo.png';
// @styles
import './Header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img src={Logo} alt='LOGO' className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
        </div>
    </div>
)

export default Header;