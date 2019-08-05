import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// @styles
import './Menu_item.styles.scss';

const MenuItem = ({ title, image, size, history, linkUrl, match }) => (
    < div
        className={`${size ? size : ''} menu-item`}
        onClick={() => history.push(`${match.url, linkUrl}`)}
    >
        <div
            className='background-image'
            style={{ backgroundImage: `url(${image})` }}
        />
        <div className="content">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div >
);

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    size: PropTypes.string,
    history: PropTypes.object,
    linkUrl: PropTypes.string,
    match: PropTypes.object
}

export default withRouter(MenuItem);