import {render} from 'react-dom';
import {createStore} from 'redux';
import App from './containers/App';
import React,{Component} from 'react';
import {Provider} from 'react-redux';
import reducer from './reducers';

const store=createStore(reducer);
 
render(
   <Provider store={store}>
   		<App />
   </Provider>,
   document.querySelector('#content')
	)