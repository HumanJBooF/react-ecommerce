import React from 'react';
// @components
import CollectionItem from '../Collection-Item/Collection-item.component';
// @styles
import './Preview.styles.scss';

const Preview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, i) => i < 4)
                .map(({ id, ...rest }) =>
                    <CollectionItem key={id} {...rest} />
                )}
        </div>
    </div>
);

export default Preview;