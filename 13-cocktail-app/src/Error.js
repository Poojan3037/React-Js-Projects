import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <>
        <div className="container">
            <div className="about">
                    <NavLink className="btn" to='/'>Go to Main Page</NavLink>
                <h1>Error</h1>
                <p>
                    Something wents wrong.......
                 </p>
            </div>
        </div>
        </>
    )
}

export default Error;