import React from 'react';

const Refresh = (props) => {
    let {refresh}=props;
    return (
        <>
            <div className='container'>
                <div className="heading">
                    <h1 className="h1">Our Tours</h1>
                </div>
                <div className="heading">
                   <button className="btn" onClick={refresh}>Refresh</button>
                </div>
            </div>
        </>
    )
}

export default Refresh;