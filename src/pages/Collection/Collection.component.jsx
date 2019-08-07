import React from 'react';
// @redux
import { connect } from 'react-redux';
// @reselect
import { selectCollection } from '../../redux/selectors/shop.selectors';
// @components
import CollectionItem from '../../components/Collection_item/Collection_item.component';
// @styles
import './Collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);