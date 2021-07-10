import React from 'react'
import Form from './form';
import Table from './table';
import './index.css';
import Context from './Context';
import userReducer from './reducer';

function CrudApp() {
  const [state, dispatch] = React.useReducer(userReducer, {
    users: [],
    user: {
      id: '',
      name: '',
      userName: ''
    }
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="crud_app">
        <h1>Crud App With Hooks</h1>

        <div className="wrapper">
          <Form />
          <Table />
        </div>
      </div>
    </Context.Provider>
  )
}

export default CrudApp;