import * as React from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { emailValidator } from '../../common/utility';

class SignUpController extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            userDetails: {
                username: '',
                emailAddress: '',
                password: '',
                confirmPassword: ''
            },
            isDisabled: true
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);
        this.submit = this.submit.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
    }

    changeHandler(evt : any) {
        const { name, value } = evt.target;
        const { userDetails } = this.state;
        userDetails[name] = value;
        this.setState({ userDetails });
    }

    blurHandler(evt : any) {
        const { name, value } = evt.target;
        const { userDetails } = this.state;
        let isDisabled : boolean = true;
        userDetails[name] = value;
        if (name === 'emailAddress') {
            isDisabled = emailValidator(value);
        }
        this.setState({
            isDisabled
        })
    }

    submit() {

    }

    resetHandler() {
        const userDetails = {
            username: '',
            emailAddress: '',
            password: '',
            confirmPassword: ''
        }
        this.setState({ userDetails, isDisabled: true });
    }
    
    render() {
        const { userDetails } = this.state;
        return (
            <Grid className="main-container">
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        New user Registration
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <FormGroup>
                                    <ControlLabel htmlFor="username">Username</ControlLabel>
                                    <FormControl
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="off"
                                        defaultValue={userDetails.username}
                                        onChange={(evt : any) => this.changeHandler(evt)}
                                        onBlur={(evt : any) => this.blurHandler(evt)}
                                        placeholder="User Name"
                                    />
                                    <ControlLabel htmlFor="emailAddress">Email Address</ControlLabel>
                                    <FormControl
                                        id="emailAddress"
                                        name="emailAddress"
                                        type="email"
                                        autoComplete="off"
                                        defaultValue={userDetails.emailAddress}
                                        onChange={(evt : any) => this.changeHandler(evt)}
                                        onBlur={(evt : any) => this.blurHandler(evt)}
                                        placeholder="Email Address"
                                    />
                                    <ControlLabel htmlFor="password">Password</ControlLabel>
                                    <FormControl
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="off"
                                        defaultValue={userDetails.password}
                                        onChange={(evt : any) => this.changeHandler(evt)}
                                        onBlur={(evt : any) => this.blurHandler(evt)}
                                        placeholder="Password"
                                    />
                                    <ControlLabel htmlFor="confirmPassword">Confirm Password</ControlLabel>
                                    <FormControl
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        autoComplete="off"
                                        defaultValue={userDetails.confirmPassword}
                                        onChange={(evt : any) => this.changeHandler(evt)}
                                        onBlur={(evt : any) => this.blurHandler(evt)}
                                        placeholder="Confirm Password"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <Button
                                    className="btn btn-primary btn-block"
                                    disabled={this.state.isDisabled}
                                    onClick={() => this.submit()}
                                >Submit</Button>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <Button
                                    className="btn btn-danger btn-block"
                                    onClick={() => this.resetHandler()}
                                >Reset</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default SignUpController;