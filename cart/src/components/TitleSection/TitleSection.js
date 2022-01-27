import React from 'react';
import Content from './Contents';
import './TitleSection.css'


const TitleSection = () => {

    const mealImg = 'Image/meals.jpg';

    return (
        <>
            <div className='title-section'>
                <div className='title-section-img-box'>
                    <img className='title-section-img' src={mealImg} />
                </div>
                <Content />
            </div>
        </>
    )
}

export default TitleSection;