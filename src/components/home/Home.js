import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

    const [expenseList, setExpenseList] = useState([]);

    if (expenseList.length === 0) {
        return (
            <div className="no-expenses-message">
                <h2>There's no expenses yet !</h2>
                <h4>go ahead and add one</h4>
                <Link to="/add">
                    <Button variant="primary" size="lg" block>
                        Add Expense
                    </Button>
                </Link>
            </div>

        )
    }
    else {
        return (
            <div className="home-section">
                <div className="expenses-list container">

                </div>
                <div className="sidebar container">
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
