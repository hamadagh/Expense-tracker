import React from 'react'

const ExpenseList = (props) => {
    return (
        <div className="expense-list-card">
            <div>
                {props.type}
            </div>

        </div>
    )
}

export default ExpenseList
