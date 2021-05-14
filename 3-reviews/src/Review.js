import React, { useState } from 'react';
import data from './data';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Review = () => {
    let [index, updateIndex] = useState(0);
    let { name, job, image, text } = data[index];

    const increment = () => {
        if (index >= data.length - 1) {
            updateIndex(0)
        }
        else {
            updateIndex(index + 1)
        }
    }

    const decrement = () => {
        if(index<=0){
            updateIndex(data.length-1)
        }else{
            updateIndex(index-1)
        }
    }

    const random = () => {
        let randomNumber=Math.round(Math.random()*(data.length-1))
        updateIndex(randomNumber)

    }



    return (
        <>
            <div className="img">
                <FormatQuoteIcon className="quote" />
                <img src={image} alt={name}></img>
            </div>
            <div className="intro">
                <h2>{name}</h2>
                <h3>{job}</h3>
                <p>{text}</p>
            </div>
            <button className="btn" onClick={decrement}><ArrowBackIosIcon /></button>
            <button className="btn" onClick={increment}><ArrowForwardIosIcon /></button>
            <div>
                <button className="btn2" onClick={random}>Suggest Me</button>
            </div>
        </>
    )

}

export default Review;