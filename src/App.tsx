import * as React from 'react';
import Header from './components/container/Header';
import Footer from './components/container/Footer';
import Content from './components/container/Content';
import './stylesheets/style.css';

class App extends React.Component {
    constructor(props: object) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}

export default App;