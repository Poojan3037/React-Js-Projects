import React, { useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import './CheckoutProduct.css';
import { AppContext } from './context';


const CheckoutProduct = (props) => {

    let { deleteItem ,getTotal } = useContext(AppContext);

    let { item } = props;
    let { id, title, price, rating, image } = item;

    const removeItem = (id) => {
        deleteItem(id);
        getTotal();
    }


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
                    <button onClick={() => removeItem(id)}>Remove from Basket</button>
                </div>
            </div>
        </>
    )
}

export default CheckoutProduct;