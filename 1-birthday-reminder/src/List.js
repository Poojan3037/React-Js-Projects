import React, { useState } from 'react';

const List = (props) => {

    let { name, age, image } = props;

    return (
        <>
            <div className="list">
                <div  className="list1-box">
                    <img src={image} alt="default" />
                </div>
                <div className="list2-box">
                    <h4>{name}</h4>
                   <p>{age} years</p>
                </div>
            </div>
        </>
    )
}

export default List;