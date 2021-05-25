import React, { createContext, useEffect, useReducer } from 'react';
import reducer from './reducer'

const AppContext = createContext();

const AppProvider = ({ children }) => {

    let defaultValue = {
        cart: [],
        total: 0,
        adress:[],
        user:[]
    }

    let [state, dispatcher] = useReducer(reducer, defaultValue)


    const addItem = (item) => {
        dispatcher({ type: "ADD_ITEM", payload: item })
    }


    const getTotal = () => {
        dispatcher({ type: "GET_TOTAL" })
    }

    const deleteItem = (id) => {
        dispatcher({type:"REMOVE_ITEM",payload:id})
    }

    const addAddress=(order)=>{
        dispatcher({type:"ADD_ADDRESS",payload:order})
    }

    const getUser=(user)=>{
        dispatcher({type:"ADD_USER",payload:user})
    }

    const removeAll=()=>{
        dispatcher({type:"REMOVE_ALL"})
    }

    return (
        <>
            <AppContext.Provider
                value={
                    {
                        ...state,
                        addItem,
                        getTotal,
                        deleteItem,
                        addAddress,
                        getUser,
                        removeAll
                    }
                }
            >
                {children}
            </AppContext.Provider>
        </>
    )
}

export { AppContext, AppProvider };