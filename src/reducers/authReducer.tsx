import { FETCH_USER } from '../actions/types';
import { ActionProps, AuthProps } from '../common/interfaces';

const defaultState: AuthProps = {
    validUser: false
};

const AuthReducer = (state: {} = defaultState, action: ActionProps) => {
    switch(action.type) {
        case FETCH_USER:
            return { ...state, validUser: action.data };
        default: 
            return state;
    }
}

export default AuthReducer;