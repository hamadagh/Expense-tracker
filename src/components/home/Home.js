import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ExpenseList from './expenseList/ExpenseList';
import './home.scss';

const Home = () => {

    const [expenseList, setExpenseList] = useState([
        {
            id: 1,
            title: "buying a shirt",
            amount: "50",
            date: "03/24/2020",
            expenseType: "clothes",
        },
        {
            id: 2,
            title: "buying a shirt",
            amount: "50",
            date: "03/24/2020",
            expenseType: "work",
        },
        {
            id: 3,
            title: "buying a shirt",
            amount: "50",
            date: "03/24/2020",
            expenseType: "leisure",
        }
    ]);

    if (expenseList.length === 0) {
        return (
            <div className="no-expenses-message mx-auto">
                <div className="add-expense-message">
                    <h2 className="text-center mb-4">There's no expenses yet !</h2>
                    <h4 className="text-center mb-5">go ahead and add some</h4>
                    <Link to="/add">
                        <Button variant="primary" size="lg" block>
                            Add Expense
                    </Button>
                    </Link>
                </div>

            </div>

        )
    }
    else {
        return (
            <div className="home-section">
                <div className="expenses-list container">
                    {
                        expenseList.map((expense) => (
                            <ExpenseList id={expense.id} title={expense.title} amount={expense.amount} date={expense.date} type={expense.expenseType} key={expense.id} />
                        )
                        )
                    }
                </div>
                <div className="sidebar container">
                    <div className="sidebar-balance">
                        <h4>
                            Total Balance
                        </h4>
                        <span>
                            1200 <span className="currency">€</span>
                        </span>
                    </div>
                    <Link to="/add">
                        <Button variant="primary" size="lg" block>
                            Add Expense
                        </Button>
                    </Link>

                </div>
            </div>
        )
    }

}

export default Home
