import React, { useState } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {
    deleteExpenseAction,
    updateExpenseAction,
} from '../../../redux/actions/action'
import './expenseList.scss'

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
        <ListGroup.Item className="mb-2 expense-item">
            <div>
                <div className="title-and-date">
                    <div>
                        {editing ? (
                            <input
                                type="text"
                                onChange={(e) => setNewTitle(e.target.value)}
                                value={newTitle}
                            />
                        ) : (
                            <span className="title">{expense.title}</span>
                        )}
                    </div>
                    <div className="date">{expense.date}</div>
                </div>

                <div>
                    {editing ? (
                        <input
                            type="number"
                            onChange={(e) => setNewAmount(e.target.value)}
                            value={newAmount}
                        />
                    ) : (
                        <span className="amount">{expense.amount} €</span>
                    )}
                </div>
            </div>

            <div className="type-and-buttons">
                <div className="type">Type: {expense.expenseType}</div>
                <div>
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
                </div>
            </div>
        </ListGroup.Item>
    )
}

const ExpenseList = ({ expenses }) => {
    return (
        <div className="expense-group">
            <ListGroup variant="flush">
                {expenses.map((exp) => (
                    <ExpenseItem expense={exp} key={exp.id} />
                ))}
            </ListGroup>
        </div>
    )
}

export default ExpenseList
