import React, { useContext } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {AppContext} from './context';


const Home=()=>{
    
    let {openModal,openSidebar}=useContext(AppContext);

    return(
        <>
        <div className="container">
            <div className="hamburger">
                <button className="ham-btn" onClick={openSidebar}><MenuIcon className="ham-icon"/></button>
            </div>
            <div className="">
                <button className="modal-btn" onClick={openModal}>Show Modal</button>
            </div>
        </div>
        </>
    )
}

export default Home;