import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import CrudApp from './CrudApp';
import Autocomplete from './Autocomplete';
import SeacrhList from './SearchListApp';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/crud" component={CrudApp} />
        <Route exact path="/search" component={SeacrhList} />
        <Route exact path="/" component={Autocomplete} />
      </Switch>
    </Router>
  );
}

export default App;
