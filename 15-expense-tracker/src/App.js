import React, { useContext } from 'react';
import Calculator from './Calculator'
import IncomeChart from './IncomeChart';
import './App.css'
import { AppContext } from './context';


const App = () => {
    let { income, expense,incomeTotal,expenseTotal } = useContext(AppContext);
    return (<>
        <div className="app">
            <div className="left_app">
                <h1>Income</h1>
                <h2>${incomeTotal.toFixed(2)}</h2>
                <IncomeChart moneyType={income} />
            </div>
            <div className="center_app">
                <Calculator />
            </div>
            <div className="right_app">
                <h1>Expense</h1>
                <h2>${expenseTotal.toFixed(2)}</h2>
                <IncomeChart moneyType={expense} />
            </div>
        </div>
    </>)
}

export default App;