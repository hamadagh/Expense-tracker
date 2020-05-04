import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Add from './components/add/Add';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Add" component={Add} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
