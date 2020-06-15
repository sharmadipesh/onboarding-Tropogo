import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import {Routes} from 'config/Routes';
import Header from 'utils/Header';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header {...this.props}/>
                {/* <Switch>
                    <Route exact  {...this.props} path={Routes.LandingPage} component={StepOne} />
                </Switch> */}
            </div>
        );
    }
}

export default MainLayout;