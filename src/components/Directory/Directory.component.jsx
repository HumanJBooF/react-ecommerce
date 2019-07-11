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
                {sections.map(({ title, image, id, size }) =>
                    <MenuItem
                        key={id}
                        title={title}
                        image={image}
                        size={size}
                    />
                )}
            </div>
        )
    }
}

export default Directory;