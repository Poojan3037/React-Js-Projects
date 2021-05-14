import React, { createContext, useState } from 'react';

let AppContext = createContext();

const AppProvider = ({ children }) => {
    let [isModal, setModal] = useState(false);
    let [isSidebar, setSidebar] = useState(false);

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    const openSidebar = () => {
        setSidebar(true);
    }

    const closeSidebar = () => {
        setSidebar(false);
    }

    return(
        <AppContext.Provider
        value={
            {
               isModal,
               isSidebar,
               openModal,
               closeModal,
               openSidebar,
               closeSidebar 
            }
        }
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider};