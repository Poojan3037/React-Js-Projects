import React, { useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import './CheckoutProduct.css';

const CheckoutProduct = (props) => {


    let { item } = props;
    let { id, title, price, rating, image } = item;

    return (
        <>
            <div className="checkout-product">
                <div className="checkout-product-img">
                    <img src={image} alt={title} />
                </div>
                <div className="checkout-product-info">
                    <p className="product-title">{title}</p>
                    <p><span className="dollar">$</span>{price}</p>
                    <div className="product-rating">
                        <Rating name="read-only" value={rating} readOnly />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutProduct;