import * as React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import { storeProps } from '../../common/interfaces';

import AlertMessage from '../shared/AlertMessage';

class Content extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            alert: {
                type: props.alertReducer.type,
                show: props.alertReducer.show,
                message: props.alertReducer.message
            }
        }
    }

    render() {
        const {
            alert
        } = this.state;
        return (
            <React.Fragment>
                <AlertMessage
                    type={alert.type}
                    show={alert.show}
                    message={alert.message}
                >
                </AlertMessage>
                <Grid>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            Content
                        </Col>
                    </Row>
                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (store: storeProps) => {
    return {
        alertReducer: store.alertReducer
    }
}

export default connect(mapStateToProps)(Content);