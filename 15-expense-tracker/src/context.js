import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = createContext();

const AppProvider = ({ children }) => {



    const [state, dispatcher] = useReducer(reducer, {
        income: [],
        expense: [],
        incomeTotal: 0,
        expenseTotal: 0,
        balance: 0,
        history:[]

    });

    return (
        <>
            <AppContext.Provider
                value={
                    {
                        ...state,
                        dispatcher
                    }
                }
            >
                {children}
            </AppContext.Provider>
        </>
    )
}

export { AppProvider, AppContext };