import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isModalOpen: false,
        placeOrder: false,
    },
    reducers: {
        toggleModal(state, action) {
            state.isModalOpen = !state.isModalOpen;
        },

        onPlaceOrder(state) {
            state.placeOrder = true
        },

        afterSubmittedOrder(state) {
            state.placeOrder = false
        }
    }
})

export default modalSlice;
export const modalAction = modalSlice.actions;