import React,{useContext} from 'react'
import { GlobalContext } from '../context/Context'

function Balance() {
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(amount=>amount.amount)
    const balance = amount.reduce((acc,amount)=>(acc += amount),0).toFixed(2)
    return (
        <div className="balance-div">
            <h3>Current Balance</h3>
            <h1>${balance}</h1>
        </div>
    )
}

export default Balance
