import { combineReducers, Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import authReducer from './authReducer';
import alertReducer from './alertReducer';

import * as actions from '../actions';

export type AppState = {
    readonly authReducer: any,
    readonly alertReducer: any
}

export type AppActions = ActionType<typeof actions>;

const rootReducer: Reducer<AppState, AppActions> = combineReducers({
    authReducer: authReducer,
    alertReducer: alertReducer
});

export default rootReducer;