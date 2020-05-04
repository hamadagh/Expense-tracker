import React from 'react';
import { useState, useEffect } from 'react';
import { InputGroup, FormControl, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Add = () => {

    const [expense, setExpense] = useState({
        title: '',
        amount: '',
        date: '',
        expenseType: '',
    });
    const [showAlert, setShowAlert] = useState(false);


    const handleChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
        setShowAlert(false)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (expense.title.trim() === "") {
            setShowAlert(true)
        } else if (expense.amount.trim() === "") {
            setShowAlert(true)
        } else if (expense.date.trim() === "") {
            setShowAlert(true)
        } else if (expense.type.trim() === "" || expense.type.trim() === "Select a type") {
            setShowAlert(true)
        }
    }

    console.log(expense)

    return (
        <div className="add-section">
            <div className="back-to-home">
                <Link to="/">Back To Home</Link>
            </div>
            <div className="add-form">
                <Form onSubmit={handleSubmit}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="title"
                            placeholder="Title"
                            aria-label="title"
                            aria-describedby="basic-addon1"
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">€</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="amount"
                            placeholder="Amount"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Type</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="select" name="expenseType" onChange={handleChange} defaultValue>
                            <option>Select a type</option>
                            <option>Clothes</option>
                            <option>Leisure</option>
                            <option>Work</option>
                        </FormControl>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Date</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="date"
                            type="date"
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <div className="add-button mx-auto">
                        <Button variant="outline-primary" type="submit" size="lg" onSubmit={handleSubmit} block>Save</Button>
                    </div>
                    <Alert variant="danger" show={showAlert}>Please fill all the input</Alert>
                </Form>
            </div>

        </div>
    )
}

export default Add
