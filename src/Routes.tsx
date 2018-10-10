import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import RoutesName from './common/routes';
import Login from './components/Login/LoginController';
import Dashboard from './components/Dashboard/DashboardController';
import ForgetPassword from './components/User/ForgetPassword';
import SignUp from './components/User/SignUp';

import CompanyConfiguration from './components/Settings/Company/CompanySettingController';

export const MainRoutes = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path={RoutesName.LOGIN} component={Login} />
            <Route exact path={RoutesName.DASHBOARD} component={Dashboard} />
            <Route exact path={RoutesName.FORGET_PASSWORD} component={ForgetPassword} />
            <Route exact path={RoutesName.SIGNUP} component={SignUp} />
        </Switch>
    </React.Fragment>
);

export const InnerRoutes = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/company-configuration" component={CompanyConfiguration} />
        </Switch>
    </React.Fragment>
);