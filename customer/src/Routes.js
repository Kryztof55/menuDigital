import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Home from './Home';
import Details from './Details';
import Submenu from './Submenu';
import MenuEntradas from './Menus/Entradas';
import MenuEnsaladas from './Menus/Ensaladas';
import MenuAperitivos from './Menus/Aperitivos';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Details" exact component={Details} />
                    <Route path="/Submenu" exact component={Submenu} />
                    <Route
                        path="/Menus/Entradas"
                        exact
                        component={MenuEntradas}
                    />
                    <Route
                        path="/Menus/Ensaladas"
                        exact
                        component={MenuEnsaladas}
                    />
                    <Route
                        path="/Menus/Aperitivos"
                        exact
                        component={MenuAperitivos}
                    />
                    <Route
                        path="/Menus/Postres"
                        exact
                        component={MenuEnsaladas}
                    />
                </Switch>
            </Router>
        );
    }
}
