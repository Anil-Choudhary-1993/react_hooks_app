import {
  ADD_USER,
  EDIT_USER,
  DELETE_USER
} from './types';

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user
});

export const editUser = (userId) => ({
  type: EDIT_USER,
  payload: userId
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId
});