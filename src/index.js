import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import {getCountries} from './actions/actions-countries';
import DevTools from './store/DevTools';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h1>Inicjalizacja projektu</h1>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

store.dispatch(getCountries());