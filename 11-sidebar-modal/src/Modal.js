import React, { useContext } from 'react';
import {AppContext} from './context';
import CloseIcon from '@material-ui/icons/Close';


const Modal = () => {
    let {isModal,closeModal}=useContext(AppContext);
    console.log(isModal)
    return (
        <>
            <div className={`${isModal?'modal-container-show':'modal-container'}`}>
                <div className="show-modal">
                    <h1>Modal Content</h1>
                    <button className="close-btn" onClick={closeModal}><CloseIcon /></button>
                </div>
            </div>
        </>
    )
}

export default Modal;