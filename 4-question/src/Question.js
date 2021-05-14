import React, { useState } from 'react';
import QuestionBox from './QuestionBox';
import data from './data';

const Question = () => {


    return (
        <>
            <div className="box">
                <div className="title">
                    <h1>Questions And Answers About Login</h1>
                </div>
                <div className="content">
                    {
                        data.map((que) => {
                            return (
                                <QuestionBox key={que.id} {...que}></QuestionBox>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Question;