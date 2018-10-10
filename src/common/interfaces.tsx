export interface AuthProps {
    validUser: boolean
}

export interface UserProps {
    validUser: boolean,
    userDetails: {
        username: string
    }
}

export interface AlertProps {
    show: boolean;
    message: string;
    type: string;
};

export interface ActionProps {
    type: string,
    data: any
};

export interface storeProps {
    alertReducer: AlertProps,
    authReducer: AuthProps,
    userReducer: UserProps
};

