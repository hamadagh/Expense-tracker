import React, { useState } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {
    deleteExpenseAction,
    updateExpenseAction,
} from '../../../redux/actions/action'

const ExpenseItem = ({ expense }) => {
    const dispatch = useDispatch()

    const [editing, setEditing] = useState(false)

    const [newAmount, setNewAmount] = useState(expense.amount)
    const [newTitle, setNewTitle] = useState(expense.title)

    const handleSaveEdit = () => {
        const newExpense = { ...expense, title: newTitle, amount: newAmount }
        dispatch(updateExpenseAction(newExpense))
        setEditing(false)
    }

    return (
        <ListGroup.Item>
            <div>
                Amount:{' '}
                {editing ? (
                    <input
                        type="number"
                        onChange={(e) => setNewAmount(e.target.value)}
                        value={newAmount}
                    />
                ) : (
                    <span>{expense.amount}</span>
                )}
            </div>
            <div>
                Title:{' '}
                {editing ? (
                    <input
                        type="text"
                        onChange={(e) => setNewTitle(e.target.value)}
                        value={newTitle}
                    />
                ) : (
                    <span>{expense.title}</span>
                )}
            </div>
            <div>Date: {expense.date}</div>
            <div>Expense type: {expense.expenseType}</div>
            <Button
                variant="danger"
                onClick={() => dispatch(deleteExpenseAction(expense))}
            >
                Delete
            </Button>
            {editing ? (
                <Button variant="info" onClick={handleSaveEdit}>
                    Save
                </Button>
            ) : (
                <Button onClick={() => setEditing(true)} variant="info">
                    Edit
                </Button>
            )}
        </ListGroup.Item>
    )
}

const ExpenseList = ({ expenses }) => {
    return (
        <ListGroup variant="flush">
            {expenses.map((exp) => (
                <ExpenseItem expense={exp} key={exp.id} />
            ))}
        </ListGroup>
    )
}

export default ExpenseList
