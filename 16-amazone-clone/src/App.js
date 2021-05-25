import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { Switch, Route } from 'react-router-dom';
import Signin from './Signin';
import firebase from './firebase';
import Payment from './Payment';
import {AppContext} from './context';
import PlaceOrder from './PlaceOrder';
import Order from './Order';


const App = () => {

    let {getUser}=useContext(AppContext);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            getUser(user);
        })
    },[])

    return (
        <>
            <Switch>
                <Route exact path='/signin'>
                    <Signin/>
                </Route>
                <Route exact path='/'>
                    <Header/>
                    <Home />
                </Route>
                <Route exact path="/checkout">
                    <Header/>
                    <Checkout/>
                </Route>
                <Route exact path="/payment">
                    <Header />
                    <Payment/>
                </Route>
                <Route exact path="/placeorder">
                    <Header/>
                    <PlaceOrder/>
                </Route>
                <Route exact path="/order">
                    <Header/>
                    <Order/>
                </Route>
            </Switch>
        </>
    )
}

export default App;