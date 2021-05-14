import React, { useState } from 'react';

const TourPlace = (props) => {

    let[show,updateShow]=useState(false);

    let {id, name, info, image, price , removeItem } = props;

    return (
        <>
            <div className="tour-box">
                <img src={image} alt="default"></img>
                <div className="tour-heading">
                    <h4 className="h4-name">{name}</h4>
                    <h4 className="price">$ {price}</h4>
                </div>
                <div className="info">
                    <h4>
                        {
                            show ? info : `${info.substring(0,200)} . . .`
                        }
                        <button className="show-btn" onClick={()=>updateShow(!show)}>{show?'show less':'show more'}</button>
                    </h4>
                </div>
                <div className="btn-div">
                    <button className="btn" onClick={()=>removeItem(id)}>Not interested</button>
                </div>
            </div>
        </>
    )

}

export default TourPlace;