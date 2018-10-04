import * as React from 'react';
import Header from '../container/Header';
import Footer from '../container/Footer';
import Content from '../container/Content';

class DashboardController extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default DashboardController;