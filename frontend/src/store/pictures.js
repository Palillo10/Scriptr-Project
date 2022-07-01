import { csrfFetch } from "./csrf";

const GET_PICTURES = 'pictures/getPictures';
const CREATE_PICTURE = 'pictures/createPicture';
const REMOVE_PICTURE = 'pictures/deletePicture';
const UPDATE_PICTURE = 'pictures/update'


const getPictures = (pictures) => {
  return {
    type: GET_PICTURES,
    pictures
  }
}

const newPicture = (newPicture, pictures) => {
  return {
    type: CREATE_PICTURE,
    newPicture,
    pictures
  }
}
const removePicture = (pictureId, pictures) => ({
  type: REMOVE_PICTURE,
  pictureId,
  pictures
})

const update = (picture, pictures) => {
  return {
    type: UPDATE_PICTURE,
    picture,
    pictures
  }
}


export const updatePicture = (pictureId, pictureInfo) => async dispatch => {
  const res = await csrfFetch(`/api/pictures/${pictureId}`, {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pictureInfo)
  })

  if (res.ok) {
    const { pictures, picture } = await res.json();
    dispatch(update(picture, pictures))
    return picture
  }
}

export const deletePicture = (pictureId, pictureInfo) => async dispatch => {
  const res = await csrfFetch(`/api/pictures/${pictureId}`, {
    method: 'DELETE'
  })

  if (res.ok) {
    const data = await res.json();
    dispatch(removePicture(pictureId, data.pictures))
  }


}

export const explorePictures = () => async (dispatch) => {
  const res = await csrfFetch('/api/pictures')

  if (res.ok) {
    const data = await res.json();
    dispatch(getPictures(data.pictures))
    return res
  }
}

export const createPicture = (newPictureInfo) => async dispatch => {
  const { name, userId, imageUrl } = newPictureInfo
  const res = await csrfFetch('/api/pictures', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      userId,
      imageUrl
    })
  })

  if (res.ok) {
    const data = await res.json();
    dispatch(newPicture(data.newPicture, data.pictures))
  }
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
      newState[action.newPicture.id] = action.newPicture
      newState.allPictures = action.pictures
      return newState
    case REMOVE_PICTURE:
      delete newState[action.pictureId];
      newState.allPictures = action.pictures;
      return newState
    case UPDATE_PICTURE:
      newState[action.picture.id] = action.picture;
      newState.allPictures = action.pictures;
      return newState
    default:
      return state;
  }
}

export default picturesReducer
