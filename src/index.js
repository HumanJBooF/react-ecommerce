import React from 'react';
import ReactDOM from 'react-dom';
// @redux
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
// @redux-persist
import { PersistGate } from 'redux-persist/integration/react';
// @app
import App from './App';
// @styles
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

