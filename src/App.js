import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import Add from './components/add/Add'
import './App.scss'

function App() {
    return (
        <BrowserRouter>
            <div className="App fluid-container">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/Add" component={Add} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
