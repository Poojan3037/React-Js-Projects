import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';


const QuestionBox=(props)=>{
    let [show,updateShow]=useState(false);


    let{title,info}=props;

    return(
        <>
            <div className="question-box">
                <div>
                    <h4>{title}</h4>
                    {
                        show && <h5>{info}</h5>
                    }
                </div>
                <div>
                    <Button className="btn" onClick={()=>updateShow(!show)}>{show?<RemoveIcon/>:<AddIcon/>}</Button>
                </div>
            </div>
        </>
    )
}

export default QuestionBox;
