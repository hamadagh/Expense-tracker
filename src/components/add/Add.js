import React from 'react'
import { useState } from 'react'
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { addExpenseAction } from '../../redux/actions/action'
import './add.scss'

const Add = () => {
    const [expense, setExpense] = useState({
        title: '',
        amount: '',
        date: '',
        expenseType: '',
    })

    const dispatch = useDispatch()
    const [toHome, setToHome] = useState(false)

    const handleChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            expense.expenseType.trim() === '' ||
            expense.expenseType.trim() === 'Select a type'
        ) {
            alert('Please select a type')
        } else {
            dispatch(addExpenseAction(expense))
            setToHome(true)
        }
    }

    return (
        <div className="add-section container">
            {toHome ? <Redirect to="/" /> : null}
            <div className="back-to-home pt-4">
                <Link to="/">{`<`} Back To Home</Link>
            </div>
            <div className="add-header text-center mb-4 mt-5">
                <h2>Add Expenses</h2>
            </div>
            <div className="add-form">
                <Form onSubmit={handleSubmit}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                Title
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="title"
                            required
                            placeholder="Title"
                            aria-label="title"
                            aria-describedby="basic-addon1"
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                €
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            required
                            name="amount"
                            type="number"
                            placeholder="Amount"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                Type
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            required
                            as="select"
                            name="expenseType"
                            onChange={handleChange}
                            defaultValue
                        >
                            <option>Select a type</option>
                            <option>Clothes</option>
                            <option>Leisure</option>
                            <option>Work</option>
                        </FormControl>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                Date
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="date"
                            type="date"
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <div className="add-button mx-auto">
                        <Button
                            variant="outline-primary"
                            type="submit"
                            size="lg"
                            onSubmit={handleSubmit}
                            block
                        >
                            Save
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default withRouter(Add)
