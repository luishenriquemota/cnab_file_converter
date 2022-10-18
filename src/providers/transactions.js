import { createContext, useContext, useState } from "react";


export const TransactionContext = createContext()

export const TransactionsProvider = ({children}) => {
  const [list, setList] = useState([])

  return (
    <TransactionContext.Provider value={{list, setList}}>
      {children}
    </TransactionContext.Provider>
  )

}
export const useTransactions = () => useContext(TransactionContext)