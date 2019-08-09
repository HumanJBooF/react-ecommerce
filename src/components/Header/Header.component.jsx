import React from 'react';
import { Link } from 'react-router-dom';
// @redux
import { connect } from 'react-redux';
// @reselct
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/selectors/cart.selectors';
import { selectCurrentUser } from '../../redux/selectors/user.selectors';
// @firebase
import { auth } from '../../firebase/firebase.utils';
// @components
import CartIcon from '../Cart_Icon/Cart_Icon.component';
import CartDropDown from '../Cart_dropdown/Cart_dropdown.component';
// @image
import Logo from '../../assets/img/logo/logo.png';
// @styles
import './Header.styles.scss';

const Header = ({ user, hidden }) => (
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
            <CartIcon />
        </div>
        {hidden ? null : <CartDropDown />}
    </div>
)

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);