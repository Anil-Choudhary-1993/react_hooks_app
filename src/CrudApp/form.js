import React from 'react'
import context from './Context';
import { addUser } from './actions';

function Form() {
  let { state, dispatch } = React.useContext(context);
  let [name, setName] = React.useState(state.user.name);
  let [userName, setUserName] = React.useState(state.user.userName);

  React.useEffect(() => {
    if (state.user.name) setName(state.user.name);
    if (state.user.userName) setUserName(state.user.userName);
  }, [state.user])

  const saveUser = () => {
    setUserName('');
    setName('');
    if (state.user.id) {
      dispatch(addUser({
        ...state.user,
        name: name,
        userName: userName
      }))
    } else {
      dispatch(addUser({
        name: name,
        userName: userName
      }))
    }
  }

  return (
    <div className="form">
      <h1>Add User</h1>
      <div className="input-group">
        <span className="input-group-title">Name</span>
        <input className="input-group-field" placeholder="Name" type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="input-group">
        <span className="input-group-title">User-Name</span>
        <input className="input-group-field" type="text" placeholder="UserName" value={userName} onChange={e => setUserName(e.target.value)} />
      </div>
      <div className="input-group">
        <button className="button" onClick={saveUser}>
          {state.user.name && state.user.userName ? 'Edit User' : 'Add User'}
        </button>
      </div>
    </div>
  )
}

export default Form;