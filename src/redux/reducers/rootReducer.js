const initState = {
    expenses: [],
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
            }
        default:
            return state
    }
}

export default rootReducer;