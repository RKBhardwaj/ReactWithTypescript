import { UPDATE_ALERT } from '../actions/types';
import { ActionProps, AlertProps } from '../common/interfaces';

const defaultState: AlertProps = {
    show: false,
    message: 'Hello',
    type: 'danger'
};

const AlertReducer = (state: {} = defaultState, action: ActionProps) => {
    switch(action.type) {
        case UPDATE_ALERT:
            return { ...state, show: action.data };
        default: 
            return state;
    }
}

export default AlertReducer;