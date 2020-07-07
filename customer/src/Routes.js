import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Home from './Home';
import Details from './Details';
import Submenu from './Submenu';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Details" exact component={Details} />
                    <Route path="/Submenu" exact component={Submenu} />
                </Switch>
            </Router>
        );
    }
}
