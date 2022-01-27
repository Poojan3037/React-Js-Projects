import React from 'react';
import Navbar from './Navbar';
import {Switch,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Error from './Error';
import SingleCocktail from './SingleCocktail';

const App=()=>{
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/singleCocktail/:id" component={SingleCocktail}></Route>
            <Route component={Error}></Route>
        </Switch>
        </>
    )
}

export default App;