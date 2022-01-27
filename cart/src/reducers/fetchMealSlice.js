import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    mealList: [],
    loading: false
}

export const getMeals = createAsyncThunk(
    'meal/getMeals',
    async (thunkApi) => {
        const response = await fetch('https://food-app-3a272-default-rtdb.firebaseio.com/meals.json');
        const jsonData = await response.json();

        let mealArray = [];
        for (let key in jsonData) {
            mealArray.push({
                id: key,
                name: jsonData[key].name,
                description: jsonData[key].description,
                price: jsonData[key].price,
                repeated: jsonData[key].repeated
            })
        }
        return mealArray;
    })



const fetchMealSlice = createSlice({
    name: 'meal',
    initialState,
    extraReducers: {
        [getMeals.pending]: ((state) => {
            state.loading = true;
        }),
        [getMeals.fulfilled]: ((state, action) => {
            state.mealList = action.payload;
            state.loading = false;
        })

    }
})


export default fetchMealSlice;
