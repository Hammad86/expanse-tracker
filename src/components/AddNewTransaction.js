import React,{useState ,useContext} from 'react'
import { GlobalContext } from '../context/Context';

function AddNewTransaction() {
    let [description , setDescription] = useState();
    let [amount , setAmount] = useState();
    const {addTransaction} = useContext(GlobalContext)

    const onSubmit=(e)=>{
        e.preventDefault();
        const newTransaction={
            id: new Date().getTime(),
            description: description,
            amount: +amount
        }
        addTransaction(newTransaction)
        setDescription('');
        setAmount('');
    }
    return (
        <div className="add-trasaction">
            <h1>Add New Transaction</h1>
            <hr/>
            <form onSubmit={onSubmit}>
            <div className="input-div">
                <label htmlFor="description">Description</label>
                <input type="text" id="description" required onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
            </div>
            <div className="input-div">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" required onChange={(e)=>{setAmount(e.target.value)}} value={amount}/>
            </div>
            <input className="btn" type="submit" value="Add Transaction"/>
            </form>
        </div>
    )
}

export default AddNewTransaction
