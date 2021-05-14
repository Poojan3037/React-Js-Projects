import React, { useEffect, useState } from 'react';
import Alert from './Alert';
import TodoList from './TodoList';

// get list from database
const getLocalStorage=()=>{
    let list=localStorage.getItem("list");
    if(list){
        return JSON.parse(list);
    }else{
        return [];
    }
}


const App = () => {

    let [name, updateName] = useState('');
    let [list, updateList] = useState(getLocalStorage);
    let [alert, updateAlert] = useState(false);
    let [notification, updateNotification] = useState({
        type: '',
        msg: ''
    })
    let [edit, updateEdit] = useState(false);
    let [editId, updateEditId] = useState(null);



    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            updateAlert(true)
            updateNotification({
                type: 'danger',
                msg: 'please enter some text'
            })
        } else if (edit === true && name) {
            let newList = list.map((item) => {
                if(item.id===editId){
                    return {id:editId,title:name};
                }
                else{
                    return item;
                }
            })

            updateList(newList)
            updateName('');
            updateEdit(false);
            updateEditId(null);
            updateAlert(true);
            updateNotification({
                type:'success',
                msg:'note edited'
            })
        }
        else {
            let newItem = {
                id: new Date().getTime().toString(),
                title: name,
            }

            updateList([...list, newItem]);
            updateName('');
            updateAlert(true);
            updateNotification({
                type: 'success',
                msg: 'your note added successfully'
            }
            )
        }
    }

    // remove all item
    const emptyList = () => {
        updateList([]);
        updateAlert(true);
        updateNotification(
            {
                type: 'danger',
                msg: 'all notes removed'
            }
        )
    }

    // remove one item
    const removeItem = (id) => {
        let newList = list.filter((item) => item.id !== id)
        updateList(newList);
        updateAlert(true);
        updateNotification({
            type: 'success',
            msg: 'item removed'
        })
    }


    // edit item
    const editItem = (id) => {
        let text = list.find((item) => {
            if (item.id === id) {
                return item;
            }
        }
        )

        updateName(text.title)
        updateEdit(true)
        updateEditId(id)
    }


    // remove alert
    useEffect(() => {
        let time = setTimeout(() => {
            updateAlert(false);
            updateNotification({
                type: '',
                msg: ''
            })
        }, 3000)

        return () => clearTimeout(time);

    }, [notification])


    // update localStorage

    useEffect(()=>{
        localStorage.setItem("list",JSON.stringify(list));
        return ()=>localStorage.clear();
    },[list])


    return (
        <>
            <div className="container">
                <div className="header">
                    {
                        alert && <Alert {...notification} />
                    }
                    <h1>
                        ToDo App
                    </h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="e.g I have to go market" value={name} onChange={(e) => updateName(e.target.value)} />
                    <button type="submit" className="btn">{edit ? 'Edit' : 'Submit'}</button>
                </form>


                {

                    list.length > 0 ?
                        <div className="todo-box">
                            {
                                list.map((item) => {
                                    return (
                                        <>
                                            <TodoList key={item.id} {...item} removeItem={removeItem} editItem={editItem} />
                                        </>
                                    )
                                })
                            }
                            <button className="clear-btn" onClick={emptyList}>clear notes</button>
                        </div> : null
                }

            </div>
        </>
    )
}

export default App;