import React from 'react';
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
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, ImgLogo } from './Header.styles';

const Header = ({ user, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <ImgLogo src={Logo} alt='LOGO' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                Shop
            </OptionLink>
            <OptionLink
                as='a'
                target='_blank'
                href='https://joshualeboeuf.dev/react_portfolio/'
                rel="noopener noreferrer"
            >
                Contact
            </OptionLink>
            {user
                ? <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                : <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropDown />}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);