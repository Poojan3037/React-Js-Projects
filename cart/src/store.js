import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartReducer";
import fetchMealSlice from "./reducers/fetchMealSlice";
import modalSlice from "./reducers/modalReducer";
import orderReducer from "./reducers/orderReduder";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        modal: modalSlice.reducer,
        meal: fetchMealSlice.reducer,
        order: orderReducer.reducer,
    }
})

export default store;