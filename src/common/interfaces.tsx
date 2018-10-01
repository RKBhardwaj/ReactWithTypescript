export interface AuthProps {
    validUser: boolean
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
    authReducer: AuthProps
};

