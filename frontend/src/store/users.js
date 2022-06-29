import { csrfFetch } from "./csrf";

const GET_USERS = 'users/getUsers'

const getUsers = (users) => ({
  type: GET_USERS,
  users
})

export const getAllUsers = () => async disptach => {
  const res = await csrfFetch('/api/users')

  const data = await res.json();
  disptach(getUsers(data.users))
}

const initialState = {
  allUsers: []
}

const usersReducer = (state = initialState, action) => {
  let newState = { ...state }
  switch (action.type) {
    case GET_USERS:
      newState.allUsers = action.users
      action.users.forEach(user => {
        newState[user.id] = user
      });
      return newState
    default:
      return state
  }
}
export default usersReducer
