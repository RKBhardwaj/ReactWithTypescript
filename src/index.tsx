import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import './stylesheets/app.scss';

import reducers from './reducers/index';
import { MainRoutes } from './Routes';

const store: any = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainRoutes />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);