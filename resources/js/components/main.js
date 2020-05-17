import React from 'react';
import ReactDOM from 'react-dom';
import MasterForm from './MasterForm';
import cartReducer from './reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

const store = createStore(cartReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><MasterForm /></Provider>, document.getElementById('root'));
