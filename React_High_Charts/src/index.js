import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

import Homepage from './components/landingpage/workSpace';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css'; 

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(<Provider store={store}>
    <Homepage />
</Provider>, document.getElementById('root'));
