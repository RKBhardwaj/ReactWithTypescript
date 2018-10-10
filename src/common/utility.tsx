// Utility file contains generic method
import history from '../store/history';

/**
 * @description validate the email address passed
 * @param email 
 */
export const emailValidator = (email : string) : boolean => {
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    return !email.match(emailPattern);
};


export const redirectTo = (route: string, state: any = {}) : void => {
    history.push(route, state);
};