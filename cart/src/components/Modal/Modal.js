import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import ModalList from "./ModalList";
import './Modal.css'
import OrderLayout from "./OrderLayout";
import { useSelector, useDispatch } from "react-redux";
import modalSlice, { modalAction } from "../../reducers/modalReducer";

const ModalContainer = (props) => {

    const dispatch = useDispatch();

    const isModalOpen = useSelector(state => state.modal.isModalOpen);
    const placeOrder = useSelector(state => state.modal.placeOrder);
    const cart = useSelector(state => state.cart.cart)
    const total = useSelector(state => state.cart.total)

    const onCloseModalHandler = () => {
        dispatch(modalAction.toggleModal());
    }

    const placeOrderHandler = () => {
        dispatch(modalAction.onPlaceOrder());
    }



    return (
        <>
            <div className={isModalOpen ? "modal-background-show" : "modal-background-hide"}>
                <div className="modal-container">
                    {
                        cart.length === 0 && <p>No item in cart</p>
                    }
                    <div className="modal-meal-container">
                        {
                            cart.map((meal) => {
                                return <ModalList key={meal.id} meal={meal} />
                            })
                        }
                    </div>
                    {
                        cart.length > 0 &&
                        <div className="modal-container-total">
                            <h2>Total Amount</h2>
                            <h2>$ {total}</h2>
                        </div>
                    }
                    {
                        placeOrder &&
                        <OrderLayout />
                    }
                    <div className="modal-container-footer">
                        <button className="close-btn" onClick={onCloseModalHandler}>Close</button>
                        {
                            cart.length > 0 && !placeOrder && <button className="order-btn" onClick={placeOrderHandler} >Order</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


const Modal = (props) => {



    return (

        ReactDom.createPortal(<ModalContainer />, document.getElementById("modal"))

    )
}

export default Modal;