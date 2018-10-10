import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import './stylesheets/app.scss';

import App from './App';
import reducers from './reducers/index';

const store: any = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);