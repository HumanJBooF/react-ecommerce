import React from 'react';
import { withRouter } from 'react-router-dom';
// @components
import CollectionItem from '../Collection_item/Collection_item.component';
// @svg
import { ReactComponent as ViewMoreIcon } from '../../assets/img/logo/next.svg';
// @styles
import './Preview.styles.scss';

const viewMore = (route, history) => history.push(`/shop/${route}`);

const Preview = ({ routeName, title, items, history }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, i) => i < 4)
                .map(item =>
                    <CollectionItem key={item.id} item={item} />
                )
            }
            <ViewMoreIcon
                className='view-more'
                onClick={() => viewMore(routeName, history)}
            />
        </div>
    </div>
);

export default withRouter(Preview);