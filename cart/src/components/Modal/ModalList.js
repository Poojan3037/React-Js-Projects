import React, { useContext } from "react";
import { AppContext } from "../../context";
import './ModalList.css'
import { useDispatch } from "react-redux";
import { cartAction } from "../../reducers/cartReducer";

const ModalList = (props) => {



    const dispatch = useDispatch();

    const { name, description, price, id, repeated } = props.meal;

    const onMinusMealHandler = () => {
        let meal = {
            name: name,
            description: description,
            price: price,
            id: id,
            repeated: repeated
        }
        dispatch(cartAction.minusOneMeal(meal));
        dispatch(cartAction.countTotal());
    }

    const onPlusMealHandle = () => {
        let meal = {
            name: name,
            description: description,
            price: price,
            id: id,
            repeated: repeated
        }
        dispatch(cartAction.plusOneMeal(meal))
        dispatch(cartAction.countTotal());

    }

    return (
        <>
            <div className="modal-meal">
                <div className="modal-meal-left">
                    <div className="modal-meal-left-name">
                        <h2>{name}</h2>
                        <p>$ {price}</p>

                    </div>
                    <div className="modal-meal-left-repeat">
                        <p>x {repeated}</p>

                    </div>
                </div>
                <div className="modal-meal-right">
                    <button onClick={onMinusMealHandler}>-</button>
                    <button onClick={onPlusMealHandle}>+</button>
                </div>
            </div>

        </>
    )
}

export default ModalList;