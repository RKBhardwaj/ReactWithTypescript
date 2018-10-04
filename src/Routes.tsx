import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login/LoginController';
import Dashboard from './components/Dashboard/DashboardController';

import CompanyConfiguration from './components/Settings/Company/CompanySettingController';

export const MainRoutes = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
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