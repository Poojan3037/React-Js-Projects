import React, { useContext } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import {AppContext} from './context';

const Navbar = ()=>{
    let {amount}=useContext(AppContext);
    return (
        <>
        <nav>
            <div className="title">
                <h1>Cart</h1>
            </div>
            <div className="cart-icon">
                <Badge badgeContent={amount} color="secondary">
                <AddShoppingCartIcon/>
                </Badge>
            </div>
        </nav>
        </>
    )
}

export default Navbar;