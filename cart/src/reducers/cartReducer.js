import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        total: 0
    },
    reducers: {

        addToCart(state, action) {
            let newCart;

            let matchedItem = state.cart.find((item) => {
                if (item.id === action.payload.id) {
                    return item;
                }
            })

            if (matchedItem) {
                newCart = state.cart.map((item) => {
                    if (matchedItem.id === item.id) {
                        return { ...item, repeated: item.repeated + 1, price: (((item.repeated + 1) * item.price) / item.repeated).toFixed(2) }
                    }
                    return item;
                })
            } else {
                newCart = [action.payload, ...state.cart]
            }

            return {
                ...state,
                cart: newCart,
            }

        },


        minusOneMeal(state, action) {

            let newArr = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, repeated: item.repeated - 1, price: (((item.repeated - 1) * item.price) / item.repeated).toFixed(2) }
                }
                return item;
            }).filter((item) => item.repeated !== 0)

            return {
                ...state,
                cart: newArr,
            }
        },

        plusOneMeal(state, action) {

            let newArr = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item, repeated: item.repeated + 1, price: (((item.repeated + 1) * item.price) / item.repeated).toFixed(2)
                    }
                }
                return item;
            })

            return {
                ...state,
                cart: newArr,
            }

        },


        countTotal(state, action) {
            let totalAmount = state.cart.reduce((total, item) => {
                return total + parseFloat(item.price);
            }, 0)

            let finalAmount = totalAmount.toFixed(2)

            return {
                ...state,
                total: finalAmount
            }
        },

        clearCart(state) {
            state.cart = []
            state.total = 0
        }
    }

})


export default cartSlice;
export const cartAction = cartSlice.actions;