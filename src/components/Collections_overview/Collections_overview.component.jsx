import React from 'react';
// @redux
import { connect } from 'react-redux';
// @reselect
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/selectors/shop.selectors';
// @components
import Preview from '../Preview/Preview.component';
// @styles
import { CollectionsOverviewContainer } from './Collections_overview.styles';

const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {collections.map(({ id, ...rest }) =>
            <Preview key={id} {...rest} />
        )}
    </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);