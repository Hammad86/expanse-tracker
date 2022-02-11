import React,{useContext} from 'react'
import { GlobalContext } from '../context/Context';

function Transactions({transaction}) {
    const sign = transaction.amount > 0 ? "+" : "-";
    const type = transaction.amount > 0 ? "plus" : "minus";
    const {delTransaction} = useContext(GlobalContext)
    return (
        <li className={type}>{transaction.description} <span>{sign}${Math.abs (transaction.amount)}</span>
        <button onClick={()=>delTransaction(transaction.id)} className="delete-btn">X</button></li>
    )
}

export default Transactions
