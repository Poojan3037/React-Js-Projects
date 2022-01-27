import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../reducers/cartReducer";
import { modalAction } from "../../reducers/modalReducer";
import { postOrder } from "../../reducers/orderReduder";
import './OrderLayout.css';


const OrderLayout = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart)


    const [name, setName] = useState("");
    const [house, setHouse] = useState("");
    const [pin, setPin] = useState("");
    const [city, setCity] = useState("");
    const [number, setNumber] = useState("");
    const [error, setError] = useState({
        errorStatus: false,
        errorMessage: '',
    });

    const onSubmitHandler = () => {
        if (name === "") {
            return setError({
                errorStatus: true,
                errorMessage: "Please enter your name",
            })
        }
        if (house === "") {
            return setError({
                errorStatus: true,
                errorMessage: "Please enter a house no.",
            })
        }
        if (city === "") {
            return setError({
                errorStatus: true,
                errorMessage: "Please enter a city",
            })
        }
        if ((parseInt(pin)).length < 6 || pin === "") {
            return setError({
                errorStatus: true,
                errorMessage: "Please enter a correct pin",
            })
        }
        if ((parseInt(number)).length < 10 || number === "") {
            return setError({
                errorStatus: true,
                errorMessage: "Please enter a correct number",
            })
        }

        let userInfo = {
            name,
            house,
            pin,
            city,
            number,
            userId: new Date().getTime().toString()
        }

        dispatch(postOrder({ user: userInfo, meals: cart }))


        setError({
            errorStatus: false,
            errorMessage: ''
        })

        setName('');
        setCity('');
        setHouse('');
        setNumber('');
        setPin('');

        dispatch(cartAction.clearCart());
        dispatch(modalAction.afterSubmittedOrder());
    }



    return (
        <>
            <div className="order-layout">
                <div className="order-layout-controller">
                    {error.errorStatus && <p>{error.errorMessage}</p>}
                    <input placeholder="Enter a Name" type="text" value={name} onChange={(e) => setName(e.target.value)} ></input>
                </div>
                <div className="order-layout-controller">
                    <input placeholder="Enter a House No./Society" type="text" value={house} onChange={(e) => setHouse(e.target.value)} ></input>
                </div>
                <div className="order-layout-controller">
                    <input placeholder="Enter a Pincode" type="text" value={pin} onChange={(e) => setPin(e.target.value)} ></input>
                </div>
                <div className="order-layout-controller">
                    <input placeholder="Enter a City" type="text" value={city} onChange={(e) => setCity(e.target.value)} ></input>
                </div>
                <div className="order-layout-controller">
                    <input placeholder="Enter a Mobile No." type="text" value={number} onChange={(e) => setNumber(e.target.value)} ></input>
                </div>
                <div className="order-layout-action">
                    <button onClick={onSubmitHandler}>Submit The Order</button>
                </div>
            </div>
        </>
    )
}

export default OrderLayout;