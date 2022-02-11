import React,{createContext, useReducer} from 'react'
import {Reducer} from './Reducer'
const initialState = {
    transactions:[

    ]
}
// creating global context
export const GlobalContext = createContext(initialState)



// creating global provider for context
export const GlobalProvider = ({children})=>{

    const [state , dispatch] = useReducer(Reducer,initialState)
// Action for Transaction
const delTransaction = (id) =>{
    dispatch({
        type: "DELETE",
        payload:id
    })
} 
const addTransaction = (transaction) =>{
    dispatch({
        type: "ADD",
        payload: transaction
    })
}
    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            delTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}