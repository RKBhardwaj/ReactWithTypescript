// Utility file contains generic method

/**
 * @description validate the email address passed
 * @param email 
 */
export const emailValidator = (email : string) : boolean => {
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    return !email.match(emailPattern);
};