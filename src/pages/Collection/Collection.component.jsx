import React from 'react';
// @redux
import { connect } from 'react-redux';
// @reselect
import { selectCollection } from '../../redux/selectors/shop.selectors';
// @components
import CollectionItem from '../../components/Collection_item/Collection_item.component';
// @styles
import { CollectionContainer, TitleContainer, ItemsContainer } from './Collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionContainer>
            <TitleContainer>{title}</TitleContainer>
            <ItemsContainer>
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </ItemsContainer>
        </CollectionContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);