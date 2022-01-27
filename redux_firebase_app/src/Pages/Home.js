
import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Post from '../Components/Post';
import { postSliceAction } from '../Slices/PostSlice';

const Home = () => {

    const user = useSelector((state) => state.user.user)
    const auth = getAuth();
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const allPosts = useSelector((state) => state.post.posts)

    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log("log out ");
            navigation('/login');
        })
    }

    useEffect(() => {

        if (!user) {
            navigation('/login');
        }

        dispatch(postSliceAction.getPosts());
    }, [])


    return (
        <>
            {
                user &&
                <>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand">welcome {user.email}</a>
                            <form className="d-flex">
                                <button className="btn btn-outline-success" type="submit" onClick={handleLogout}>Logout</button>
                            </form>
                        </div>
                    </nav>

                    <Post />

                    {
                        allPosts.length < 0 &&
                        allPosts.map((item) => {
                            console.log(item);
                        })
                    }
                </>
            }
        </>
    );
}

export default Home;
