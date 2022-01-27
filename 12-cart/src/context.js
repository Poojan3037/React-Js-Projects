import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import data from './data';
import reducer from './reducer'
const url='https://course-api.com/react-useReducer-cart-project'
const AppContext = createContext();

const AppProvider = ({ children }) => {

    let defaultValue = {
        loading: false,
        data: [],
        total:0,
        amount:1,
    }

    let [state, dispatcher] = useReducer(reducer, defaultValue);

    const loadData = async() => {
        dispatcher({ type: "OPEN_LOADING" });
        let response=await fetch(url);
        let json=await response.json();
        dispatcher({type:"CLOSE_LOADING",payload:data});
    }


    const increaseAmount=(id)=>{
        dispatcher({type:"INC_AMOUNT",payload:id});
    }

    const decreseAmount=(id)=>{
        dispatcher({type:"DEC_AMOUNT",payload:id});
    }


    const clearItem=()=>{
        dispatcher({type:"CLEAR"});
    }

    const removeItem=(id)=>{
        dispatcher({type:"REMOVE",payload:id});
    }

    const getTotal=()=>{
        dispatcher({type:"GET_TOTAL"});
    }


    useEffect(() => {
        loadData();
    }, [])


    useEffect(()=>{
        getTotal();
    },[state.data])

    return (
        <AppContext.Provider
            value={
                {
                    ...state,
                    loadData,
                    increaseAmount,
                    decreseAmount,
                    clearItem,
                    removeItem,
                }
            }
        >
            {children}
        </AppContext.Provider>
    )

}

export {AppContext,AppProvider};