import * as React from 'react';
import { connect } from 'react-redux';
import { storeProps } from '../../common/interfaces';

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
    const content = validUser ? ( <span>{userDetails.username}</span> ) : ( <span>Not Valid</span> );
    return (
        <header>
            <div className="logo"><h1>LOGO</h1></div>
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