import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const selectCollections = createSelector([selectShop], shop => shop.collections);

const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

const selectCollection = collectionUrl => createSelector(
    [selectCollections],
    collections => collections[collectionUrl]
);

export {
    selectCollections,
    selectCollectionsForPreview,
    selectCollection
}

