import data from "./data"

const reducer = (state, action) => {

    if (action.type === 'OPEN_LOADING') {
        return (
            {
                ...state,
                loading: true,
            }
        )
    }

    if (action.type === "CLOSE_LOADING") {
        return (
            {
                ...state,
                loading: false,
                data: action.payload
            }
        )
    }


    if (action.type === "CLEAR") {
        return (
            {
                ...state,
                data: [],
            }
        )
    }

    if (action.type === "REMOVE") {
        let newArr = state.data.filter((item) => item.id !== action.payload)
        return (
            {
                ...state,
                data: newArr,
            }
        )
    }


    if (action.type === "INC_AMOUNT") {
        let newArr = state.data.map((item) => {
            if (item.id === action.payload) {
                return { ...item, amount: item.amount + 1 }
            }
            return item;
        })

        return (
            {
                ...state,
                data: newArr
            }
        )
    }

    if (action.type === "DEC_AMOUNT") {
        let newArr = state.data.map((item) => {
            if (item.id === action.payload) {
                return { ...item, amount: item.amount - 1 }
            }
            return item;
        }).filter((item) => item.amount !== 0)
        return (
            {
                ...state,
                data: newArr
            }
        )
    }


    if (action.type === "GET_TOTAL") {
        let { amount, total} = state.data.reduce((cartTotal,cartItem) => {
            let {price,amount}=cartItem;
            const itemTotal=price*amount;

            cartTotal.total+=itemTotal
            cartTotal.amount+=amount

            console.log(cartTotal)
            return cartTotal
         },
            {
                amount: 0,
                total: 0
            }
        )

        console.log(total,amount)

        return{...state,total,amount}

    }

}


export default reducer;