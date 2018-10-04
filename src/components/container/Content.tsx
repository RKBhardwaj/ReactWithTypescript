import * as React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import { storeProps } from '../../common/interfaces';

import AlertMessage from '../shared/AlertMessage';
import { InnerRoutes } from '../../Routes';

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
                <InnerRoutes />
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