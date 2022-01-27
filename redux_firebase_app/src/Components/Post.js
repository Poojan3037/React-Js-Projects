import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postSliceAction } from '../Slices/PostSlice';

function Post() {

    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const handleSubmitPost = (e) => {
        e.preventDefault();
        const post = {
            name: name,
            course: course,
            postedBy: user.email
        }
        dispatch(postSliceAction.addPost(post))
        setName('');
        setCourse('');
    }

    return (
        <>
            <div className='container'>
                <form className="row g-3 needs-validation p-3" onSubmit={handleSubmitPost}>
                    <div className='col-md-4 offset-md-4 '>
                        <h1 className='text-center'>Add Post</h1>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Student Name</label>
                        <input type="text" className="form-control" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Course Name</label>
                        <input type="text" className="form-control" required value={course} onChange={(e) => setCourse(e.target.value)} />
                    </div>
                    <div className="col-sm-4 offset-md-4 d-flex align-item-center justify-content-center">
                        <button className="btn btn-primary" type="submit">Post</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Post;
