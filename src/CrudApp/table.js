import React from 'react'
import context from './Context';
import { editUser, deleteUser } from './actions';

function Table() {
  let { state, dispatch } = React.useContext(context);
  return (
    <div className="table">
      <h1>View Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>User-Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.users?.length > 0 && state.users.map((result, index) => {
            return (
              <tr key={index}>
                <td>
                  {result.name}
                </td>
                <td>
                  {result.userName}
                </td>
                <td>
                  <button onClick={() => dispatch(editUser(result.id))}>Edit</button>
                  <button onClick={() => dispatch(deleteUser(result.id))}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table