import React from 'react';
import PropTypes from 'prop-types';
// @redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cart.actions';
// @styles
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    NameContainer,
    PriceContainer,
    BackgroundImage
} from './Collection_item.styles';


const CollectionItem = ({ item, addItem }) => {
    const currencyFormat = num => '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    const { name, description, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <div>{description ? description : null}</div>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>
                    {currencyFormat(parseFloat(price))}
                </PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
                Add to Cart
            </AddButton>
        </CollectionItemContainer>
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