import React from 'react';
// @components
import CollectionItem from '../Collection_item/Collection_item.component';
// @styles
import './Preview.styles.scss';

const Preview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, i) => i < 4)
                .map(item =>
                    <CollectionItem key={item.id} item={item} />
                )
            }
        </div>
    </div>
);

export default Preview;