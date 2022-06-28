import { csrfFetch } from "./csrf";

const GET_PICTURES = 'pictures/getPictures'


const getPictures = (pictures) => {
  return {
    type: GET_PICTURES,
    pictures
  }
}

export const explorePictures = () => async (dispatch) => {
  const res = await csrfFetch('/api/pictures')

  const data = await res.json();
  dispatch(getPictures(data.pictures))
  return res
}

const initialState = []
const picturesReducer = (state = initialState, action) => {
  // let newState = { ...state }
  switch (action.type) {
    case GET_PICTURES:
      return [action.pictures];
    default:
      return state;
  }
}

export default picturesReducer
