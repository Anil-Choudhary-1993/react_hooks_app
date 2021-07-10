import {
  ADD_USER,
  EDIT_USER,
  DELETE_USER
} from './types';

function userReducer(state, action) {
  switch (action.type) {
    case ADD_USER:
      if (action.payload.id) {
        return {
          ...state,
          users: state.users.map(val => val.id === action.payload.id ? action.payload : val),
          user: {
            id: '',
            name: '',
            userName: ''
          }
        };
      } else {
        return {
          ...state,
          users: [
            ...state.users,
            {
              id: state.users.length + 1,
              ...action.payload
            }
          ],
          user: {
            id: '',
            name: '',
            userName: ''
          }
        }
      };
    case EDIT_USER:
      return {
        ...state,
        user: state.users.find(val => val.id === action.payload) || { name: '', userName: '' }
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(val => val.id !== action.payload)
      };
    default:
      return state;
  }
}

export default userReducer;