import React from 'react';
import routesConfig from './config';
import routesAll from '../routes';
import { Route, Redirect, Switch } from 'react-router-dom';

export default class SRoute extends React.Component{
    render () {
        return (
            <Switch>
                {
                    routesConfig.map(r => {
                        const route = r => {
                            const Component = routesAll[r.component];
                            return (
                                <Route
                                    key={r.key}
                                    exact
                                    path={r.key}
                                    component={Component}
                                />
                            );
                        }
                        return r.component ? route(r) : r.children.map(r => route(r));
                    })
                }
                {/* <Route render={() => <Redirect to="/404" />} /> */}
            </Switch>
        );
    }
}