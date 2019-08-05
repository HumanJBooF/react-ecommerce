import React from 'react';
import PropTypes from 'prop-types';
// @redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cart.actions';
// @reselect
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/selectors/cart.selectors';
// @svg
import { ReactComponent as ShoppingIcon } from '../../assets/img/logo/shopping-bag.svg';
// @styles
import './Cart_Icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <div className='item-count'>{itemCount}</div>
    </div>
)

CartIcon.propTypes = {
    toggleCartHidden: PropTypes.func.isRequired,
    itemCount: PropTypes.number.isRequired
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);