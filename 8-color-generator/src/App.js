import React, { useState } from 'react';
import Values from 'values.js';
import ColorBox from './ColorBox';

const App = () => {
    let [color, updateColor] = useState('red');
    let [error, updateError] = useState(false);
    let [colorArray, updateColorArray] = useState([]);

    const handleSubmit = (e) => {
        updateError(false);
        e.preventDefault();

        try {
            const col = new Values(color);
            let colArr = col.all(10);
            updateColorArray(colArr);
        }
        catch {
            updateError(true);
        }

    }
    console.log(colorArray)
    return (
        <>
            <div className="heading">
                <form onSubmit={handleSubmit} className="colorForm">
                    <div>
                        <label>Color Generator</label>
                    </div>
                    <div>
                        <input type="text"
                            value={color}
                            onChange={(e) => updateColor(e.target.value)}
                            className={`${error ? 'alert' : null}`}
                        />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

            <div className="container">
                {
                colorArray.map((item,index)=>{
                    let hexCode=item.hex;
                    return(
                        <>
                            <ColorBox key={index} {...item} hexCode={hexCode} index={index}/>
                        </>
                    )
                })
                }
            </div>
        </>
    )
}

export default App;