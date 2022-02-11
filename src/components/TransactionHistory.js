import React,{useContext} from 'react'
import {GlobalContext} from '../context/Context'
import Transactions from './Transactions';

function TransactionHistory() {
    let {transactions} = useContext(GlobalContext)
    console.log(transactions);
    return (
        <div className="history">
            <h1>Transaction History</h1>
            <hr/>
            <ul className="list-items">
                {
                    transactions.map(transaction=>(
                        <Transactions key={transaction.id} transaction={transaction}/>
                    ))
                }
                
            </ul>
        </div>
    )
}

export default TransactionHistory
