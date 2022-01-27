import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';

const userCollenctionRef = collection(db, "posts");

const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: []
    },
    reducers: {
        getPosts(state, action) {
            getDocs(userCollenctionRef).then((data) => {
                console.log(data.docs)
                state.posts = data.docs.map((doc) => (console.log({ ...doc.data(), id: doc.id })));
                console.log(state.posts)
            })
        },
        addPost(state, action) {
            const post = action.payload;
            // addDoc(userCollenctionRef, {name:"Poojan",course:"react"})
            addDoc(userCollenctionRef, post);
        }
    }
})

export default postSlice;
export const postSliceAction = postSlice.actions;