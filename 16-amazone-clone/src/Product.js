import React, { useContext, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import './Product.css'
import {AppContext} from './context';

const Product = (props) => {

    let { id, title, price, rating, image } = props;

    const {addItem,getTotal,cart}=useContext(AppContext);

    const addToCart=()=>{
        let item={
            id,title,price,rating,image
        }
        addItem(item);
        getTotal();
    }


    return (
        <>
            <div className="product">
                <div className="product-info">
                    <p className="product-title">{title}</p>
                    <span className="dollar">$</span><span className="product-price">{price}</span>
                    <div className="product-rating">
                        <Rating name="read-only" value={rating} readOnly />
                    </div>
                </div>
                <div>
                    <img className="product-img" src={image} alt={title} />
                </div>
                <div>
                    <button className="product-button" onClick={addToCart}>Add to basket</button>
                </div>
            </div>
        </>
    )
}

export default Product;