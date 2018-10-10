import * as types from '../actions/types';
import { ActionProps, UserProps } from '../common/interfaces';

const defaultState: UserProps = {
    validUser: false,
    userDetails: {
        username: ''
    }
};

const userReducer = (state: {} = defaultState, action: ActionProps) => {
    switch (action.type) {
        case types.VALID_USER:
            return { ...state, validUser: action.data };
        default: 
            return state;
    } 
}

export default userReducer;