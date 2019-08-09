import React from 'react';
import { withRouter } from 'react-router-dom';
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
)

export default withRouter(MenuItem);