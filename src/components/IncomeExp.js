import React,{useContext} from 'react'
import { GlobalContext } from '../context/Context'

function IncomeExp() {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map(transaction=>transaction.amount)
    const income = amount.
    filter(amounts=> amounts > 0)
    .reduce((acc,amounts) => (acc+=amounts),0)
    .toFixed(2)
    const expanse = Math.abs(amount
        .filter(amount => amount < 0)
        .reduce((acc,amount)=>(acc += amount),0))
        .toFixed(2)

    return (
        <div className="income-exp">
            <div className="income-div">
                <h2>Income</h2>
                <h3>{income}</h3>
            </div>
            <hr className="hr1"/>
            <div className="exp-div">
                <h2>Expanse</h2>
                <h3>{expanse}</h3>
            </div>
        </div>
    )
}

export default IncomeExp
