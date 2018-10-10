import { combineReducers, Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import authReducer from './authReducer';
import alertReducer from './alertReducer';
import userReducer from './userReducer';

import * as actions from '../actions';

export type AppState = {
    readonly authReducer: any,
    readonly alertReducer: any,
    readonly userReducer: any
}

export type AppActions = ActionType<typeof actions>;

const rootReducer: Reducer<AppState, AppActions> = combineReducers({
    authReducer: authReducer,
    alertReducer: alertReducer,
    userReducer: userReducer
});

export default rootReducer;