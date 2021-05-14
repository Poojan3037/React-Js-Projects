import React, { useEffect, useState } from 'react';
import Box from './Box';

const url = 'https://course-api.com/react-tabs-project'



const App = () => {

    let [loading, updateLoading] = useState(true);
    let [data, updateData] = useState([]);
    let [value, updateValue] = useState(0);


    const loadData = async () => {
        updateLoading(true)
        let response = await fetch(url);
        let jsonData = await response.json();
        console.log(jsonData)
        updateData(jsonData);
        updateLoading(false)
    }

    useEffect(() => {
        loadData();
    }, [])



    if (loading) {
        return (
            <>
                <div className="header">
                    <h1>Loading . . .</h1>
                </div>
            </>
        )
    }
    else {
        let { title, dates, duties, company } = data[value]
        return (
            <>
                <div className="header">
                    <h1 className="h1">Experience</h1>
                </div>
                <div className="container">
                    <div className="area">
                        <div className="btn-group">
                            {
                                data.map((item, index) => {
                                    return (
                                        <button className={`btn ${index==value && 'active-btn'} `} onClick={() => updateValue(index)}>{item.company}</button>
                                    )
                                })
                            }
                        </div>
                        <div className="content">
                            <Box title={title} dates={dates} duties={duties} company={company} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default App;



