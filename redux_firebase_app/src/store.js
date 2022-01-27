import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./Slices/PostSlice";
import userSlice from "./Slices/User";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        post: postSlice.reducer
    }
})

export default store;