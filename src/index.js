import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
// import cookie from 'react-cookies';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContainer from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';
import {store} from './redux/Store';
import {actionInitUser} from './redux/action';





const user = {
    isGuest: true
}

// console.log(store.getState());
store.dispatch(actionInitUser({user}));
// console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>
    , document.getElementById('root'));