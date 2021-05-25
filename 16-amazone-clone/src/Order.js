import React, { useContext, useEffect, useState } from 'react';
import firebase from './firebase';
import PlaceOrderProduct from './PlaceOrderProduct';
import './PlaceOrder.css'
import { AppContext } from './context';
import { useHistory } from 'react-router';

const Order = () => {

    let history = useHistory();

    let { user } = useContext(AppContext)

    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);


    let ref = firebase.firestore().collection("Order");

    const loadData = () => {
        setLoading(true)
        ref.onSnapshot((qureySnapShot) => {
            let items = [];
            qureySnapShot.forEach((doc) => {
                if (doc.id === user.uid) {
                    items.push(doc.data());
                }
            })
            setData(items[0])
            setLoading(false);
        })

    }

    const cancelOrder = () => {
        ref.doc(user.uid).delete();
        history.push('/')
    }

    useEffect(() => {
        loadData();
    }, [])


    if (loading) {
        return (
            <>
                <div className="loading">
                    <h1>Loading . . .</h1>
                </div>
            </>
        )
    } else {
        return (
            <>
                {
                    data?
                    <div className="placeOrder">
                        <div className="placeOrder-details">
                            <div className="date">
                                <h5>Order date : {data.orderDate} {data.orderTime.slice(0, 8)} </h5>
                                <h5>Delivery date : {data.deliverydate} (expected)</h5>
                            </div>
                            <div className="address">
                                <div className="address-title">
                                    <h3>Shipping Details</h3>
                                </div>
                                <div className="address-info">
                                    <p>{data.address.name}</p>
                                    <p>{data.address.house},</p>
                                    <p>{data.address.area},</p>
                                    <p>{data.address.landmark},</p>
                                    <p>{data.address.pincode},</p>
                                    <p>{data.address.city},{data.address.state}</p>
                                    <p>Mobile no. {data.address.number}</p>
                                </div>
                            </div>
                            <div className="order">
                                <div className="order-title">
                                    <h3>Order Details</h3>
                                </div>
                                <div className="order-product">
                                    {
                                        data.order.map((item) => {
                                            return <PlaceOrderProduct key={item.id} item={item} />
                                        })
                                    }
                                </div>
                            </div>
                            <div className="buy">
                                <div className="price-details">
                                    <h2>Number of Items : {data.items}</h2>
                                    <h3>Total Price : ${data.total}</h3>
                                    <button className="product-button" onClick={cancelOrder}>Cancel Order</button>
                                </div>
                            </div>
                        </div>
                    </div>:<div className="loading">
                    <h1>No Order Placed</h1>
                </div>
                }
            </>
        )
    }
}

export default Order;