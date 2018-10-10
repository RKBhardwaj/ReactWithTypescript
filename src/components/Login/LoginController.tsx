import * as React from 'react';
import LoginView from './LoginView';
import RoutesName from '../../common/routes';

class LoginController extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);
        this.forgetPasswordHandler = this.forgetPasswordHandler.bind(this);
        this.signUpHandler = this.signUpHandler.bind(this);
        this.signInHandler = this.signInHandler.bind(this);
    }

    changeHandler(e: any) {
        console.log(e.target.name);
    }

    blurHandler(e: any) {
        console.log(e.target.name);
    }

    forgetPasswordHandler() {
        this.props.history.push(RoutesName.FORGET_PASSWORD);
    }

    signUpHandler() {
        this.props.history.push(RoutesName.SIGNUP);
    }

    signInHandler() {
    }

    render() {
        return (
            <LoginView
                { ...this.state }
                changeHandler={this.changeHandler}
                blurHandler={this.blurHandler}
                forgetPasswordHandler={this.forgetPasswordHandler}
                signUpHandler={this.signUpHandler}
                signInHandler={this.signInHandler}
            />
        );
    }
}

export default LoginController;