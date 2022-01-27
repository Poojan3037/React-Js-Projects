

const reducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {

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
    }


    if (action.type === "MINUS_ONE_MEAL") {

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
    }

    if (action.type === "PLUS_ONE_MEAL") {
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
    }

    if (action.type === "COUNT_TOTAL") {
        let totalAmount = state.cart.reduce((total, item) => {
            return total + parseFloat(item.price);
        }, 0)

        let finalAmount = totalAmount.toFixed(2)

        return {
            ...state,
            total: finalAmount
        }
    }

}


export default reducer;