import React from 'react';
import { Link } from 'react-router-dom';
// @firebase
import { auth } from '../../firebase/firebase.utils';
// @image
import Logo from '../../assets/img/logo/logo.png';
// @styles
import './Header.styles.scss';

const Header = ({ user }) => (
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
            {user
                ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                : <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header;