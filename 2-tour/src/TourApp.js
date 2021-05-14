import React from 'react';
import TourPlace from './TourPlace';

const TourApp = (props) => {

    let { tour,removeItem } = props;

    return (
        <>
            <div className='container'>
                <div className="heading">
                    <h1 className="h1">Our Tours</h1>
                </div>
                <div className="tour-container">
                    {
                        tour.map((place) => {
                            return (
                                <TourPlace key={place.id} {...place} removeItem={removeItem} ></TourPlace>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TourApp;