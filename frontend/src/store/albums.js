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
        if (!newState[stateKey]) {
          newState[stateKey] = {}
        }
        newState[stateKey][album.id] = album

      })
      return newState
    case CREATE_ALBUM:
      let stateKey = `BELONGS-TO-${action.newAlbum.User.username}`
      if (!newState[stateKey]) {
        newState[stateKey] = {}
      }
      newState[stateKey][action.newAlbum.id] = action.newAlbum
      return newState
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

export const createAlbum = ({ albumName, coverImage, userId }) => async dispatch => {
  const res = await csrfFetch('/api/albums', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: albumName,
      coverImage,
      userId
    })
  })

  if (res.ok) {
    const newAlbum = await res.json()
    console.log(newAlbum)
    dispatch(create(newAlbum))
  }
}



export default albumsReducer
