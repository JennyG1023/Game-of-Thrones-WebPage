import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Books from './views/books';
import HomePage from './views/homepage';
import Houses from './views/houses';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/books' component={Books} />
                <Route exact path='/houses' component={Houses} />
            </Switch>
        )
    }
}