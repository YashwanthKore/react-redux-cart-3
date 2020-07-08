import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Product from '../components/Product';
import Orders from '../components/Orders';

export default function Routes(){
    <div>
        <Switch>
            <Route exact path ="/" render = {()=> <Home /> }/>
            <Route exact path ="/product" render = {()=> <Product /> }/>
            <Route exact path ="/cart" render = {()=> <Cart /> }/>
            <Route exact path ="/orders" render = {()=> <Orders /> }/>
        </Switch>
    </div>
}