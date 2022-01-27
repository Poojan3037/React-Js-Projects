import React, { useContext } from 'react';
import Item from './Item';
import {AppContext} from './context';
const Cartbag = ()=>{

    let {data,clearItem,total}=useContext(AppContext);

    return (
        <>
        <div className="container">
            <div className="heading">
                <h1>Your Cart</h1>
            </div>
            {
                data.length==0?<h3>Your cart is empty</h3>
                :
            <div className="cart-items">
                {
                    data.map((item)=>{
                       return(
                           <>
                           <Item  key={item.id} {...item}/>
                           </>
                       )
                    })
                }
            <div className="total">
                <h3>Total</h3>
                <h3>${total}</h3>
            </div>
            <div className="clear-box">
                <button className="clear-btn" onClick={clearItem}>Clear all</button>
            </div>
            </div>
            }
        </div>
        </>
    )
}

export default Cartbag;