const reducer=(state,action)=>{
    if(action.type==="ADD_INCOME"){
        return({
            ...state,
            income:[...state.income,action.payload]
        })
    }

    if(action.type==="ADD_EXPENSE"){
        return({
            ...state,
            expense:[...state.expense,action.payload]
        })
    }

    if(action.type==="CALCULATE_INCOME"){
        
        let income_total=state.income.reduce((intial,item)=>{
            return intial+item.amount
        },0.00)


        return({
            ...state,
            incomeTotal:income_total
        })
    }

    if(action.type==="CALCULATE_EXPENSE"){
        let expense_total=state.expense.reduce((intial,item)=>{
            return intial+item.amount;
        },0.00)


        return({
            ...state,
            expenseTotal:expense_total
        })
    }

    if(action.type==="ADD_BALANCE"){
        let item=state.balance+action.payload;
        return({
            ...state,
            balance:item
        })
    }

    if(action.type==="MINUS_BALANCE"){
        let item=state.balance-action.payload;
        return({
            ...state,
            balance:item
        })
    }

    if(action.type==="UPDATE_HISTORY"){
        return({
            ...state,
            history:[action.payload,...state.history]
        })
    }


}

export default reducer;