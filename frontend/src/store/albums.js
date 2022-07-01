import { csrfFetch } from "./csrf";

const GET_ALBUMS = 'albums/GET_ALBUMS'
const CREATE_ALBUM = 'albums/CREATE_ALBUM'
const UPDATE_ALBUM = 'albums/UPDATE_ALBUM'
const DELETE_ALBUM = 'albums/DELETE_ALBUM'

const load = (albums) => ({
  type: GET_ALBUMS,
  albums
})

const create = (newAlbum) => ({
  type: CREATE_ALBUM,
  newAlbum
})

const update = (album) => ({
  type: UPDATE_ALBUM,
  album
})

const remove = (albums) => ({
  type: DELETE_ALBUM,
  albums
})

const initialState = {}

const albumsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_ALBUMS:
      action.albums.forEach(album => {
        let stateKey = `BELONGS-TO-${album.User.username}`
        let id = album.id
        if (!newState[stateKey]) {
          newState[stateKey] = {}
        }
        newState[stateKey][id] = album

      })
      return newState
    case CREATE_ALBUM:

    case UPDATE_ALBUM:

    case DELETE_ALBUM:

    default:
      return state
  }
}

export const getAlbums = () => async dispatch => {
  const res = await csrfFetch('/api/albums')

  if (res.ok) {
    const albums = await res.json()
    dispatch(load(albums))
  }
}



export default albumsReducer
