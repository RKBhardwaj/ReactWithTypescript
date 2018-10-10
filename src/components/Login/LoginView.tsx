import * as React from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import LinkButton from '../shared/LinkButton';

const LoginView = (props: any) => {
    const {
        username,
        password,
        changeHandler,
        blurHandler,
        forgetPasswordHandler,
        signUpHandler,
        signInHandler
    } = props;

    return (
        <Grid className="main-container">
            <div className="login-container">
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h1>Login</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <FormGroup>
                            <ControlLabel>User Name</ControlLabel>
                            <FormControl
                                id="username"
                                name="username"
                                type="text"
                                defaultValue={username}
                                placeholder="User Name"
                                onChange={(e: {}) => changeHandler(e)}
                                onBlur={(e: {}) => blurHandler(e)}
                                autoComplete="off"
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                id="password"
                                name="password"
                                type="password"
                                defaultValue={password}
                                placeholder="Password"
                                onChange={(e: {}) => changeHandler(e)}
                                onBlur={(e: {}) => blurHandler(e)}
                                autoComplete="off"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Button className="btn btn-primary btn-block" onClick={() => signInHandler()}>Sign In</Button>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Button className="btn btn-success btn-block" onClick={() => signUpHandler()}>Sign Up</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <span>Forget Password ? <LinkButton buttonText="Click Here" buttonHandler={forgetPasswordHandler} /></span>
                    </Col>
                </Row>
            </div>
        </Grid>
    );
};

export default LoginView;