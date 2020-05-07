import { actionTypes } from '../actions/action'

const initState = {
    expenses: [],
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_EXPENSE:
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
                    },
                ],
            }
        case actionTypes.UPDATE_EXPENSE:
            const expenses = [...state.expenses]
            const expIndex = expenses.findIndex(
                (exp) => exp.id === action.payload.id
            )

            expenses[expIndex] = {
                id: Date.now(),
                title: action.payload.title,
                date: action.payload.date,
                amount: action.payload.amount,
                expenseType: action.payload.expenseType,
            }

            return {
                ...state,
                expenses: [...expenses],
            }
        case actionTypes.DELETE_EXPENSE:
            return {
                ...state,
                expenses: [
                    ...state.expenses.filter(
                        (exp) => exp.id !== action.payload.id
                    ),
                ],
            }
        default:
            return state
    }
}

export default rootReducer
