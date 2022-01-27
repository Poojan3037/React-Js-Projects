import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const intialState = {
        cart: [],
        total: 0,
    }

    const [state, dispatcher] = useReducer(reducer, intialState);

    const addToCart = (item) => {
        dispatcher({ type: "ADD_TO_CART", payload: item })
    }

    const minusItemFromCart = (item) => {
        dispatcher({ type: 'MINUS_ONE_MEAL', payload: item })
    }

    const plusItemInCart = (item) => {
        dispatcher({ type: "PLUS_ONE_MEAL", payload: item })
    }

    const countTotal = () => {
        dispatcher({ type: "COUNT_TOTAL" })
    }

    return (
        <>
            <AppContext.Provider value={{
                ...state,
                addToCart,
                minusItemFromCart,
                plusItemInCart,
                countTotal,
            }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export { AppContext, AppProvider };