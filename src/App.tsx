import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { MainRoutes } from './Routes';
import AlertMessage from './components/shared/AlertMessage';
import { storeProps } from './common/interfaces';

class App extends React.Component<any, any> {
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
                <Header />
                <AlertMessage
                    type={alert.type}
                    show={alert.show}
                    message={alert.message}
                >
                </AlertMessage>
                <BrowserRouter>
                    <MainRoutes />
                </BrowserRouter>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (store: storeProps) => {
    return {
        alertReducer: store.alertReducer
    }
}

export default connect(mapStateToProps)(App);