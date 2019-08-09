import React from 'react';
import { withRouter } from 'react-router-dom';
// @redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cart.actions';
// @reselect
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/selectors/cart.selectors';
// @components
import CustomButtom from '../Custom_button/Custom_button.component';
import CartItem from '../Cart_item/Cart_item.component';
// @styles
import './Cart_dropdown.styles.scss';

const handleClick = (history, dispatch) => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
}

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        {console.log(cartItems)}
        <div className='cart-items'>
            {
                cartItems.length
                    ? cartItems.map(cartItem =>
                        <CartItem
                            key={cartItem.id}
                            item={cartItem}
                        />
                    )
                    : <div className='empty-message'>Your cart is empty</div>
            }
        </div>
        <CustomButtom onClick={() => handleClick(history, dispatch)}>
            GO TO CHECKOUT
        </CustomButtom>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));