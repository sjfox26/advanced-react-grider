import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers';

//ES6 destructuring
export default ({ children, initialState = {} }) => {

    const store = createStore(reducers, initialState, applyMiddleware(async, stateValidator)); //stateValidator can go before or after async

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};