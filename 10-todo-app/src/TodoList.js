
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList=(props)=>{

    let {id,title,removeItem,editItem}=props;
    

    return(
        <>  
        <div className='item'>
            <div>
                <p>{title}</p>
            </div>
            <div>
                <button className="edit-btn" onClick={()=>editItem(id)}><EditIcon className="font"/></button>
                <button className="delete-btn" onClick={()=>removeItem(id)}><DeleteIcon className="font"/></button>
            </div>
        </div>
        </>
    )
}

export default TodoList;