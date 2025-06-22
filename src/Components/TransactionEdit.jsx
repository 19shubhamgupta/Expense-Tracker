import React from 'react'
import TransactionForm from './TranscationForm'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const TransactionEdit = () => {
    const {id} = useParams()
    const transactions = useSelector(state => state.transaction)
    const transaction = transactions[id]
  return (
      <TransactionForm transaction={transaction} idx = {id}/>
  )
}

export default TransactionEdit
