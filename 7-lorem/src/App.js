import React, { useState } from 'react';
import data from './data';

const App = () => {

    let [number, updateNumber] = useState('');
    let [paragraph, updatePara] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let num = parseInt(number);


        let newPara = undefined;

        if (num <= -1) {
            newPara = data.slice(0, 1)
        } else if (num >= 8) {
            newPara = data.slice(0, 8);
        } else {
            newPara = data.slice(0, num);

        }

        updatePara(newPara)
        updateNumber('');
    }

    console.log(paragraph)
    return (
        <>
            <div className="heading">
                <h1>Random Paragraph Generator</h1>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="para"><span>Number of Paragraph  : </span></label>
                    <input type="text" id="para" value={number} onChange={(e) => updateNumber(e.target.value)} />
                    <button type="submit">Generate</button>
                </form>
            </div>
            <div className="paragraph">
                <div className="para-container">
                    {
                        paragraph.map((item) => {
                            return (
                                <>
                                    <h4>{item}</h4>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default App;