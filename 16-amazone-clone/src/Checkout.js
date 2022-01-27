import React, { useContext } from 'react';
import './Checkout.css';
import SubTotal from './SubTotal';
import {AppContext} from './context';
import CheckoutProduct from './CheckoutProduct';
import { useHistory } from 'react-router';


const Checkout = () => {

    let {cart,user}=useContext(AppContext);

    let history=useHistory();

    if(user===null){    
        history.push('/signin')
    }
    
    return (
        <>
            <div className="checkout">
                <div className="checkout-left">
                    <img className="checkout-add" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423429668.jpg" alt="ad" />
                    <div className="checkout-title">
                        <h1>Your Shopping Basket</h1>
                        {
                            cart.map((item)=>{
                                return <CheckoutProduct key={item.id} item={item}/>
                            })
                        }
                    </div>
                </div>
                <div className="checkout-right">
                    <SubTotal />
                </div>
            </div>
        </>
    )
}

export default Checkout;