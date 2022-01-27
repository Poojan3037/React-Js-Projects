import React, { useContext, useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css'
import Modal from '../Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import modalSlice, { modalAction } from '../../reducers/modalReducer';


const Header = () => {


    const cart = useSelector(state => state.cart.cart)
    const isModalOpen = useSelector(state => state.modal.isModalOpen)

    const dispatch = useDispatch();

    const handleCartModal = () => {
        dispatch(modalAction.toggleModal())
    }

    return (
        <>
            {
                isModalOpen && <Modal />
            }
            <div className='header'>
                <div className='header-title'>
                    <h1>ReactMeals</h1>
                </div>
                <div className='header-cart' onClick={handleCartModal}>
                    <div className='header-cart-img'>
                        <ShoppingCartIcon />
                    </div>
                    <div className='header-cart-title'>
                        Your cart
                    </div>
                    <div className="header-cart-total">
                        {cart.length}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;