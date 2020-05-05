const initState = {
    expenses: [],
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    {
                        id: Date.now(),
                        title: action.payload.title,
                        amount: action.payload.amount,
                        date: action.payload.date,
                        expenseType: action.payload.expenseType,
                    }
                ]
            }
        default:
            return state
    }
}

export default rootReducer;