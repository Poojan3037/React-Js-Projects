import React from 'react';

const Alert = (props) => {
    
    let { type, msg } = props;

    return (
        <>
            <div className="alert">
                <p className={type}>{msg}</p>
            </div>
        </>
    )

}
export default Alert;