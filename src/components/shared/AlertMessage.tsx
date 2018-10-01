import * as React from 'react';
import { Alert, Button } from 'react-bootstrap';

import { AlertProps } from '../../common/interfaces';

class AlertMessage extends React.Component<AlertProps, any> {
    constructor(props: AlertProps) {
        super(props);

        this.state = {
            show: props.show,
            type: props.type,
            message: props.message
        };
        this.handleDismiss = this.handleDismiss.bind(this);
    }

    handleDismiss() {
        this.setState({ show: false });
      }

    render() {
        if (this.state.show) {
            return (
                <Alert bsStyle={this.state.type} onDismiss={this.handleDismiss}>
                    <h4>{this.state.message}</h4>
                </Alert>
            );
        }
        return '';
    }
}

export default AlertMessage;