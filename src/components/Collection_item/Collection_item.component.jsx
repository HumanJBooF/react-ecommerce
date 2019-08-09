import React from 'react';
import PropTypes from 'prop-types';
// @redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cart.actions';
// @components
import CustomButton from '../Custom_button/Custom_button.component';
// @styles
import './Collection_item.styles.scss';


const CollectionItem = ({ item, addItem }) => {
    const currencyFormat = num => '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    const { name, description, price, imageUrl } = item;

    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='description'>
                {description ? description : null}
            </div>
            <div className="collection-item-footer">
                <div className="name">{name}</div>
                <div className="price">{currencyFormat(parseFloat(price))}</div>
            </div>
            <CustomButton
                onClick={() => addItem(item)}
                inverted
            >
                Add to Cart
            </CustomButton>
        </div>
    );
}

CollectionItem.propTypes = {
    item: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);