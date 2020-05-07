export const addExpenseAction = (expense) => {
    return {
        type: actionTypes.ADD_EXPENSE,
        payload: expense,
    }
}
export const updateExpenseAction = (expense) => {
    return {
        type: actionTypes.UPDATE_EXPENSE,
        payload: expense,
    }
}
export const deleteExpenseAction = (expense) => {
    return {
        type: actionTypes.DELETE_EXPENSE,
        payload: expense,
    }
}

export const actionTypes = {
    DELETE_EXPENSE: 'DELETE_EXPENSE',
    UPDATE_EXPENSE: 'UPDATE_EXPENSE',
    ADD_EXPENSE: 'ADD_EXPENSE',
}
