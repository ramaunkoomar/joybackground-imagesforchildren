import React from 'react';
import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Search from './containers/Search';
import Favourites from './containers/Favourites';

const Router1 = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/search/:tag'} component={Search} />
                <Route exact path={'/favourites'} component={Favourites} />
            </Switch>
            </Router>
        
    );
};
export default Router1;
