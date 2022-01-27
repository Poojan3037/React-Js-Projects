import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false
}

export const postOrder = createAsyncThunk(
    'order/postOrder',
    async (orderData) => {
        const { user, meals } = orderData;
        const response = await fetch('https://food-app-3a272-default-rtdb.firebaseio.com/orders.json', {
            method: "POST",

            body: JSON.stringify({
                user: user,
                orderMeals: meals

            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        const jsonData = await response.json();

        return jsonData;
    })



const orderReducer = createSlice({
    name: 'order',
    initialState,
    extraReducers: {
        [postOrder.pending]: ((state) => {
            state.loading = true;
        }),
        [postOrder.fulfilled]: ((state) => {
            state.loading = false;
        })

    }
})


export default orderReducer;