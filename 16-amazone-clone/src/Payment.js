import React, { useContext } from 'react';
import {AppContext} from './context';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useHistory } from 'react-router';
import firebase from './firebase';

const Payment =()=>{

    let {cart,total,adress,user,removeAll}=useContext(AppContext);


    let history=useHistory();

    let ref=firebase.firestore().collection("Order");
    const placeorder=()=>{

        let date=new Date().toDateString();
        let time=new Date().toTimeString();

        let deliverdate=new Date();
        deliverdate.setDate(deliverdate.getDate()+7)

        let item={
            uid:user.uid,
            order:cart,
            orderDate:date,
            orderTime:time,
            deliverydate:deliverdate.toDateString(),
            address:adress,
            total:total,
            items:cart.length
        }

        ref.doc(item.uid).set(item).then(()=>{history.push('/placeorder')})

        removeAll();

    }

    return(
        <>
            <div className="payment">
                <div className="address">
                    <div className="address-title">
                        <h2>Your Shipping Address</h2>
                    </div>
                    <div className="address-info">
                        <p>{adress.name}</p>
                        <p>{adress.house},</p>
                        <p>{adress.area},</p>
                        <p>{adress.landmark},</p>
                        <p>{adress.pincode},</p>
                        <p>{adress.city},{adress.state}</p>
                        <p>Mobile no. {adress.number}</p>
                    </div>
                </div>
                <div className="order">
                    <div className="order-title">
                        <h2>Your Order</h2>
                    </div>
                    <div className="order-product">
                        {
                             cart.map((item)=>{
                                return <CheckoutProduct key={item.id} item={item}/>
                            })
                        }
                    </div>
                </div>
                <div className="buy">
                    <div className="price-details">
                        <h2>Number of Items : {cart.length}</h2>
                        <h3>Total Price : ${total}</h3>
                        <button className="product-button" onClick={placeorder}>Place order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment;