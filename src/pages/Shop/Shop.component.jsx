import React from 'react';
import PropTypes from 'prop-types';
// @redux
import { connect } from 'react-redux';
// @reselect
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/selectors/shop.selectors';
// @components
import Preview from '../../components/Preview/Preview.component';

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {collections.map(({ id, ...rest }) =>
            <Preview key={id} {...rest} />
        )}
    </div>
)

ShopPage.propTypes = {
    collections: PropTypes.array
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);