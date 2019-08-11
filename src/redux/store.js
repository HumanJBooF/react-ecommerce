import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export {
    store,
    persistor
};