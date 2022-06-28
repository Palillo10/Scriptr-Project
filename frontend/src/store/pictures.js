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

const initialState = {
  allPictures: []
}

const picturesReducer = (state = initialState, action) => {
  let newState = { ...state }
  switch (action.type) {
    case GET_PICTURES:
      action.pictures.forEach(picture => {
        newState[picture.id] = picture
      });
      newState.allPictures = action.pictures
      return newState;
    default:
      return state;
  }
}

export default picturesReducer
