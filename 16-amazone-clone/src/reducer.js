const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {

        console.log(state.cart)
        let newArr = [...state.cart,action.payload]
        return (
            {
                ...state,
                cart: newArr
            }
        )
    }

    if(action.type==="GET_TOTAL"){
        let ans=state.cart.reduce((sum,item)=>{
            return sum+item.price;
        },0)

        ans=ans.toFixed(2);

        return (
            {
                ...state,
                total:ans
            }
        )
    }


    if(action.type==='REMOVE_ITEM'){
        let newId=state.cart.findIndex((item)=>item.id===action.payload);

        let newArr=[...state.cart];

        newArr.splice(newId,1);

        return(
            {
                ...state,
                cart:newArr
            }
        )
    }
    

    if(action.type==="ADD_ADDRESS"){
        return({
            ...state,
            adress:action.payload
        })
    }
    
    if(action.type==="ADD_USER"){
        return(
            {
                ...state,
                user:action.payload
            }
        )
    }

    if(action.type==="REMOVE_ALL"){
        return({
            ...state,
            cart:[],
            total:0
        })
    }

}

export default reducer;