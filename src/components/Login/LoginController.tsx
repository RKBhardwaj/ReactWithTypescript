import * as React from 'react';
import LoginView from './LoginView';

class LoginController extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e: any) {
        console.log(e.target.name);
    }

    blurHandler(e: any) {
        console.log(e.target.name);
    }

    render() {
        return (
            <LoginView
                { ...this.state }
                changeHandler={this.changeHandler}
                blurHandler={this.blurHandler}
            />
        );
    }
}

export default LoginController;