import React, { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
    let [birthday, updateBirthdate] = useState(data);

    return (
        <>
            <div className="container">
                <div className="birthday-box">
                    <h1 className="heading">{birthday.length} birthdays today</h1>
                    {
                        birthday.map((person) => {
                            return (
                                <List key={person.id} {...person} />
                            );
                        })
                    }
                    <button className="btn" onClick={()=>updateBirthdate([])}>clear all</button>
                </div>
            </div>
        </>
    )
}

export default App;