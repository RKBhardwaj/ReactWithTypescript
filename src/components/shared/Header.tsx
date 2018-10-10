import * as React from 'react';
import { connect } from 'react-redux';
import { storeProps } from '../../common/interfaces';
import { ButtonGroup, Button } from 'react-bootstrap';

import RoutesName from '../../common/routes';
import { redirectTo } from '../../common/utility';

type HeaderProps = Pick<storeProps, "userReducer">;

interface HeaderViewProps {
    validUser: boolean,
    userDetails: {
        username: string
    }
};

const HeaderView = (props: HeaderViewProps) => {
    const {
        validUser,
        userDetails
    } = props;
    const content = validUser ? ( <span>{userDetails.username}</span> ) : ( 
        <ButtonGroup>
            <Button
                className="btn btn-success"
                onClick={() => redirectTo(RoutesName.LOGIN)}
            >Login</Button>
            <Button
                className="btn btn-primary"
                onClick={() => redirectTo(RoutesName.SIGNUP)}
            >Sign Up</Button>
        </ButtonGroup> 
        );
    return (
        <header>
            <div className="logo"></div>
            <div className="header-setting">
                {content}
            </div>
        </header>
    )
};

class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            validUser: !!props.userReducer.validUser,
            userDetails: {
                username: 'RV'
            }
        }
    }

    render() {
        return (
            <HeaderView
                validUser={this.state.validUser}
                userDetails={this.state.userDetails}
            />
        )
    }
}

const mapStateToProps = (store: storeProps) : HeaderProps => {
    return {
        userReducer: store.userReducer
    }
}

export default connect(mapStateToProps)(Header);