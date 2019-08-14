import React from 'react';
import { withRouter } from 'react-router-dom';
// @components
import CollectionItem from '../Collection_item/Collection_item.component';
// @styles
import { CollectionPreviewContainer, TitleContainer, PreviewContainer, ViewMoreButton } from './Preview.styles'

const viewMore = (route, history) => history.push(`/shop/${route}`);

const Preview = ({ routeName, title, items, history }) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer className='preview'>
            {items
                .filter((item, i) => i < 4)
                .map(item =>
                    <CollectionItem key={item.id} item={item} />
                )
            }
            <ViewMoreButton onClick={() => viewMore(routeName, history)} />
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default withRouter(Preview);