import * as React from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, ButtonGroup, Button } from 'react-bootstrap';
import { emailValidator } from '../../common/utility';

interface stateProps {
    emailAddress: string,
    isDisabled: boolean
}

class ForgetPassword extends React.Component<any, stateProps> {
    constructor(props: any) {
        super(props);

        this.state = {
            emailAddress: '',
            isDisabled: true
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.blurHander = this.blurHander.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(evt : any) {
        const { value }  = evt.target;
        this.setState({ emailAddress: value });
    }

    blurHander(evt : any) {
        const { value } = evt.target;
        const isDisabled : boolean = emailValidator(value);
        this.setState({ emailAddress: value, isDisabled });
    }

    submitHandler(evt : Event) {
        evt.preventDefault();
    }
    
    render() {
        return (
            <Grid className="main-container">
                <Row className="login-container">
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h3>Forget Password</h3>
                        <FormGroup>
                            <ControlLabel htmlFor="emailAddress">Email Address</ControlLabel>
                            <FormControl
                                id="emailAddress"
                                name="emailAddress"
                                type="email"
                                defaultValue={this.state.emailAddress}
                                onChange={(evt : any) => this.changeHandler(evt)}
                                onBlur={(evt : any) => this.blurHander(evt)}
                                placeholder="Email Address"
                            />
                        </FormGroup>
                        <ButtonGroup>
                            <Button
                                type="button"
                                className="btn btn-primary"
                                disabled={this.state.isDisabled}
                                onClick={(evt : any) => this.submitHandler(evt)}
                            >Submit</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default ForgetPassword;