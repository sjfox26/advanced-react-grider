import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

//ES6 destructuring
export default ({ children, initialState = {} }) => {
    return (
        <Provider store={createStore(reducers, initialState)}>
            {children}
        </Provider>
    );
};