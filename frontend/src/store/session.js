// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  if (data.user) dispatch(setUser(data.user));
  return response;
};

export const signup = (userInfo) => async dispatch => {
  const { username, email, password } = userInfo
  const response = await csrfFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password
    })
  })

  const data = await response.json();
  dispatch(setUser(data.user));
  return response
}

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};


export default sessionReducer;




// import { csrfFetch } from "./csrf"

// const SET_USER = "session/SET_USER"
// const REMOVE_USER = "session/REMOVE_USER"

// const setSessionUser = user => ({
//   type: SET_USER,
//   user
// })

// const removeSessionUser = () => {
//   return {
//     type: REMOVE_USER
//   }
// }

// export const loginThunk = ({ credential, password }) => async (dispatch) => {
//   const response = await csrfFetch('/api/session', {
//     method: 'POST',
//     body: JSON.stringify({
//       credential,
//       password
//     })
//   });

//   const data = await response.json();
//   dispatch(setSessionUser(data.user));
//   return response
// }



// const initialState = {
//   user: null
// }


// const sessionReducer = (state = initialState, action) => {
//   let newState;
//   switch (action.type) {
//     case SET_USER:
//       newState = Object.assign({}, state);
//       newState.user = action.payload;
//       return newState;
//     case REMOVE_USER:
//       newState = Object.assign({}, state);
//       newState.user = null;
//       return newState;
//     default:
//       return state;
//   }
// };

// export default sessionReducer;
