import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

import Homepage from './components/homePage';
import App from './drag_drop';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(<Provider store={store} >
    <Homepage/>
</Provider>, document.getElementById('root'));

// ReactDOM.render(<App/>, document.getElementById('root'));
    