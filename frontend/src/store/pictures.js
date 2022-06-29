import { csrfFetch } from "./csrf";

const GET_PICTURES = 'pictures/getPictures';
const CREATE_PICTURE = 'pictures/createPicture'


const getPictures = (pictures) => {
  return {
    type: GET_PICTURES,
    pictures
  }
}

const newPicture = (input) => {
  return {
    type: CREATE_PICTURE,
    input
  }
}

export const explorePictures = () => async (dispatch) => {
  const res = await csrfFetch('/api/pictures')

  const data = await res.json();
  dispatch(getPictures(data.pictures))
  return res
}

export const createPicture = (newPictureInfo) => async dispatch => {
  const { name, userId, imageUrl } = newPictureInfo
  const res = await csrfFetch('/api/pictures', {
    method: 'POST',
    body: JSON.stringify({
      name,
      userId,
      imageUrl
    })
  })

  const data = res.json();
  dispatch(newPicture(data.newPicture))
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
    case CREATE_PICTURE:
      return action.input
    default:
      return state;
  }
}

export default picturesReducer
