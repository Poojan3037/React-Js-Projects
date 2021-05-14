import React, { useState } from 'react';
import Review from './Review';

const App = () => {



    return (
        <>
            <div className="container">
                    <div className="heading">
                        <h1>Our Reviews</h1>
                    </div>
                <div className="box">
                    <div className="review-container">
                        <Review />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;