import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, FormControl, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ExpenseList from './expenseList/ExpenseList'
import './home.scss'

const Home = () => {
    const [selectedFilter, setSelectedFilter] = useState('all')
    const [dateFilter, setDateFilter] = useState('')
    const [sortExpenses, setSortExpenses] = useState('ascending')

    const expenses = useSelector((state) => state.expenses)
    let filteredExpenses = expenses

    // getting total expenses amount
    let totalAmount = 0

    if (expenses.length) {
        totalAmount = expenses
            .map((exp) => exp.amount)
            .reduce((prev, next) => {
                return parseFloat(prev) + parseFloat(next)
            })
    }

    // handle filter by type

    const handleFilterType = (e) => {
        setSelectedFilter(e.target.value)
    }

    if (selectedFilter !== 'all') {
        filteredExpenses = expenses.filter(
            (exp) => exp.expenseType.toLowerCase() === selectedFilter
        )
    }

    // handle filter by date

    const handleFilterDate = (e) => {
        setDateFilter(e.target.value)
    }

    if (dateFilter !== '') {
        filteredExpenses = expenses.filter((exp) => exp.date === dateFilter)
    }

    // handle expanses sorting

    const handleSortedExpense = (e) => {
        setSortExpenses(e.target.value)
    }

    if (sortExpenses === 'ascending') {
        filteredExpenses = expenses.sort((a, b) => {
            if (new Date(a.date) > new Date(b.date)) return -1
            if (new Date(a.date) < new Date(b.date)) return 1
        })
    }
    if (sortExpenses === 'descending') {
        filteredExpenses = expenses.sort((a, b) => {
            if (new Date(a.date) > new Date(b.date)) return 1
            if (new Date(a.date) < new Date(b.date)) return -1
        })
    }

    /////////////////////////////////////////////////////////////////////////////////7

    if (expenses.length === 0) {
        return (
            <div className="no-expenses-message mx-auto">
                <div className="add-expense-message">
                    <h2 className="text-center mb-4">
                        There's no expenses yet !
                    </h2>
                    <h4 className="text-center mb-5">go ahead and add some</h4>
                    <Link to="/add">
                        <Button variant="primary" size="lg" block>
                            Add Expense
                        </Button>
                    </Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className="home-section">
                <div className="sidebar container">
                    <div className="sidebar-filter d-flex">
                        <div className="filter-by-type">
                            <h5>Filter by type</h5>
                            <FormControl
                                as="select"
                                onChange={handleFilterType}
                            >
                                <option value="all">All</option>
                                <option value="clothes">Clothes</option>
                                <option value="leisure">Leisure</option>
                                <option value="work">Work</option>
                            </FormControl>
                        </div>
                        <div className="filter-by-date">
                            <h5>Fillter by date</h5>
                            <FormControl
                                name="date"
                                type="date"
                                onChange={handleFilterDate}
                            />
                        </div>
                        <div className="sort-by-date">
                            <h5>Sort by date</h5>
                            <FormControl
                                as="select"
                                onChange={handleSortedExpense}
                            >
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </FormControl>
                        </div>
                    </div>
                    <div className="sidebar-balance">
                        <h4>Total Balance</h4>
                        <span>
                            {totalAmount} <span className="currency">€</span>
                        </span>
                    </div>
                    <Link to="/add">
                        <Button variant="primary" size="lg" block>
                            Add Expense
                        </Button>
                    </Link>
                </div>
                <div className="expenses-list container">
                    <ExpenseList expenses={filteredExpenses} />
                </div>
            </div>
        )
    }
}

export default Home
