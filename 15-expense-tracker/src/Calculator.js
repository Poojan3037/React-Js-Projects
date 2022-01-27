import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Calculator.css';
import { AppContext } from './context';

const Calculator = () => {

    let { dispatcher, income, expense, incomeTotal, expenseTotal, balance, history } = useContext(AppContext);

    let [money, setMoney] = useState('');
    let [Category, setCategory] = useState('');
    let [type, setType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let m = parseFloat(money)
        console.log(typeof m)
        if (type === 1) {
            console.log("expense")
            let item = {
                amount: m,
                category: Category,
                type: "expense"
            }
            dispatcher({ type: "ADD_EXPENSE", payload: item })
            dispatcher({ type: "CALCULATE_EXPENSE" })
            dispatcher({ type: "MINUS_BALANCE", payload: m })
            dispatcher({ type: "UPDATE_HISTORY", payload: item })
        }
        if (type === 0) {
            console.log("income")
            let item = {
                amount: m,
                category: Category,
                type: "income"
            }
            dispatcher({ type: "ADD_INCOME", payload: item })
            dispatcher({ type: "CALCULATE_INCOME" })
            dispatcher({ type: "ADD_BALANCE", payload: m })
            dispatcher({ type: "UPDATE_HISTORY", payload: item })
        }

        setMoney('');
        setType('');
        setCategory('')
    }

    console.log(history)

    return (
        <>
            <div className="calculator">
                <div className="calculator_title">
                    <h2>Expense Tracker</h2>
                </div>
                <div className="calculator_balance">
                    <h3>Your Balance</h3>
                    <h1>${balance.toFixed(2)}</h1>
                </div>
                <div className="calculator_total">
                    <div className="income">
                        <h3>Income</h3>
                        <h3><span>${incomeTotal.toFixed(2)}</span></h3>
                    </div>
                    <div className="expense">
                        <h3>Expense</h3>
                        <h3><span>${expenseTotal.toFixed(2)}</span></h3>
                    </div>
                </div>
                <form className="calculator_new_transaction" onSubmit={handleSubmit}>
                    <div className="calculator_input">
                        <TextField id="standard-basic" label="Amount" value={money} onChange={(e) => setMoney(e.target.value)} />
                    </div>
                    <div className="calculator_input">
                        <TextField className="calculator_category" id="standard-basic" label="Category" value={Category} onChange={(e) => setCategory(e.target.value)} />
                    </div>

                    <div className="calculator_input">
                        <FormControl className="calculator_type">
                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <MenuItem value={0}>Income</MenuItem>
                                <MenuItem value={1}>Expense</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Button variant="contained" className="calculator_button" type="submit">Add Transaction</Button>
                </form>
                <div className="calculator_history">
                    <h3 className="history_title">History</h3>
                    <div className="history_box">
                        {
                            history.map((item, index) => {

                                if (item.type == "income") {
                                    console.log("income")
                                    return (
                                        <>
                                            <div key={index} className="history green">
                                                <h4>{item.category}</h4>
                                                <h4>+ {item.amount.toFixed(2)}</h4>
                                            </div>
                                        </>
                                    )
                                } if (item.type == "expense") {
                                    return (
                                        <>
                                            <div key={index} className="history red">
                                                <h4>{item.category}</h4>
                                                <h4>- {item.amount.toFixed(2)}</h4>
                                            </div>
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator;