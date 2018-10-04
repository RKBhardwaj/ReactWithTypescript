import * as React from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, ButtonGroup } from 'react-bootstrap';

import Footer from '../container/Footer';

const LoginView = (props: any) => {
    const {
        username,
        password,
        changeHandler,
        blurHandler
    } = props;

    return (
        <React.Fragment>
            <Grid>
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
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <ButtonGroup>
                            <Button className="btn btn-primary btn-large">Sign In</Button>
                            <Button className="btn btn-success btn-large">Sign Up</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <span>Forget Password ? <Button className="btn-link">Click Her</Button></span>
                    </Col>
                </Row>
            </Grid>
            <Footer />
        </React.Fragment>
    );
};

export default LoginView;