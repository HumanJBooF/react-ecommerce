import React from 'react';
import MenuItem from '../Menu_item/Menu_item.component';
import sections from '../../utils/sections';

import './Directory.styles.scss';

class Directory extends React.Component {

    state = {
        sections
    }

    render () {
        const { sections } = this.state;
        return (
            <div className="directory-menu">
                {sections.map(({ id, ...rest }) =>
                    <MenuItem key={id} {...rest} />
                )}
            </div>
        )
    }
}

export default Directory;