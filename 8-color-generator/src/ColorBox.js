import React, { useEffect, useState } from 'react';

const ColorBox = (props) => {

    let [notification, updateNotification] = useState(false);

    let { rgb, weight, hexCode, index } = props;

    let rgbColor = rgb.join(",");
    console.log(rgbColor)

    let hexValue = `#${hexCode}`;

    useEffect(() => {
        
        let time = setTimeout(() => {
            updateNotification(false)
        }, 3000)
        return()=>{
            clearTimeout(time)
        }
        
    }, [notification])



    return (
        <>
            <div className={`box ${index > 10 ? 'white-color' : null}`}
                style={{ backgroundColor: `rgb(${rgbColor})` }}
                onClick={() => {
                        updateNotification(true);
                        navigator.clipboard.writeText(hexValue);
                    }
                }
            >
                <h3>{weight}%</h3>
                <h3>{hexValue}</h3>
                {
                    notification ? <p>copied to clipboard</p> : null
                }

            </div>
        </>
    )

}

export default ColorBox;