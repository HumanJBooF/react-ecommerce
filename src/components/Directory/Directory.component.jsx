import React from 'react';
import PropTypes from 'prop-types';
// @redux
import { connect } from 'react-redux';
// @reselect
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/selectors/directoy.selectors';
// @components
import MenuItem from '../Menu_item/Menu_item.component';
// @styles
import './Directory.styles.scss';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({ id, ...rest }) =>
            <MenuItem key={id} {...rest} />
        )}
    </div>
)

Directory.propTypes = {
    sections: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);