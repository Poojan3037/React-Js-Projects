
import React, { useContext } from 'react';
import './Meal.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../reducers/cartReducer';

const Meal = (props) => {
    const dispatch = useDispatch();

    const { name, description, price, id, repeated } = props.item;

    const addMealHandler = () => {
        let meal = {
            name: name,
            description: description,
            price: price,
            id: id,
            repeated: repeated
        }

        dispatch(cartAction.addToCart(meal));

        dispatch(cartAction.countTotal());
    }

    return (
        <>
            <div className='meal'>
                <div className='meal-info'>
                    <h4 className='meal-info-title'>{name}</h4>
                    <p className='meal-info-desc'>{description}</p>
                    <p className='meal-info-price'>$ {price}</p>
                </div>
                <div className='meal-total'>
                    <div className='meal-total-action'>
                        <button onClick={addMealHandler}>+ Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Meal;