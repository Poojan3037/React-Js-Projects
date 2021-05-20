import React from 'react';
import Treanding from './Treanding';
import Movies from './Movies';
import Web from './Web';
import Search from './Search';
import SingleMovies from './SingleMovies';
import { Route, Switch } from 'react-router-dom';

const App = () => {

    return (
        <>
            <Switch>
                <Route exact path="/" component={Treanding}></Route>
                <Route exact path="/movies" component={Movies}></Route>
                <Route exact path="/web" component={Web}></Route>
                <Route exact path="/search" component={Search}></Route>
                <Route exact path="/singlemovies/:id/:type" component={SingleMovies}></Route>
            </Switch>
        </>
    )
}

export default App;