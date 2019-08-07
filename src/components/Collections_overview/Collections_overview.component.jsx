import React from 'react';
// @redux
import { connect } from 'react-redux';
// @reselect
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/selectors/shop.selectors';
// @components
import Preview from '../Preview/Preview.component';
// @styles
import './Collections_overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...rest }) =>
            <Preview key={id} {...rest} />
        )}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);