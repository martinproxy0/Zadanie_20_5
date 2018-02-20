import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store';
import routes from './routes';
import './country.css';
import DevTools from './store/DevTools';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory} routes={routes}/>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();