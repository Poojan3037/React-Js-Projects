import React, { useState } from 'react';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const Box = (props) => {

    let { title, dates, duties, company } = props

    return (
        <>
            <h2>{title}</h2>
            <h4><span>{company}</span></h4>
            <h5>{dates}</h5>
            {
                duties.map((item) => {
                    return (
                        <>
                            <div className="duties">
                                <div>
                                    <DoubleArrowIcon className="arrowIcon" />
                                </div>
                                <div>
                                    <p>{item}</p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Box;