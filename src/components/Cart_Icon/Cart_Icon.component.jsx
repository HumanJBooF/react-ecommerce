import React from 'react';
import PropTypes from 'prop-types';
// @redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cart.actions';
// @svg
import { ReactComponent as ShoppingIcon } from '../../assets/img/logo/shopping-bag.svg';
// @styles
import './Cart_Icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <div className='item-count'>0</div>
    </div>
)

CartIcon.propTypes = {
    toggleCartHidden: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);