import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import { loadState, saveState } from './localstorage'

const persistedState = loadState()
const store = createStore(
    rootReducer,
    persistedState,
    window.devToolsExtension && window.devToolsExtension()
)

store.subscribe(() => {
    console.log(persistedState)
    saveState({
        expenses: store.getState().expenses,
    })
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
