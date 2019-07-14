import React from 'react';
// @components
import Preview from '../../components/Preview/Preview.component';

import shop_data from '../../utils/shop_data';

class ShopPage extends React.Component {

    state = {
        collections: shop_data
    }

    render () {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({ id, ...rest }) =>
                    <Preview key={id} {...rest} />
                )}
            </div>
        )
    }
}

export default ShopPage;