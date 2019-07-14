import React from 'react';

import './Collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl, description }) => (
    <div className="collection-item">
        <div
            className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className='description'>{description ? description : null}</div>
        <div className="collection-item-footer">
            <div className="name">{name}</div>
            <div className="price">${price}</div>
        </div>
    </div>
);

export default CollectionItem;