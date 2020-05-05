const addExpenseAction = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        payload: expense,
    }
}

export default addExpenseAction;